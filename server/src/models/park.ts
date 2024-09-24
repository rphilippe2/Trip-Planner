import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface ParkAttributes {
    id: number;
    username_id: number;
    name: string;
    url: string;
    description: string;
    states: string; // Array of states where the park is located
    designation: string; // Designation of the park
    images: string; // Array of images of the park
}

interface ParkCreationAttributes extends Optional<ParkAttributes, 'id'> {}

export class Park
    extends Model<ParkAttributes, ParkCreationAttributes>
    implements ParkAttributes
{
    public id!: number;
    public username_id!: number;
    public name!: string;
    public url!: string;
    public description!: string;
    public states!: string;
    public designation!: string;
    public images!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function ParkFactory(sequelize: Sequelize): typeof Park {
    Park.init(
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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        states: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        images: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'park',
        sequelize,
    }
    );
    
    return Park;
}