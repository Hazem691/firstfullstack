import { Router } from "express";
import { addposts, deleteposts, getposts,updateposts } from "./post.controller.js";


const router = Router() ;
router.post('/',addposts) ;
router.get('/',getposts) ;
router.put('/',updateposts);
router.delete('/',deleteposts);

export default router ;