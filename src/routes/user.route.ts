import { createUser, getallusers, getoneusers, } from "../controller/user.controller";
import express from "express";

let router=express.Router()

router.post('/',createUser)
router.get('/allusers',getallusers)
router.get('/',getoneusers)



export default router