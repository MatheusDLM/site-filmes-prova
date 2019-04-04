import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  usuario: any = {};
  site: SiteService;

  constructor(private local: Location, _site: SiteService) {
    this.site = _site;
  }

  ngOnInit() {}

  cadastrar(meuForm) {
    let _nome = meuForm.value.nome;
    let _email = meuForm.value.email;
    let idF = (meuForm.value.id);
    
    if (_nome && _email) {
      
      this.site.addUsuario({
        id: idF,
        nome: _nome, 
        email: _email,
        imagem: 'https://api.adorable.io/avatars/100/' + idF + '.png',
      });
      this.local.back();

    } else {
      alert('Você deve digitar todos os dados');
    }
  }


  voltar() {
    this.local.back();
  }

}
