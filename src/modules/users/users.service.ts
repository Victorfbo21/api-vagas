import UserModel from "./users.model";
import CreateUserInterface from "./interfaces/create-user.interface";
import bcrypt from 'bcrypt'



export default class UsersService {

    private userModel: UserModel

    constructor() {
        this.userModel = new UserModel();
    }


    public createUser = async (user: CreateUserInterface) => {

        const verifyUserExists = await this.userModel.getUsers(user.email, 0, 0)
        if (verifyUserExists.length != 0) {
            return console.log("Usuário já Cadastrado!")
        }

        const toCreate = {
            name: user.name,
            email: user.email,
            password: await bcrypt.hash(user.password, 8),
            phone: user.phone,
            locality: user.locality,
            experienceLevel: user.experienceLevel
        }

        const created = await this.userModel.createUser(toCreate)
        if (!created)
            throw new Error("Erro ao Criar Usuário!")

        return created
    }

}