import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email.validator';

export class AtualizarUsuarioDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  @IsOptional()
  nome: string;

  @IsEmail({}, { message: 'Email inválido' })
  @EmailEhUnico({ message: 'Email já cadastrado' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  @IsOptional()
  senha: string;
}
