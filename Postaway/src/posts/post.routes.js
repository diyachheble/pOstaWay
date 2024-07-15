import express from 'express';
import PostController from './post.controller.js';
import {upload} from '../middlewares/fileUpload.middleware.js';



const postRouter = express.Router();
const postController = new PostController();


// All the paths to the controller methods.
// localhost/api/products
// localhost:4100/api/products/filter?userID

postRouter.post('/',upload.single('imageUrl'),postController.createPost);
postRouter.get('/', postController.getAllPost);
postRouter.get('/:id',postController.getPostById);
postRouter.get('/filter', postController.filterPosts);
postRouter.put('/:id',postController.updatePost);
postRouter.delete('/:id',postController.deletePost);
postRouter.post('/draft', upload.single('imageUrl'), postController.savePostAsDraft);
postRouter.put('/archive/:id', postController.archivePost);
postRouter.put('/bookmark/:id', postController.bookmarkToggle); 
//router.route("/").get(jwtAuth, getAllProducts);

export default postRouter;