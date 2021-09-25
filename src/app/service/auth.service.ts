import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>("https://tincap.herokuapp.com/usuario/login", usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>("https://tincap.herokuapp.com/usuario/cadastrar", usuario)
  }

  alterar(user: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>("https://tincap.herokuapp.com/usuario/alterar", user)
  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://tincap.herokuapp.com/usuario/${id}`)
  }

  buscarCEP(cep:String){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

  logado(){
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }
    return ok
  }

  adm(){
    let ok = false

    if(environment.tipo == 'empresa'){
      ok = true
    }

    return ok
  }

}
