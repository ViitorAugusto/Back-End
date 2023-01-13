import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuario.repository";
import { EmailEhUnicoValidator } from "./validacao/email.validator";

// @Module é um decorador que diz ao Nest que esta classe é um módulo
// @Module recebe um objeto como parâmetro, que pode conter as propriedades:
@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailEhUnicoValidator],

}) 

export class UsuarioModule {}