import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {

  user: Usuario = new Usuario()
  confirmarSenha: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

  }

  confirmeSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  cadastrar(){
    this.user.tipo = 'empresa'
    
    if(this.user.nomeCompleto.length < 5){
      this.alertas.showAlertInfo('O usuário deve conter no mínimo 5 caracteres.')
    }
    if(this.user.usuario.indexOf('@') == -1 || this.user.usuario.indexOf('.') == -1){
      this.alertas.showAlertInfo('O usuário deve ser um email (e.g. usuario@usuario.com)')
    }
   

    if(this.user.senha.length < 8){
      this.alertas.showAlertInfo('A senha deve conter no mínimo 8 dígitos.')
    }else if(this.user.senha != this.confirmarSenha){
      this.alertas.showAlertInfo('As senhas informadas estão diferentes!')
    }else{
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso')
      })
    }
  }
}
