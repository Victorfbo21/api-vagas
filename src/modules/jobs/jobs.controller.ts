import { Request, Response } from "express"
import JobsServices from "./jobs.service"


export default class JobsController {

    private jobsServices: JobsServices

    constructor() {
        this.jobsServices = new JobsServices();
    }

    public createJobs = async (request: Request, response: Response) => {

        const { company, title, description, locality, experienceLevel } = request.body

        const Jobs = {
            company: company,
            title: title,
            description: description,
            locality: locality,
            experienceLevel: experienceLevel
        }

        const result = await this.jobsServices.createJob(Jobs)

        if (!result)
            response.status(500).json({ message: "Erro ao Criar Vaga" })

        response.status(201).json(result)
    }

    public updateJob = () => {
        //TODO
    }
}