import { Router } from "express";
import JobsController from "./jobs.controller";
import { Request, Response } from "express";


const JobsRoutes = Router();

const jobsController = new JobsController();

JobsRoutes.put('/create', (request: Request, response: Response) => {
    return jobsController.createJobs(request, response)
})


export default JobsRoutes;