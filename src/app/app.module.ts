import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RotinasdiaComponent } from './rotinasdia/rotinasdia.component';
import { RotinadiaComponent } from './rotinasdia/rotinadia/rotinadia.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RotinasComponent } from './rotinas/rotinas.component';
import { LoginComponent } from './navbar/login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RotinaComponent } from './rotinas/rotina/rotina.component';

@NgModule({
  declarations: [AppComponent, RotinasdiaComponent, RotinadiaComponent, NavbarComponent, RotinasComponent, LoginComponent, UsuariosComponent, RotinaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
