import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log:["query"],
    errorFormat:"minimal"
});

const connectDB=()=>{
    try{
        prisma.$connect();
        console.log("database connected");   
    }
    catch(error){
        console.log(error);
        process.exit(1)
        
    }
};

export default prisma
export {connectDB}