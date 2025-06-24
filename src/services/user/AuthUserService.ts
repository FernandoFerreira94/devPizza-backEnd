import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign} from "jsonwebtoken"

interface AuthRequest{
    email: string;
    password: string
}
class AuthUserService{
    async execute({email, password}:AuthRequest){

        // Verificar se email existe
        //.findFirst() retorna o primeiro item a ser encotrado
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

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id, 
                expiresIn: "30d" // 30 dias para expirar token
            }
        )

        return {
            id: user.id,
            name: user.name,
            email:user.email,
            token
        }
       

       
    }
}

export default AuthUserService