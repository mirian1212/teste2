import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Motivo } from '../../entidadee/motivo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.scss'],
})
export class NotificacoesComponent implements OnInit {
   motivo: Motivo = new Motivo();

  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {}


    salvar(){
      this.banco.list('motivo').push(this.motivo);
      this.motivo= new Motivo();
      this.rota.navigate(['notificacao']);
      alert("Enviado")
    }

}
