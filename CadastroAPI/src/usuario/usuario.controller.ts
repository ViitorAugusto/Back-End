import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

// @Controller('/usuario') é um decorador que diz ao Nest que esta classe é um controlador

@Controller('/usuario')
export class UsuarioController {
  
  constructor(private usuariosRepository: UsuarioRepository) {}

  // @Post() é um decorador que diz ao Nest que este método é um endpoint do tipo POST
  @Post()
  async criarUsuario(@Body() dadosDoUsuario) {
    this.usuariosRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }

  // @Get() é um decorador que diz ao Nest que este método é um endpoint do tipo GET
  // listar os usuários cadastrados
  @Get()
  async listarUsuarios() {
    return this.usuariosRepository.listar();
  }
}
