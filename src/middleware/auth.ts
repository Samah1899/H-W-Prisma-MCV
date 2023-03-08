import { Request,Response,NextFunction } from "express"
import * as jwt from "jsonwebtoken"

interface User {
    username:string,
    id:string
}
const auth =(req:Request, res:Response, next:NextFunction) =>{

    try{
        let token=req.headers.authorization
        if(!token){
            return res.status(401).json({"msg":"you are not authorized!"})
        }
        const users=jwt.verify(token,process.env.API_SECRET as string)as User
        res.locals.user=users
        next()

    }
    catch(e){
        return res.status(401).json({"message":"you are not authorized"});
    }
}

export default auth