import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotinasComponent } from './rotinas/rotinas.component';
import { RotinasdiaComponent } from './rotinasdia/rotinasdia.component';
import { UsuarioLogadoGuard } from './usuario-logado.guard';

import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    // path: 'rotinasdia/:dia',
    path: 'rotinasdia',
    component: RotinasdiaComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {    
    path: 'rotinas',
    component: RotinasComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {    
    path: 'usuarios',
    component: UsuariosComponent,
    canActivate: [UsuarioLogadoGuard]
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
