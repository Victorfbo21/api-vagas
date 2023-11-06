export default interface CreateJobInterface {
    company: string,
    title: string,
    description: string,
    locality: string,
    experienceLevel: {
        order: number,
        level: string
    }
}