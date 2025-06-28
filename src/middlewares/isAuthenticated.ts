import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    // id do usuario pelo token
    sub: string
}



// middleware verificação de token para privar rotas
export function isAuthenticated(req:Request, res:Response, next:NextFunction): void{
    
    // Recuperar o token pelo cabecalho
    const authToken = req.headers.authorization

    if (!authToken) {
        // 401 - nao autorizado 
        // .end() - finaliza a requisicao
        res.status(401).end()
        return;
        
        // abrir insonmia veriricar o token vai no Auth/ Bearer Token, token: codigo do token, Prefix: Bearer
    }

    // separando o token usando funcao split.
    const [, token] = authToken.split(" ")

    // verificando se token e valido
    try{
        //verify(token, e o token do arquivo .env, process.env.JWT_SECRET)
        const {sub} = verify(token, process.env.JWT_SECRET) as PayLoad

        // recupera id do token dentro de uma variavel user_id dentro do req
        req.user_id = sub 

          return next()
    }catch(err){ 
        // 401 - nao autorizado 
        // .end() - finaliza a requisicao
        res.status(401).end()
        return 
    }

  
}