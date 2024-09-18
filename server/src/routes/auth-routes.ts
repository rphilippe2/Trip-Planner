import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

//login fucntion to authenticate user
export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    //find user by username
    const user = await User.findOne({ where: { username } });

    //check if user exists
    if(!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    } 
    
    //compare the provided password with the hashed password
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.json({ token });
};

const router = Router();
router.post('/login', login);
export default router;