import express from 'express'

import { getUsers } from '../controllers/posts.js'
import { createUser } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser)

export default router;