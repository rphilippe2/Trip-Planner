import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import bcrypt from 'bcrypt';

interface BackpackAttributes {
    id: number;
    userid: number;
    trip_id: number;
}

interface BackpackCreationAttributes extends Optional<BackpackAttributes, 'id'> {}

export class Backpack
    extends Model<BackpackAttributes, BackpackCreationAttributes>
    implements BackpackAttributes
{
    public id!: number;
    public userid!: number;
    public trip_id!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function BackpackFactory(sequelize: Sequelize): typeof Backpack {
    Backpack.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        trip_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'backpack',
        sequelize,
    }      
    );

    return Backpack;
}