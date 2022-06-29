import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCadastroComponent } from './components/usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioAtualizarComponent } from './components/usuario/usuario-atualizar/usuario-atualizar.component';
import { ListarUsuariosComponent } from './components/usuario/listar-usuarios/listar-usuarios.component';
import { GerenciarUsuarioComponent } from './components/usuario/gerenciar-usuario/gerenciar-usuario.component';
import { UsuarioAtualizarAdminComponent } from './components/usuario/usuario-atualizar-admin/usuario-atualizar-admin.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { LivrosTituloComponent } from './components/livro/livros-titulo/livros-titulo.component';
import { LivroCategoriaComponent } from './components/livro/livro-categoria/livro-categoria.component';
import { ProdutoLivroComponent } from './components/livro/produto-livro/produto-livro.component';
import { LivroCadastroComponent } from './components/livro/livro-cadastro/livro-cadastro.component';
import { EntrarComponent } from './components/entrar/entrar.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { HomeComponent } from './views/home/home.component';
import { ListagemLivrosComponent } from './components/livro/listagem-livros/listagem-livros.component';
import { GerenciarLivroComponent } from './components/livro/gerenciar-livro/gerenciar-livro.component';
import { AtualizarLivroComponent } from './components/livro/atualizar-livro/atualizar-livro.component';
import { SairComponent } from './components/sair/sair.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "inicio", component: InicioComponent },//home page do usuario
  { path: "cadastrar", component: UsuarioCadastroComponent },//arrumar para usuarios/cadastrar
  { path: "atualizar", component: UsuarioAtualizarComponent },
  { path: "entrar", component: EntrarComponent },
  { path: "sair", component: SairComponent },
  { path: "admin/listar-usuarios", component: ListarUsuariosComponent },
  { path: "admin/gerenciar-usuario/:id", component: GerenciarUsuarioComponent },
  { path: "admin/atualizar-usuario/:id", component: UsuarioAtualizarAdminComponent },
  { path: "livros/cadastrar", component: LivroCadastroComponent },
  { path: "admin/cadastrarLivro", component: LivroCadastroComponent },
  { path: "carrinho", component: CarrinhoComponent},
  { path: "livros/titulo/:titulo", component: LivrosTituloComponent },
  { path: "livros/categoria/:categoria", component: LivroCategoriaComponent},
  { path: "livros/produto/:id", component: ProdutoLivroComponent },
  { path: "livros/listagem", component: ListagemLivrosComponent },
  { path: "livro/gerenciar-livro/:id", component: GerenciarLivroComponent },
  { path: "livro/atualizar-livro/:id", component: AtualizarLivroComponent },
  { path: "carrinho", component: CarrinhoComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
