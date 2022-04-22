import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RotinasComponent } from './rotinas/rotinas.component';
import { RotinasdiaComponent } from './rotinasdia/rotinasdia.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    // path: 'rotinasdia/:dia',
    path: 'rotinasdia',
    component: RotinasdiaComponent,
  },
  {
    // path: 'rotinasdia/:dia',
    path: 'rotinas',
    component: RotinasComponent,
  },
  {
    // path: 'rotinasdia/:dia',
    path: 'usuarios',
    component: UsuariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
