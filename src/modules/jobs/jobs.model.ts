import JobsSchema from "./jobs.schema"
import CreateJobInterface from "./interfaces/create-job.interface"

export default class JobsModel {

    public createJob = async (jobs: CreateJobInterface) => {
        try {
            const createdJob = await JobsSchema.create(jobs)

            return createdJob
        }
        catch (err) {
            throw new Error("Erro ao Persistir Vaga")
        }
    }


    public updateJob = async () => {
        //TODO
    }

    public getJobs = async (filter: any, skip: any, limit: any) => {
        try {
            filter = filter || ""

            const jobs = await JobsSchema.find({
                $or: [
                    { company: new RegExp('.*' + filter + '.*', 'i') },
                    { email: new RegExp('.*' + filter + '.*', 'i') },
                    { phone: new RegExp('.*' + filter + '.*', 'i') },
                    { locality: new RegExp('.*' + filter + '.*', 'i') },

                ],
                $and: [
                    { isActive: true }
                ]
            })
                .skip(skip || 0)
                .limit(limit || 0)

            return jobs
        }
        catch (err) {
            throw new Error("Erro ao Listar Vagas")
        }
    }


    public getJobById = async (jobId: string) => {
        try {
            const job = await JobsSchema.findById(jobId)


            return job
        }
        catch (err) {
            throw new Error("Erro ao encontrar Vaga")
        }
    }

}