import { Type } from 'class-transformer';
import {
    ArrayMinSize,
    IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CaracteristicaProdutoDTO} from './CaracteristicaProduto.dto';


export class CriaProdutoDto {
  @IsString()
  @IsNotEmpty({
    message: 'Nome é obrigatório',
  })
  nome: string;

  @IsPositive({ message: 'Quantidade deve ser maior que 0' })
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 2,
    },
    { message: 'Preço é obrigatório Ex: 10.00' },
  )
  valor: number;

  @IsPositive({ message: 'Quantidade deve ser maior que 0' })
  @IsInt({ message: 'Quantidade é obrigatório Ex: 10'})
  quantidade: number;

  
  @IsString()
  @MaxLength(100, { message: 'Descrição deve ter no máximo 100 caracteres' })
  @IsNotEmpty({ message: 'Descrição é obrigatório' })
  descricao: string;
 
  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1 , { message: 'Deve ter no mínimo 2 caracteristicas' }) 
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  
}
