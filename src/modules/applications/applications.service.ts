import CreateApplicationInterface from "./interfaces/create-application.interface";
import ApplicationsModel from "./applications.model";

export default class ApplicationsServices {

    private applicationsModel: ApplicationsModel

    constructor() {
        this.applicationsModel = new ApplicationsModel();
    }

    public createApplication = async (job: CreateApplicationInterface) => {

        const filter = {
            jobOpportunity: job.jobOpportunity,
            user: job.user
        }

        const verifyJobExists = await this.applicationsModel.getApplications(filter, 0, 0)

        if (verifyJobExists?.length != 0) {
            return console.log("Candidatura já Cadastrada!")
        }

        const toCreate = {
            jobOpportunity: job.jobOpportunity,
            user: job.user,
        }

        const created = await this.applicationsModel.createApplication(toCreate)
        if (!created)
            throw new Error("Erro ao Criar Candidatura!")

        return created
    }



}