import express from 'express';
import { LikeController } from './likes.controller.js';


const likeRouter = express.Router();

const likeController = new LikeController();


likeRouter.post('/toggle', (req, res) => likeController.toggleLike(req, res));
likeRouter.get('/:postId',  (req, res) => likeController.getAllLikes(req, res));


export default likeRouter;