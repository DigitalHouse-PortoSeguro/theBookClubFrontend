import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'


import { AppComponent } from './app.component';
import { FormUsuarioComponent } from './components/usuario/form-usuario/form-usuario.component';
import { InputCustomComponent } from './components/input-custom/input-custom.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';
import { CardLivroComponent } from './components/livro/card-livro/card-livro.component';
import { UsuarioCadastroComponent } from './components/usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioAtualizarComponent } from './components/usuario/usuario-atualizar/usuario-atualizar.component';
import { ListarUsuariosComponent } from './components/usuario/listar-usuarios/listar-usuarios.component';
import { GerenciarUsuarioComponent } from './components/usuario/gerenciar-usuario/gerenciar-usuario.component';
import { UsuarioAtualizarAdminComponent } from './components/usuario/usuario-atualizar-admin/usuario-atualizar-admin.component';
import { ProdutoLivroComponent } from './components/livro/produto-livro/produto-livro.component';
import { ListaLivroComponent } from './components/livro/lista-livro/lista-livro.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { ItemCarrinhoComponent } from './components/item-carrinho/item-carrinho.component';
import { CalcFreteComponent } from './components/calc-frete/calc-frete.component';
import { LivrosTituloComponent } from './components/livro/livros-titulo/livros-titulo.component';
import { LivroCategoriaComponent } from './components/livro/livro-categoria/livro-categoria.component';
import { LivroCadastroComponent } from './components/livro/livro-cadastro/livro-cadastro.component';
import { EntrarComponent } from './components/entrar/entrar.component';
import { MensagemModule } from './mensagem/mensagem/mensagem.module';
import { HomeComponent } from './views/home/home.component';
import { ListagemLivrosComponent } from './components/livro/listagem-livros/listagem-livros.component';
import { GerenciarLivroComponent } from './components/livro/gerenciar-livro/gerenciar-livro.component';
import { AtualizarLivroComponent } from './components/livro/atualizar-livro/atualizar-livro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { InicioComponent } from './views/inicio/inicio.component';
//import { InicioComponent } from './components/inicio/inicio.component';
import { SairComponent } from './components/sair/sair.component';
import { SobreNosComponent } from './views/sobre-nos/sobre-nos.component';
import { FaleConoscoComponent } from './views/fale-conosco/fale-conosco.component';
import { FormasPagamentoComponent } from './views/formas-pagamento/formas-pagamento.component';
import { TextareaComponent } from './components/textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUsuarioComponent,
    InputCustomComponent,
    InputFieldComponent,
    DropdownComponent,
    FormDebugComponent,
    CardLivroComponent,
    UsuarioCadastroComponent,
    UsuarioAtualizarComponent,
    ListarUsuariosComponent,
    GerenciarUsuarioComponent,
    UsuarioAtualizarAdminComponent,
    ProdutoLivroComponent,
    ListaLivroComponent,
    CarrinhoComponent,
    ItemCarrinhoComponent,
    CalcFreteComponent,
    LivrosTituloComponent,
    LivroCategoriaComponent,
    LivroCadastroComponent,
    EntrarComponent,
    InicioComponent,
    HomeComponent,
    ListagemLivrosComponent,
    GerenciarLivroComponent,
    AtualizarLivroComponent,
    NavbarComponent,
    RodapeComponent,
    InicioComponent,
    SairComponent,
    SobreNosComponent,
    FaleConoscoComponent,
    FormasPagamentoComponent,
    TextareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MensagemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
