import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { SiteService, Usuario } from '../site.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {

  index: any;
  usuario: Usuario;

  constructor(private local:Location, 
              private site: SiteService, 
              private rota: ActivatedRoute,
              private alertController: AlertController) { }

  ngOnInit() {

    this.index = this.rota.snapshot.paramMap.get('id');
    //console.log(this.index);

    /*this.index = this.rota.queryParams.subscribe( parametros => {
      if (parametros['id']) {
        console.log(parametros);
      }
    });*/

    this.usuario = this.site.getUmUsuario(this.index);
    //console.log(this.contato);
  }

  editar(formulario){
    let idF = (formulario.value.id);
    let nomeF = (formulario.value.nome);
    let emailF = (formulario.value.email);    

    if(nomeF && emailF != ""){
      this.site.editarUsuario(idF, nomeF, emailF);
      this.cadastroAtualizado();
    }else{
      this.camposVazios();
    }
  }

  excluir(formulario){
    let idF = (formulario.value.id);
    this.excluirConfirma(idF);
  }

  async cadastroAtualizado() {
    const alert = await this.alertController.create({
      header: 'Usuario Atualizado',
      buttons: [{
        text:'OK',
        handler: () => {
          this.local.back();
        }
      }]
    });

    await alert.present();
  }

  async camposVazios() {
    const alert = await this.alertController.create({
      header: 'Preencha todos os campos',
      buttons: ['OK']
    });

    await alert.present();
  }

  async contatoExcluidoStatus() {
    const alert = await this.alertController.create({
      header: 'Usuario Excluido!',
      buttons: ['OK']
    });

    await alert.present();
  }

  voltar(){
    this.local.back();
  }

  async excluirConfirma(id) {
    const alert = await this.alertController.create({
      header: 'Deseja Excluir o Contato?',
      buttons: [{
        text:'Sim',
        handler: () => {
          this.site.excluirContato(id);
          this.local.back();
          this.contatoExcluidoStatus();
        }
      },{
        text:'Não'
      }]
    });

    await alert.present();
  }

}
