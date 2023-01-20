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
    const usuario = this.usuarios.find((usuario) => usuario.email === email);

    return usuario !== undefined;
  }
  async buscarPorId(id: string) {
    const usuario = this.usuarios.find((usuario) => usuario.id === id);
    return usuario;
  }
  async deletar(id: string) {
    const usuario = this.buscarPorId(id);
    if (usuario) {
      const index = this.usuarios.indexOf(await usuario);
      this.usuarios.splice(index, 1);
    }
  }
}
