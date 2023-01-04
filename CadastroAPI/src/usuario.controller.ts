import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuario')
export class UsuarioController {
  private usuariosRepository = new UsuarioRepository();

  @Post()
  async criarUsuario(@Body() dadosDoUsuario: string) {
    this.usuariosRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }
}
