import { Postagem } from "./Postagem"

export class Usuario{
    public id: number
    public nomeCompleto: string
    public usuario: string
    public senha: string
    public foto: string
    public tipo: string
    public famTelefone: number
    public famCep: string
    public famEndereco: string
    public famBairro: string
    public empCNPJ: string
    public postagem: Postagem[]

}