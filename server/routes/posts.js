import express from 'express'

import { getUsers, createUser, updateUser } from '../controllers/posts.js'

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.patch('/:id', updateUser);

export default router;