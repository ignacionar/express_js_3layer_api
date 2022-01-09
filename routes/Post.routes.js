import { Router } from "express";
import { createPost } from '../handlers/Posts.js';
import { getPosts } from './../handlers/Posts.js';
import { getPostByUserId } from "../handlers/Posts.js";

const router = Router();

router.get('/', getPosts).get('/user/:userId', getPostByUserId).post('/', createPost)

export default router;