import CreateJobInterface from "./interfaces/create-job.interface"
import JobsModel from "./jobs.model"


export default class JobsServices {

    private jobsModel: JobsModel

    constructor() {
        this.jobsModel = new JobsModel();
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
}