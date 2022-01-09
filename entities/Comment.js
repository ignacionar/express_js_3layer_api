import { v4 as uuid } from "uuid";

class Comment {
  constructor(userId, body, title) {
    this.id = uuid();
    this.userId = userId;
    this.body = body;
    this.title = title;
  }
}

class Comments {
  constructor() {
    this.comments = [];
  }

  CreateComment = ({ userId, body, title }) => {
    const newComment = new Comment(userId, body, title);

    this.comments.push(newComment);
    return newComment;
  }

  GetComment = () => {
    return this.comments;
  }
}

const CommentInstance = new Comments();

export default CommentInstance;