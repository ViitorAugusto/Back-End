import { IsNotEmpty } from "class-validator";



export class CriaProdutoDto {
    @IsNotEmpty({ message: 'Nome é obrigatório'})
    nome: string;
}