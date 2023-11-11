import CreateJobInterface from "./interfaces/create-job.interface"
import JobsModel from "./jobs.model"
import ApplicationsModel from "../applications/applications.model";
import UserModel from "../users/users.model";
import { distances } from "../utils/shortestDistance";
import { calculateDParameter } from "../utils/calculateD";
import { calculateScore } from "../utils/calculateScore";

export default class JobsServices {

    private jobsModel: JobsModel
    private applicationsModel: ApplicationsModel
    private userModel: UserModel

    constructor() {
        this.jobsModel = new JobsModel();
        this.applicationsModel = new ApplicationsModel();
        this.userModel = new UserModel();
    }

    public createJob = async (job: CreateJobInterface) => {

        const verifyJobExists = await this.jobsModel.getJobs(job.title, 0, 0)
        if (verifyJobExists.length != 0) {
            return console.log("Vaga já Cadastrado!")
        }

        const toCreate = {
            company: job.company,
            title: job.title,
            description: job.description,
            locality: job.locality,
            experienceLevel: job.experienceLevel
        }

        const created = await this.jobsModel.createJob(toCreate)
        if (!created)
            throw new Error("Erro ao Criar Vaga!")

        return created
    }

    public getApplicationsByJob = async (jobId: string) => {
        const applications = await this.applicationsModel.getApplicationsByJob(jobId)
        return applications
    }

    public getRankApplicationsJob = async (jobId: string) => {


        const jobData = await this.getJobData(jobId)

        const jobLocation = jobData.locality
        const jobLevel = jobData.experienceLevel // NV

        const applications = await this.getApplicationsByJob(jobId)

        let ranking: any = []
        for (const app of applications) {
            const user = app?.user

            const userInformations = await this.getUserData(user)

            const location = userInformations.locality
            const level = userInformations.experienceLevel

            const shortDistance = distances.find((item) => item.orgin === location && item.destiny === jobLocation)

            const dValue = shortDistance ? calculateDParameter(shortDistance.dist) : 0

            const N = 100 - 25 * Math.abs(jobLevel - level)

            const score = calculateScore(N, dValue)

            const data = {
                name: userInformations.name,
                phone: userInformations.phone,
                email: userInformations.email,
                level: userInformations.experienceLevel,
                score: Math.floor(score)
            }
            // console.log("DATA", data)
            ranking.push(data)
        }

        return ranking

    }

    public getUserData = async (userId: any) => {

        const user = await this.userModel.getUserById(userId)

        if (!user)
            throw new Error("Erro ao encontrar informações do usuário")

        const userDetails = {
            name: user.name,
            phone: user.phone,
            email: user.email,
            locality: user?.locality,
            experienceLevel: user?.experienceLevel.order
        }

        return userDetails
    }

    public getJobData = async (jobId: any) => {
        const jobs = await this.jobsModel.getJobById(jobId)

        if (!jobs)
            throw new Error("Erro ao encontrar informações da vaga")

        const jobDetails = {
            locality: jobs?.locality,
            experienceLevel: jobs?.experienceLevel.order
        }

        return jobDetails
    }
}