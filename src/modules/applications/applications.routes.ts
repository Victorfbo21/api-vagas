import { Router } from "express";
import { Request, Response } from "express";
import ApplicationsController from "./applications.controller";

const ApplicationsRoutes = Router();

const applicationsController = new ApplicationsController();

ApplicationsRoutes.put('/create', (request: Request, response: Response) => {
    return applicationsController.createApplication(request, response)
})


export default ApplicationsRoutes;