import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {

    this.auth.entrar(this.userLogin).subscribe((resp: UsuarioLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id
      environment.foto = this.userLogin.foto
      environment.tipo = this.userLogin.tipo

      if (environment.tipo == 'empresa') {
        this.router.navigate(['/perfil-e'])
      } else {
        this.router.navigate(['/perfil-f'])
      }

    }, erro => {
      if (erro.status == 500) {
        this.alertas.showAlertDanger('Usuário ou senha estão incorretos!')
      }
    })

  }

}