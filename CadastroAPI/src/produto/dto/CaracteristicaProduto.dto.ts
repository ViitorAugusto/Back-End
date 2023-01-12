import { IsString } from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;
}
