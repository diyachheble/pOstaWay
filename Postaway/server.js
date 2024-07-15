
import express from 'express';
import swagger from 'swagger-ui-express';
import bodyParser from 'body-parser';
import  postRouter from "./src/posts/post.routes.js";
import userRouter from "./src/Users/user.routes.js";
import cookieParser from "cookie-parser";
import commentRouter from "./src/comments/comments.routes.js";
import likesRouter from "./src/likes/likes.routes.js";

import{ CustomError, errorHandler } from './src/middlewares/error.handler.js';
import loggerMiddleware from './src/middlewares/logger.middleware.js';


import jwtAuth from './src/middlewares/jwtAuth.js';
const server = express();


server.use(bodyParser.json());
server.use(cookieParser());

// server.use("/api-docs", 
//     swagger.serve, 
//     swagger.setup(apiDocs));
    

server.use(loggerMiddleware);
//For all request related to post ,redirect to post routes
server.use("/api/posts",jwtAuth, postRouter)
server.use("/api/Users", userRouter)
server.use("/api/comments",jwtAuth, commentRouter)
server.use("/api/likes",jwtAuth, likesRouter)
//All the paths to controller --localhost/api/posts...

// Error handler middleware
server.use(errorHandler);

//Middleware to handle 404 requests.
server.use((req,res)=>{
    res.status(404).send("API not found .Please check our Documentation for more imformation at localhost:3003/api-docs");
})


server.get('/',(req,res)=>{
    res.send("Welcome to POSTAWAY");
})

server.listen(3003, () => {
    console.log('Server started on port 3003');
});


