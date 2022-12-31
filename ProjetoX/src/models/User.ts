import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

// Especifico para o meu usuário TypeScript
export interface UserInstance extends Model {
  id: number;
  name: string;
  age: number;
}
// Especifico para o sequelize
export const User = sequelize.define<UserInstance>("User", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nome: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 18,
  },
},{
    tableName: 'tbl_user',
    timestamps: false
});
