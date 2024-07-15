import Comment from './comments.model.js';


export default class CommentController {

    // Get all comments for a specific post
    getComments(req, res) {
      const postId = parseInt(req.params.postId);
      const comments = Comment.getAll(postId);
      res.status(200).json(comments);
  }

    // Create a new comment
    createComment(req, res) {
        const { postId, userId, content } = req.body;
        const newComment = Comment.create(postId, userId, content);
        res.status(201).json(newComment);
    }

    // Update a comment
    updateComment(req, res) {
        const commentId = parseInt(req.params.commentId);
        const { content } = req.body;
        const updatedComment = Comment.update(commentId, content);
        if (updatedComment) {
            res.status(200).json(updatedComment);
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    }

    // Delete a comment
    deleteComment(req, res) {
        const commentId = parseInt(req.params.commentId);
        Comment.delete(commentId);
        res.status(204).send();
    }
}
