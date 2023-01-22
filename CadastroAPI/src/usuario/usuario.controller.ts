import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CriaUsuarioDto } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDto } from './dto/ListaUsuario.dto';
import { AtualizarUsuarioDto } from './dto/AtualizarUsuario.dto copy';

// @Controller('/usuario') é um decorador que diz ao Nest que esta classe é um controlador

@Controller('/usuario')
export class UsuarioController {
  constructor(private usuariosRepository: UsuarioRepository) {}

  // @Post() é um decorador que diz ao Nest que este método é um endpoint do tipo POST
  @Post()
  async criarUsuario(@Body() dadosDoUsuario: CriaUsuarioDto) {
    try {
      const usuarioEntity = new UsuarioEntity();
      usuarioEntity.nome = dadosDoUsuario.nome;
      usuarioEntity.email = dadosDoUsuario.email;
      usuarioEntity.senha = dadosDoUsuario.senha;
      usuarioEntity.id = uuid();
      this.usuariosRepository.salvar(usuarioEntity);
      return {
        usuario: new ListaUsuarioDto(usuarioEntity.id, usuarioEntity.nome),
        message: 'Usuário criado com sucesso',
      };
    } catch (error) {
      return {
        message: 'Erro ao criar usuário',
      };
    }
  }
  // @Get() é um decorador que diz ao Nest que este método é um endpoint do tipo GET
  // listar os usuários cadastrados
  @Get()
  async listarUsuarios() {
    const usuariosSalvos = await this.usuariosRepository.listar();
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDto(usuario.id, usuario.nome),
    );
    return usuariosLista;
  }

  @Put('/:id')
  async atualizarUsuario(@Param('id') id: string,@Body() dadosParaAtualizar: AtualizarUsuarioDto,) {
    const usuarioSalvo = await this.usuariosRepository.atualizar(id, dadosParaAtualizar );
    try {
      if (!usuarioSalvo) return { message: 'Usuário não encontrado' };
      
      return {
        message: 'Usuário atualizado com sucesso',
        usuarioSalvo,
      };
    } catch (error) { return {message: 'Erro ao atualizar usuário'};
    }
  }

  @Delete('/:id')
  async deletarUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.usuariosRepository.remover(id);
    try {
      if (!usuarioRemovido) {
        return { message: 'Usuário não encontrado' };
      }
      return {
        message: 'Usuário deletado com sucesso',
      };
    } catch (error) {
      return {
        message: 'Erro ao deletar usuário',
      };
    }
  }
}
