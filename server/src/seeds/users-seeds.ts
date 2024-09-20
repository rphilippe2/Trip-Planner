import { User } from '../models/index.js';

export const seedUser = async () => {
  await User.bulkCreate([
    {
      id: 1,
      username: 'Rphilippe2',
      email: 'Rphilippe@gmail.com',
      password:'Luckynumber#7'
    },
  ]);
};
