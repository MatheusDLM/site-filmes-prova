import { Component, OnInit } from '@angular/core';
import { SiteService, Usuario} from '../site.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private cands: SiteService, 
    private meuRouter: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.carregaUsuario();
  }

  navegarEdicao(index){
    this.meuRouter.navigate(['site/editar', index.id]);
  }


  carregaUsuario() {
    this.usuarios = this.cands.getUsuarios();
  }


  navegar() {
    this.meuRouter.navigate(['/site/cadastro']);
  }

}
