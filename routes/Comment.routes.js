import { Router } from "express";
import { createComment } from '../handlers/Comments.js';

const router = Router();

router.post('/', createComment);

export default router;