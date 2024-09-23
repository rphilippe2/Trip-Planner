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

//signup function to create a new user
export const signup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ where: { username } }); 
    if(existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await User.create({ username, email, password: hashedPassword });
    console.log(newUser);
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

    return res.json({ token });
} catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}


const router = Router();
router.post('/login', login);
router.post('/signup', signup);
export default router;