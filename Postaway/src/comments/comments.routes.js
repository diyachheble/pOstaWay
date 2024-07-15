
import express from 'express';
 import CommentController from './comments.controller.js';


const commentRouter = express.Router();
const commentController = new CommentController();

// Get all comments for a specific post
commentRouter.get('/:postId',  (req, res) => commentController.getComments(req, res));

// Create a new comment
commentRouter.post('/',  (req, res) => commentController.createComment(req, res));

// Update a comment
commentRouter.put('/:commentId',  (req, res) => commentController.updateComment(req, res));

// Delete a comment
commentRouter.delete('/:commentId',  (req, res) => commentController.deleteComment(req, res));

export default commentRouter;
