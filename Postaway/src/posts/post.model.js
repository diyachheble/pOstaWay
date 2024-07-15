
    export default class postModel {
        constructor(id, userid, caption, imageUrl,Status ,bookmarked){
          this.id = id;
          this.userid = userid;
          this.caption = caption;
          this.imageUrl = imageUrl;
          this.status = Status;  
         this.bookmarked = bookmarked;

        }
      
        static db = [];
       
        //retrieving all post
        static getAll() {
          return postModel.db;
        }
        
        //creating post
        static add(post) {
          post.id = postModel.db.length + 1;
          postModel.db.push(post);
          return post;
        }
        
        //retrieving post by id
        static getOne(id) {
          const post = postModel.db.find((i) => i.id == id);
          return post;
        }

        //retrieving users post
        static filter(userID) {
          const result = postModel.db.filter((post) => post.userid == userID);
          return result;
        }
       
        //updating post
        static update(id, data) {
          const post = postModel.getOne(id);
          if (post) {
            Object.assign(post, data);
          }
          return post;
        }

        //deleting post
        static delete(id){
          const index = postModel.db.findIndex((post) => post.id === id);
          if (index!== -1) {
            postModel.db.splice(index, 1);
          }
        }

        static saveAsDraft(post) {
          post.id = postModel.db.length + 1;
          postModel.db.push(post);
          return post;
      }

       // Archiving a post
    static archive(id) {
      const post = postModel.getOne(id);
      if (post) {
          post.status = 'archived';
      }
      return post;
  }


  static toggleBookmark(id) {
    const post = postModel.getOne(id);
    if (post) {
        post.bookmarked = !post.bookmarked;
    }
    return post;
}


    }

      
      postModel.db = [
        new postModel(
          1,
          'User1',
          'This is first post',
          'https://i.pinimg.com/564x/8e/c6/43/8ec643766710ea0097cbbdb6df27bdb1.jpg'
        ),
        new postModel(
          2,
          'User_2',
          'This is second post',
          'https://i.pinimg.com/564x/ec/a6/58/eca6581d44ae9915f6f680b8f94950fb.jpg'
        ),
        new postModel(
          3,
          'User_3',
          'Productive',
          'https://i.pinimg.com/564x/ec/a6/58/eca6581d44ae9915f6f680b8f94950fb.jpg'
        ),
      ];