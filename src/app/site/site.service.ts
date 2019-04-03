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


}

export class Usuario {
  nome: string;
  email: string;

  constructor(_nome: string, _email: string) {
    this.nome = _nome;
    this.email = _email;
  }
}
