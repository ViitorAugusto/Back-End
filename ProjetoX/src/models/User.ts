import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

// Especifico para o meu usuário TypeScript
export interface UserInstance extends Model {
  
  id: number;
  nome: string;
  age: number;
}
// Especifico para o sequelize
export const User = sequelize.define<UserInstance>("User", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  nome: {
    type: DataTypes.STRING,
    //get vai ser chamado sempre que eu tentar pegar um valor da propriedade nome
    get(){
      const raw = this.getDataValue('nome');
      return raw.toUpperCase();
    }
  },
  firsLetterOfName: {
    type: DataTypes.VIRTUAL,
    get(){
      let nome:string = this.getDataValue('nome');
      return nome.charAt(0);
      
  }
},
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 18,
    //set vai ser chamado sempre que eu tentar setar um valor para a propriedade age
    set(value: number){
      if(value < 18){
        value = 18;
      }
      this.setDataValue('age', value);
    }
  },
  
},{
    tableName: 'tbl_user',
    timestamps: false
});
