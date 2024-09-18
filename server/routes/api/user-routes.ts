import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/index.js';


const router = express.Router();


router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { username, password } = req.body;
    try {
      const user = await User.findByPk(id);
      if (user) {
        user.username = username;
        user.password = password;
        await user.save();
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await User.findByPk(id);
      if (user) {
        await user.destroy();
        res.json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });


export default router;