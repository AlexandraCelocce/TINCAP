import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-perfil-e',
  templateUrl: './perfil-e.component.html',
  styleUrls: ['./perfil-e.component.css']
})
export class PerfilEComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  tipo = environment.tipo
  id = environment.id
  empTelefone = environment.famTelefone
  empCNPJ = environment.empCNPJ

  nomeTema: string

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPostagem: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  user: Usuario = new Usuario()
  idUser = environment.id

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService,
    public authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)

    this.getAllTemas()
    this.getAllPostagens()
  }
  //Temas
  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  //Postagens
  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdPostagem(id: number) {
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem = resp
      console.log(resp)
    })
  }

  findByTituloPostagem() {

    if (this.tituloPostagem == '') {
      this.getAllPostagens()
    }

    this.postagemService.getByTituloPostagem(this.tituloPostagem).subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    if(environment.tipo == 'familia'){
    this.postagem.tipoUsuario = environment.tipo
    }

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })

  }

  verificaUser(){

    this.listaPostagens
    let verifica = false

    if(this.tipo == 'familia'){
      verifica = true
    }

    return verifica 
  }

  atualizar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    this.postagem.usuarioAjuda = this.id

    this.postagemService.putPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem atualizada com sucesso!')
    })
  }

  findByNomeTema(){
    if(this.nomeTema == ''){
      this.getAllTemas()
    }else{
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }
  }


}
