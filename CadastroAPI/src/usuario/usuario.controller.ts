import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaUsuarioDto } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import {v4 as uuid} from 'uuid'
import { ListaUsuarioDto } from './dto/ListaUsuario.dto';

// @Controller('/usuario') é um decorador que diz ao Nest que esta classe é um controlador

@Controller('/usuario')
export class UsuarioController {
  constructor(private usuariosRepository: UsuarioRepository) {}

  // @Post() é um decorador que diz ao Nest que este método é um endpoint do tipo POST
  @Post()
  async criarUsuario(@Body() dadosDoUsuario: CriaUsuarioDto) {
    const usuarioEntity = new UsuarioEntity();
    usuarioEntity.nome = dadosDoUsuario.nome;
    usuarioEntity.email = dadosDoUsuario.email;
    usuarioEntity.senha = dadosDoUsuario.senha;
    usuarioEntity.id = uuid();
    this.usuariosRepository.salvar(usuarioEntity);
    return { id: usuarioEntity.id, message: 'Usuário criado com sucesso'}
  }

  // @Get() é um decorador que diz ao Nest que este método é um endpoint do tipo GET
  // listar os usuários cadastrados
  @Get()
  async listarUsuarios() {
    const usuariosSalvos = await this.usuariosRepository.listar();
      const usuariosLista = usuariosSalvos.map(usuario => {
        usuario => new ListaUsuarioDto(usuario.id, usuario.nome)
      })
  }
}
