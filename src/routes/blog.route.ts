
import { createblog, deleteallblog, deleteoneblog, getallblog, updateblog, viewblog } from "../controller/blog.controller";
import express from "express";
let routerr=express.Router()

routerr.post('/',createblog)
routerr.get('/allblogs',getallblog)
routerr.get('/:id',viewblog)
routerr.put('/:id',updateblog)
routerr.delete('/deletallblog /:id',deleteallblog)
routerr.delete('/:id',deleteoneblog)

export default routerr