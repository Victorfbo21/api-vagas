export default interface CreateUserInterface {
    name: string,
    email: string,
    phone: string,
    password: string,
    locality: string,
    experienceLevel: {
        order: number,
        level: string
    }
}