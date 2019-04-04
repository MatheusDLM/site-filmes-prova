import { Injectable } from '@angular/core';
import { _ParseAST } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private _usuarios: Usuario[] = [];

  constructor() {
    const _temp = localStorage.getItem('usuarios_usuarios');
    this._usuarios = _temp ? JSON.parse(_temp) : [];
  }


  getUsuarios(): Usuario[] {
    return this._usuarios;
  }


  getUmUsuario(index): Usuario {
    return this._usuarios[index];
  }


  addUsuario(usuario: Usuario) {
    this._usuarios.push(usuario);
    this.saveLocal();
  }


  salvarUsuario(usuario: Usuario, index: number) {
    this._usuarios[index] = usuario;
    this.saveLocal();
  }


  private saveLocal() {
    localStorage.setItem('usuarios_usuarios', JSON.stringify(this._usuarios));
  }

  editarUsuario(id, nome, email){
    this._usuarios[id].nome = nome;
    this._usuarios[id].email = email;
    this.saveLocal();
  }

  excluirUsuario(id){
    this._usuarios[id].nome = null;
    this._usuarios[id].email = null;
    this._usuarios[id].imagem = null;
    this.saveLocal();
  }


}

export class Usuario {
  id: number;
  nome: string;
  email: string;
  imagem: string

  constructor(id: number,nome: string, email: string, imagem: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.imagem = imagem;
  }
}
