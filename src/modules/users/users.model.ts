import UserSchema from "./users.schema"
import CreateUserInterface from "./interfaces/create-user.interface"

export default class UserModel {

    public createUser = async (user: CreateUserInterface) => {
        try {
            const createdUser = await UserSchema.create(user)

            return createdUser
        }
        catch (err) {
            throw new Error("Erro ao Persistir Usuário")
        }
    }


    public updateUser = async () => {
        //TODO
    }

    public getUsers = async (filter: any, skip: any, limit: any) => {
        try {
            filter = filter || ""

            const users = await UserSchema.find({
                $or: [
                    { name: new RegExp('.*' + filter + '.*', 'i') },
                    { email: new RegExp('.*' + filter + '.*', 'i') },
                    { phone: new RegExp('.*' + filter + '.*', 'i') },
                    { locality: new RegExp('.*' + filter + '.*', 'i') },

                ],
                $and: [
                    { isDeleted: false }
                ]
            })
                .skip(skip || 0)
                .limit(limit || 0)

            return users
        }
        catch (err) {
            throw new Error("Erro ao Listar Usuários")
        }
    }

    public getUserById = async (userId: string) => {
        try {
            const user = await UserSchema.findById(userId)

            return user
        }
        catch (err) {
            throw new Error("Erro ao encontrar usuário")
        }
    }


}