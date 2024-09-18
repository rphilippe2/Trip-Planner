import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";
import bcrypt from "bcrypt";

interface ItemAttributes {
    id: number;
    backpack_id: number;
    name: string;
    category: string;
}

interface UserCreationAttributes extends Optional<ItemAttributes, "id"> {}

export class Item 
    extends Model<ItemAttributes, UserCreationAttributes>
    implements ItemAttributes
{
    public id!: number;
    public backpack_id!: number;
    public name!: string;
    public category!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function ItemFactory(sequelize: Sequelize): typeof Item {
    Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        backpack_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'item',
        sequelize,
    }      
    );

    return Item;
}