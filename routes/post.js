import express from 'express';

const router = express.Router();
import { getPosts,createPost} from '../Controllers/posts.js';

router.get('/getposts', getPosts);
router.post('/createpost', createPost);

export default router;