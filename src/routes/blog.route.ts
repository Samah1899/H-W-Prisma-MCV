
import { createblog, deleteallblog, deleteoneblog, getallblog, updateblog, viewblog } from "../controller/blog.controller";
import express from "express";
import auth from "../middleware/auth";
let routerr=express.Router()

routerr.post('/',auth,createblog)
routerr.get('/allblogs',auth,getallblog)
routerr.get('/:id',viewblog)
routerr.put('/:id',auth,updateblog)
routerr.delete('/deletallblog /:id',deleteallblog)
routerr.delete('/auth',deleteoneblog)

export default routerr