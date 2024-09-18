import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface TripAttributes {
    id: number;
    username_id: number;
    trail_name: string;
    location: string;
    trail_length: string;
    trail_level: string;
}

interface TripCreationAttributes extends Optional<TripAttributes, 'id'> {}

export class Trip
    extends Model<TripAttributes, TripCreationAttributes>
    implements TripAttributes
{
    public id!: number;
    public username_id!: number;
    public trail_name!: string;
    public location!: string;
    public trail_length!: string;
    public trail_level!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function TripFactory(sequelize: Sequelize): typeof Trip {
    Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        trail_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trail_length: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        trail_level: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'trip',
        sequelize,
    }
    );
    
    return Trip;
}