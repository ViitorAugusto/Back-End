import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  private usuarios: UsuarioEntity[] = [];
  async salvar(usuario: UsuarioEntity) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }

  async existeEmail(email: string) {
    const usuario = this.usuarios.find((usuario) => usuario.email === email)
    return usuario !== undefined;
  }

  private async buscarPorId(id: string) {
    const possivelUuario = this.usuarios.find((usuario) => usuario.id === id);
    if (!possivelUuario) {
      throw new Error('Usuário não encontrado');
    }
    return possivelUuario;
  }

  async atualizar(id: string, dadosdeAtualizacao?: Partial<UsuarioEntity>) {
    const usuario = this.buscarPorId(id);
    Object.entries(dadosdeAtualizacao).forEach(([chave, valor]) => {
      if (chave === id) {
        return;
      }
      usuario[chave] = valor;
    });
    return usuario;
  }

  async remover(id: string) {
    const usuario = this.buscarPorId(id);
   this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);
   return usuario;
  }
}
