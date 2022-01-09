import CommentInstance from '../entities/Comment.js';

export const getComments = (req, res) => {
  const comments = CommentInstance.GetComment();

  res.status(200).json({status: "success", data: comments})
}

export const createComment = (req, res) => {
  const { userId, title, body } = req.body;

  const newComment = CommentInstance.CreateComment({ userId, title, body });

  res.status(200).json({ message: 'Successfully created comment', data: newComment });
}