

export default class Comment {
  constructor(id, postId, userId, content) {
      this.id = id;
      this.postId = postId;
      this.userId = userId;
      this.content = content;
  }

  static db = [
    new Comment(1, 1, 'User1', 'First comment on post 1'),
    new Comment(2, 1, 'User2', 'Second comment on post 1'),
    new Comment(3, 2, 'User3', 'First comment on post 2'),
    new Comment(4, 3, 'User1', 'First comment on post 3'),
];

  // Create a new comment
  static create(postId, userId, content) {
      const id = Comment.db.length + 1;
      const newComment = new Comment(id, postId, userId, content);
      Comment.db.push(newComment);
      return newComment;
  }

  // Get all comments for a specific post
  static getAll(postId) {
    return Comment.db.filter(comment => comment.postId === postId);
}

// Get a specific comment by its ID
static getById(commentId) {
    return Comment.db.find(comment => comment.id === commentId);
}

  // Update a comment
  static update(commentId, content) {
      const comment = Comment.getById(commentId);
      if (comment) {
          comment.content = content;
      }
      return comment;
  }

  // Delete a comment
  static delete(commentId) {
      const index = Comment.db.findIndex(comment => comment.id === commentId);
      if (index !== -1) {
          Comment.db.splice(index, 1);
      }
  }
}
