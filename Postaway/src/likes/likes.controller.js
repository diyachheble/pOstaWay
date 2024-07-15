import likeModel from './likes.model.js';

export  class LikeController{

    // Toggle like (add or remove)
    toggleLike(req, res) {
        const { userId, postId } = req.body;
        const existingLikeIndex = likeModel.db.findIndex((l) => l.userId === userId && l.postId === postId);

        if (existingLikeIndex !== -1) {
            // Like exists, remove it
            const removedLike = likeModel.db.splice(existingLikeIndex, 1)[0];
            res.status(200).json({ message: 'Like removed', like: removedLike });
        } else {
            // Like doesn't exist, add it
            const newLike = likeModel.add(userId, postId);
            res.status(200).json({ message: 'Like added', like: newLike });
        }
    }

    // Get likes on a specific post
    getAllLikes(req, res) {
        const postId = req.params.postId;
        const likes = likeModel.getAllLikesByPostId(postId);
        res.status(200).json(likes);
    }

}
