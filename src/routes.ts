import { Router } from "express";
import UsersRouter from "../src/modules/users/users.routes";
import JobsRoutes from "../src/modules/jobs/jobs.routes";
import ApplicationsRoutes from "../src/modules/applications/applications.routes";

const Routes = Router();

Routes.use('/users', UsersRouter)
Routes.use('/jobs', JobsRoutes)
Routes.use('/applications', ApplicationsRoutes)



export default Routes


