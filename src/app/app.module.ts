import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatoSalvarPageModule } from './contato/contato-salvar/contato-salvar.module';
import { ProfessorSalvarPageModule } from './professor/professor-salvar/professor-salvar.module';


@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ContatoSalvarPageModule, ProfessorSalvarPageModule,
   AngularFireModule.initializeApp({

     apiKey: "AIzaSyCHM5pdcN8_8wNRYZRkNCaGpg1QZAar-FM",
        authDomain: "agenda-feba3.firebaseapp.com",
        databaseURL: "https://agenda-feba3.firebaseio.com",
        projectId: "agenda-feba3",
        storageBucket: "agenda-feba3.appspot.com",
        messagingSenderId: "586002027120",
        appId: "1:586002027120:web:23169e59f1eb937c"

     }), AngularFireDatabaseModule
       ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
