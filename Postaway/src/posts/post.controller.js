// post.controller.js
import postModel from './post.model.js';

export default class PostController {

    getAllPost(req, res) {
        const posts = postModel.getAll();
        res.status(200).send(posts);
    }

    createPost(req, res) {
        console.log('req.file:', req.file);
        console.log('req.body:', req.body);

        const { userid, caption } = req.body;
        const imageUrl = req.file ? req.file.filename : req.body.imageUrl;

        const newPost = {
            userid,
            caption,
            imageUrl,
        };

        const createdRecord = postModel.add(newPost);
        res.status(201).send(createdRecord);
    }

    getPostById(req, res) {
        const id = req.params.id;
        const post = postModel.getOne(id);
        if (!post) {
            res.status(404).send("Post not found");
        } else {
            return res.status(200).send(post);
        }
    }

    filterPosts(req, res) {
        const userID = req.query.userID;
        const result = postModel.filter(userID);
        res.status(200).send(result);
    }

    updatePost(req, res) {
        const post = postModel.update(req.params.id, req.body);
        if (!post) {
            res.status(404).send("Post not found");
        }
        res.status(200).send(post);
    }

    deletePost(req, res) {
        postModel.delete(req.params.id);
        res.status(204).send();
    }

    savePostAsDraft(req, res) {
        const { userid, caption } = req.body;
        const imageUrl = req.file ? req.file.filename : req.body.imageUrl;
        const newDraft = {
            userid,
            caption,
            imageUrl,
            status: 'draft',
        };
        const savedDraft = postModel.saveAsDraft(newDraft);
        res.status(201).send(savedDraft);
    }

    archivePost(req, res) {
        const id = req.params.id;
        console.log(`Archiving post with id: ${id}`);

        const archivedPost = postModel.archive(id);
        if (!archivedPost) {
            res.status(404).send("Post not found");
        } else {
            res.status(200).send(archivedPost);
        }
    }
    bookmarkToggle(req, res) {
        const id = req.params.id;
        console.log(`Toggling bookmark for post with id: ${id}`);

        const post = postModel.toggleBookmark(id);
        if (!post) {
            res.status(404).send("Post not found");
        } else {
            res.status(200).send(post);
        }
    }
}
