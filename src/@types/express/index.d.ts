
// ARQUIVO DECLARAR INDEX.D.TS


// modificando o type do Request do Express diretamente  
declare namespace Express {
    export interface Request {
        user_id: string;
    }
}