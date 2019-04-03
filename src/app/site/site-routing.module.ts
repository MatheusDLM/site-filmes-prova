import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent },
  // { path: 'voto', component: null },
  { path: 'cadastro', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
