import prismaClient from "../../prisma"
import {hash} from "bcryptjs"

interface UserRequest{
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    async execute({name, email, password}: UserRequest) {

        if(!email) {
            throw new Error("Email incorrect")
            
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("User already exists")
            
        }

        // salvando no banco de dados

        
        const passwordHash = await hash(password, 8) // criptografando o password
        const user = await prismaClient.user.create({
            data: {
                name,
                email,
                password: passwordHash // salvando o password no banco de dados
            },
        // Select retorna oque estiver true
            select:{
                id:true,
                name:true,
                email:true,
                created_at:true,
                update_at:true
            }
        })

        console.log(user)
        return user
    }
}

export { CreateUserService }