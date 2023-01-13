import { IsString } from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;
}

export class ImgageProdutoDTO {
  @IsString()
  url: string;

  @IsString()
  descricao: string;
}
