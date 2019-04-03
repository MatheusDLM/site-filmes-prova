import { NgModule } from '@angular/core';

import { SiteRoutingModule } from './site-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { GeralModule } from '../geral/geral.module';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    CadastroComponent
  ],
  imports: [
    GeralModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
