import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Contato } from '../../contato/entidade/entidade/contato';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';


import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-primeiro-info',
  templateUrl: './primeiro-info.page.html',
  styleUrls: ['./primeiro-info.page.scss'],
})
export class PrimeiroInfoPage implements OnInit {
  listaContatos: Observable<Contato[]>;
  listaFiltro: Contato[];
  filtro = {};
  contato: any;
  valor: string;

  constructor(
    private rota: Router,
    private fire: AngularFireDatabase,
    private modal: ModalController
  ) {
    this.listaContatos = this.fire.list<Contato>('contato')
      .snapshotChanges().pipe(
        map(lista => lista.map(linha => ({
          key: linha.payload.key, ...linha.payload.val()
        })))
      );
  }

  ngOnInit() {

    this.listaContatos.subscribe(contato => {
      this.contato = contato;
      this.listaFiltro = _.filter(this.contato, _.conforms(this.filtro));
    })
  }

  filtrar() {
    this.filtro['nomedofilho'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.contato, _.conforms(this.filtro));
  }

  excluir(entidade) {
    this.fire.list('contato').remove(entidade.key);
    alert('Excluído com Sucesso');
  }

}
