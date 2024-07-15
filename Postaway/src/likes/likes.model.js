export default class likeModel {
  constructor(id, userId, postId) {
      this.id = id;
      this.userId = userId;
      this.postId = postId;
      this.likes = [];
  }

  static db = [];

  // Add a like
  // Add a like
  static add(userId, postId) {
    const newLike = { id: likeModel.db.length + 1, userId, postId };
    likeModel.db.push(newLike);
    return newLike;
}

// Remove a like
static remove(userId, postId) {
    const existingLikeIndex = likeModel.db.findIndex((l) => l.userId === userId && l.postId === postId);
    if (existingLikeIndex !== -1) {
        const removedLike = likeModel.db.splice(existingLikeIndex, 1)[0];
        return removedLike; // Return the removed like object
    }
    return null; // Return null if like is not found
}

  // Check if a like exists
  static exists(userId, postId) {
      return likeModel.db.some((l) => l.userId === userId && l.postId === postId);
  }

  // Get all likes on a specific post
  static getAllLikesByPostId(postId) {
    return likeModel.db.filter((l) => l.postId === postId);
}
}
