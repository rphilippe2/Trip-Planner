import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { ItemFactory } from './item.js';
import { TripFactory } from './trip.js';
import { BackpackFactory } from './backpack.js';

const User = UserFactory(sequelize);
const Item = ItemFactory(sequelize);
const Trip = TripFactory(sequelize);
const Backpack = BackpackFactory(sequelize);

export { User, Item, Trip, Backpack };
