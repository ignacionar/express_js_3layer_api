import PostInstance from '../entities/Post.js';

export const getPosts = (req, res) => {
  const posts = PostInstance.GetPost();

  res.status(200).json({status: "success", data: posts})
}

export const getPostByUserId = (req, res) => {
  const userId = req.params.userId;
  const posts = PostInstance.GetPost();

  const userPosts = posts.filter(post => post.userId === userId);
  res.status(200).json({ message: 'Successfully created post', data: userPosts });
}

export const createPost = (req, res) => {
  const { userId, title, body } = req.body;

  const newPost = PostInstance.CreatePost({ userId, title, body });

  res.status(200).json({ message: 'Successfully created post', data: newPost });
}