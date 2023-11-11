import { Router } from "express";
import JobsController from "./jobs.controller";
import { Request, Response } from "express";
import { request } from "http";


const JobsRoutes = Router();

const jobsController = new JobsController();

JobsRoutes.put('/create', (request: Request, response: Response) => {
    return jobsController.createJobs(request, response)
})

JobsRoutes.post('/by-jobs', (request: Request, response: Response) => {
    return jobsController.getApplicationsByJob(request, response)
})

JobsRoutes.post('/ranking', (request: Request, response: Response) => {
    return jobsController.getJobRanking(request, response)
})  

export default JobsRoutes;