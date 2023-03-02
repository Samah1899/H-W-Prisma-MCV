import prisma from '../config/db'
import {Request,Response} from 'express'



//create two users
export const createUser=async(req:Request,res:Response)=>{

    try{

        let users=req.body
        await prisma.user.createMany({
            data:users
        })
        console.log(users);
        res.json({"msg":"user created","users":users} )

    }
    catch(error){
        console.log(error);
        
    }    
}

//get all users
export const getallusers=async(req:Request,res:Response)=>{

    try{
        let users=await prisma.user.findMany()
        console.log(users);
        res.send(users)
        
    }
    catch(error){
        console.log(error);
        res.send(error)
    }
}

//get one user
export const getoneusers=async(req:Request,res:Response)=>{

    try{
        let users=await prisma.user.findFirst()
        console.log(users);
        res.send(users)
        
    }
    catch(error){
        console.log(error);
        res.send(error)
    }
}



    



