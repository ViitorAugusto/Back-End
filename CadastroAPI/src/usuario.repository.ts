

export class UsuarioRepository{
    private usuarios= [];

    async salvar (usuario: any){
        this.usuarios.push(usuario);
        console.log(this.usuarios);
    }
}