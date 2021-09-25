import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar-familia',
  templateUrl: './cadastrar-familia.component.html',
  styleUrls: ['./cadastrar-familia.component.css']
})
export class CadastrarFamiliaComponent implements OnInit {

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
    this.user.tipo= 'familia'
    
    if(this.user.nomeCompleto.length < 5){
      this.alertas.showAlertInfo('O usuário deve conter no mínimo 5 caracteres.')
    }
    else if(this.user.empCNPJ == ''){
      this.alertas.showAlertInfo('O campo CNPJ é obrigatorio.')
    }
    else if(this.user.usuario.indexOf('@') == -1 || this.user.usuario.indexOf('.') == -1){
      this.alertas.showAlertInfo('O usuário deve ser um email (e.g. usuario@usuario.com)')
    }
    else if(this.user.famTelefone > 11 || this.user.famTelefone == null){
      this.alertas.showAlertInfo('O campo telefone é obrigatorio!')
    }
    else if(this.user.senha.length < 8){
      this.alertas.showAlertInfo('A senha deve conter no mínimo 8 dígitos.')
    }
    else if(this.user.senha != this.confirmarSenha){
      this.alertas.showAlertInfo('As senhas informadas estão diferentes!')
    }
    else{
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        console.log(resp)
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso')
      })
    }
  }

  consultaCep(valor:String, form:any){
    this.authService.buscarCEP(valor).subscribe((dados) => this.populaForm(dados,form));
  }

  populaForm(dados:any, form:any){
    form.setValue({
      cep: dados.cep,
      lougradouro: dados.logradouro,
      bairro: dados.bairro,
    })
  }


}