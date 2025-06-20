import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest{
    email: string;
    password: string
}
class AuthUserService{
    async execute({email, password}:AuthRequest){

        // Verificar se email existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(!user){
            throw new Error("User/password incorrect")
        }

        // Verificar se senha esta correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("User/password incorrect")
        }

        // gerar token JWT(JSON WEB TOKEN) e devolver informacoes do user 

        

       
    }
}

export default AuthUserService