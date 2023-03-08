import { createUser, deleteUser, getallusers, getoneusers, loginuser, updateUser, } from "../controller/user.controller";
import express from "express";

let router=express.Router()

router.post('/',createUser)
router.get('/allusers',getallusers)
router.get('/',getoneusers)
router.put('/:email',updateUser)
router.delete('/',deleteUser)
router.get('/login',loginuser)



export default router