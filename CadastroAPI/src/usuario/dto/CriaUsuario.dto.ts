import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CriaUsuarioDto  {
    @IsNotEmpty({ message: 'Nome é obrigatório'})
    nome: string;
    
    @IsEmail( {}, { message: 'Email inválido' } )
    email: string;
    
    @MinLength(6 , { message: 'Senha deve ter no mínimo 6 caracteres' })
    senha: string;
 
}

