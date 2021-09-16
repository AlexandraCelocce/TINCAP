import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PerfilFComponent } from './perfil-f/perfil-f.component';
import { PerfilEComponent } from './perfil-e/perfil-e.component';
import { CadastrarFamiliaComponent } from './cadastrar-familia/cadastrar-familia.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { EntrarComponent } from './entrar/entrar.component';

import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { OrderModule } from 'ngx-order-pipe';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    PerfilFComponent,
    PerfilEComponent,
    CadastrarFamiliaComponent,
    EntrarComponent,
    CadastrarEmpresaComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemDeleteComponent,
    PostagemEditComponent,
    RodapeComponent,
    MenuComponent,
    HomeComponent,
    SobreComponent,
    UsuarioEditComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }