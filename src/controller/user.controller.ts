import prisma from '../config/db'
import {Request,Response} from 'express'
import * as argon2 from "argon2";
import * as jwt from 'jsonwebtoken'

//create two users
//register
export const createUser=async(req:Request,res:Response)=>{

    try{
        let hash=await argon2.hash(req.body.password);
        let users=req.body
        await prisma.user.createMany({
            data:{
                username:users.username,
                email:users.email,
                password:hash
            }
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


//update user 

export const updateUser=async(req:Request,res:Response)=>{
try {
    
    let users =await prisma.user.updateMany({
        where: {
            email: req.params.email
        },
        data:{
            username: req.body.username,
            // password: req.body.password,
            // roles: req.body.roles
        }   
    })
    res.json({"msg":"user updated successfully!!!","users":users})

}

catch(error){
    console.log(error);
    res.send(error)
}
}

//delete user 

export const deleteUser=async(req:Request,res:Response)=>{

    try {

        let users=await prisma.user.delete({
            where:{
                email: req.params.email
            }
        })
        res.json({"msg":"user deleted successfully!","users":users})
    }

    catch (e){

    }
}

//login 

export const loginuser=async(req:Request,res:Response)=>{

    try {
        let users=await prisma.user.findUnique({
            where:
            {
              email: req.body.email
            }
        })
        if(!users){
            return res.status(400).json({"msg":"wrong email!"})
        }
        else if(!await argon2.verify(users.password,req.body.password)){
        return res.status(400).json({"msg":"wrong password!"})
    }

    let token=jwt.sign({id:users.id , username:users.username}
    ,process.env.API_SECRET as string,{expiresIn:"24h"});
    return res.status(200).json({message:`user loggged in successfully!${users.username}`,token:token})
   
}
 catch (e)
    {
        res.status(500).json("error")
    }
}





