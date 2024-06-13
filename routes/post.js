import express from 'express';

const router = express.Router();
import { getPosts,createPost,updatePost,deletePost} from '../Controllers/posts.js';

router.get('/getposts', getPosts);
router.post('/createpost', createPost);
router.patch('/updatepost/:id', updatePost);
router.delete('/deletepost/:id', deletePost);


export default router;