import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuarioCadastroComponent } from './components/usuario-cadastro/usuario-cadastro.component';
import { InputCustomComponent } from './components/input-custom/input-custom.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';
import { CardLivroComponent } from './components/livro/card-livro/card-livro.component'

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCadastroComponent,
    InputCustomComponent,
    InputFieldComponent,
    DropdownComponent,
    FormDebugComponent,
    CardLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
