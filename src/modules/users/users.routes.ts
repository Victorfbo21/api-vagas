import { Router, Request, Response } from "express";
import { UsersController } from "./users.controller";



const UsersRouter = Router();

const usersController = new UsersController();

UsersRouter.put('/create', (request: Request, response: Response) => {
    return usersController.createUser(request, response)
})


export default UsersRouter