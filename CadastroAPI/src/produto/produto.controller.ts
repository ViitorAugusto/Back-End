import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaProdutoDto } from './dto/CriaProduto.dto';
import { ProdutoRepository } from './produto.repository';

@Controller('/produto')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criarProduto(@Body() dadosDoProduto: CriaProdutoDto) {
    this.produtoRepository.salvar(dadosDoProduto);
    return dadosDoProduto;
  }
  @Get()
    async listarProdutos(){
        return this.produtoRepository.listar();
    }
  
}
