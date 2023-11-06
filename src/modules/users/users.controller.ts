import { Request, Response } from "express"
import UsersService from "./users.service"

export class UsersController {

    private usersService: UsersService

    constructor() {
        this.usersService = new UsersService();
    }


    public createUser = async (request: Request, response: Response) => {

        const { name, email, phone, locality, experienceLevel, password } = request.body

        const userToCreate = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            locality: locality,
            experienceLevel: experienceLevel
        }

        const result = await this.usersService.createUser(userToCreate)

        if (!result)
            response.status(500).json({ message: "Erro ao Criar Usuário" })

        response.status(201).json(result)
    }

    public updateUser = () => {
        //TODO
    }



}