import { Router } from 'express';

import * as ApiController from '../controllers/apiController';

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);
router.post('/users', ApiController.users);
router.get('/list', ApiController.list);

export default router;