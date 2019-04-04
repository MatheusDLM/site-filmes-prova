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

    this.usuario = this.site.getUmUsuario(this.index);
  }

  editar(meuForm){
    let idF = (meuForm.value.id);
    let nomeF = (meuForm.value.nome);
    let emailF = (meuForm.value.email);    

    if(nomeF && emailF != ""){
      this.site.editarUsuario(idF, nomeF, emailF);
      this.cadastroAtualizado();
    }else{
      this.camposVazios();
    }
  }

  excluir(meuForm){
    let idF = (meuForm.value.id);
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

  async usuarioExcluidoStatus() {
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
      header: 'Deseja Excluir o Usuario?',
      buttons: [{
        text:'Sim',
        handler: () => {
          this.site.excluirUsuario(id);
          this.local.back();
          this.usuarioExcluidoStatus();
        }
      },{
        text:'Não'
      }]
    });

    await alert.present();
  }

}
