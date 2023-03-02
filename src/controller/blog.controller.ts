import prisma from '../config/db'
import {Request,Response} from 'express'



//create blog for users
export const createblog=async(req:Request,res:Response)=>{

    try{

        let blogs=req.body
        await prisma.blog.createMany({
            data:blogs
        })
        console.log(blogs);
        res.json({"msg":"created blog for user ","blog":blogs} )

    }
    catch(error){
        console.log(error);
        
        
    }    
}

//get all blogs
export const getallblog=async(req:Request,res:Response)=>{

    try{
        let blogs=await prisma.blog.findMany()
        console.log(blogs);
        res.send(blogs)
        
    }
    catch(error){
        console.log(error);
        res.send(error)
    }
}

//view user blog
export const viewblog=async(req:Request,res:Response)=>{

    try{
        let blogs=await prisma.blog.findFirst({

            where:{
                user_id:req.params.id
            },
            select:{
                titel:true,
                createData:true,

                user:{
                    select:{
                        username:true,
                        email:true,
                        password:true,
                        roles:true

                    }
                }
            },
            

        })
        console.log(blogs);
        res.send(blogs)
        
    }
    catch(error){
        console.log(error);
        res.send(error)
    }
}

//update blog
export const updateblog=async(req:Request,res:Response)=>{

    try{
        let blogss=req.body
        let {id}=req.params
        let blogs=await prisma.blog.updateMany({
            where: {
              user_id:id
            },

            data:blogss  
        })
        res.json({"msg":"updated blog for user ","blog":blogs} )

    }
    catch(error){
        console.log(error);
        res.send(error)
    }

}

//delete all blogs
export const deleteallblog=async(req:Request,res:Response)=>{

    try{
        let {id}=req.params
        let blogs=await prisma.blog.deleteMany({
            where:{
                user_id:id
            } 

        })
        console.log(blogs);
        res.json(blogs)
    }
    catch(error){
        console.log(error);
        res.json(error)
        
    }  
}

//delete one blog

export const deleteoneblog=async(req:Request,res:Response)=>{

    try{
        let {id}=req.params
        let blogs=await prisma.blog.delete({
            where:{
            id
            }   
        })
        console.log(blogs);
        res.json(blogs)
    }
    catch(error){
        console.log(error);
        res.json(error)
        
    }  
}
