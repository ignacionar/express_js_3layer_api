import { Router } from "express";
import PostRoutes from './Post.routes.js';
import CommentRoutes from './Comment.routes.js';
import UserRoutes from './User.routes.js';

const router = Router();

router.use('/post', PostRoutes);
router.use('/comment', CommentRoutes);
router.use('/user', UserRoutes);

export default router;