import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem{
    public id: number
    public titulo: string
    public conteudo: string
    public data: Date
    public usuarioAjuda: number
    public tipoUsuario: string
    public tema: Tema 
    public usuario: Usuario
}