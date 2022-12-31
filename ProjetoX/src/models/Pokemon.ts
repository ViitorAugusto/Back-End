import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/mysql';

export class PokemonInstance extends Model {
    idtb_pok: number | undefined;
    nome: string | undefined;
    type: string | undefined;
}

export const Pokemon = sequelize.define<PokemonInstance>('Pokemon', {
    idtb_pok: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    nome: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
},{
    tableName: 'tb_pok',
    timestamps: false
});