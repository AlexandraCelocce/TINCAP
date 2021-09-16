import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { CadastrarFamiliaComponent } from './cadastrar-familia/cadastrar-familia.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { PerfilEComponent } from './perfil-e/perfil-e.component';
import { PerfilFComponent } from './perfil-f/perfil-f.component';
import { TemaComponent } from './tema/tema.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'perfil-f', component: PerfilFComponent},
  {path: 'perfil-e', component: PerfilEComponent},
  {path: 'cadastrar-familia', component: CadastrarFamiliaComponent},
  {path: 'cadastrar-empresa', component: CadastrarEmpresaComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }