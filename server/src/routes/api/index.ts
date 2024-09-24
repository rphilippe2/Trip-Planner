import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { parkRouter } from './park-routes.js';

const router = Router();

router.use('/user', userRouter);
router.use('/parks', parkRouter);


export default router;
