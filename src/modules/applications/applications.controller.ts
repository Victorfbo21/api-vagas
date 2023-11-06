import { Request, Response } from "express"
import ApplicationsServices from "./applications.service";

export default class ApplicationsController {

    private applicationsServices: ApplicationsServices

    constructor() {
        this.applicationsServices = new ApplicationsServices();
    }

    public createApplication = async (request: Request, response: Response) => {

        const { jobOpportunity, user } = request.body

        const Application = {
            user: user,
            jobOpportunity: jobOpportunity,
        }

        const result = await this.applicationsServices.createApplication(Application)

        if (!result)
            response.status(500).json({ message: "Erro ao Criar Candidatura" })

        response.status(201).json(result)
    }

    public updateApplication = () => {
        //TODO
    }
}