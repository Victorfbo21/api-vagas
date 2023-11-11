import ApplicationsSchema from "./applications.schema"
import CreateApplication from "./interfaces/create-application.interface"
import FilterApplicationsInterface from "./interfaces/filter-applications.interface"
import mongoose from "mongoose"

export default class ApplicationsModel {

    public createApplication = async (application: CreateApplication) => {
        try {
            const createdApplication = await ApplicationsSchema.create(application)

            return createdApplication
        }
        catch (err) {
            throw new Error("Erro ao Persistir Candidatura")
        }
    }


    public updateApplication = async () => {
        //TODO
    }

    public getApplications = async (filter: any, skip: any, limit: any) => {
        try {
            filter = filter || ""
            const CompanyIsValid = mongoose.Types.ObjectId.isValid(filter.jobOpportunity)
            const userIsValid = mongoose.Types.ObjectId.isValid(filter.user)

            if (CompanyIsValid && userIsValid) {

                const applications = await ApplicationsSchema.find({
                    $and: [
                        { jobOpportunity: filter.jobOpportunity },
                        { user: filter.user },
                        { isActive: true }
                    ]
                })
                    .skip(skip || 0)
                    .limit(limit || 0)

                return applications
            }

            return null

        }
        catch (err) {
            throw new Error("Erro ao Listar Candidaturas")
        }
    }

    public getApplicationsByJob = async (jobId: string) => {
        try {
            const applications = await ApplicationsSchema.find({ jobOpportunity: jobId })

            return applications
        }
        catch (err) {
            throw new Error("Erro ao Listar Candidaturas")
        }
    }

    public getApplicationById = async (id: string) => {
        try {
            const application = await ApplicationsSchema.findById(id)

            return application
        }
        catch (err) {
            throw new Error("Erro ao encontrar Candidatura")
        }
    }

}