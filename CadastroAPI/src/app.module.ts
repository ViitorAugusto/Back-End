import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/usuario.module';

import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule, ProdutoModule],
})
export class AppModule {}
