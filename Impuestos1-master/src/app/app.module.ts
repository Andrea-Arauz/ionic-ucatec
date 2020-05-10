import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

firebase.initializeApp({
  apiKey: "AIzaSyBBFq0Vo7SK6zhRyjmRd_DUG9whM6xPp7w",
  authDomain: "impues-4fc85.firebaseapp.com",
  databaseURL: "https://impues-4fc85.firebaseio.com",
  projectId: "impues-4fc85",
  storageBucket: "impues-4fc85.appspot.com",
  messagingSenderId: "161830053630",
  appId: "1:161830053630:web:db903a2eb35d6c2392a7af",
  measurementId: "G-EZ6513R9ST"
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,  
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GooglePlus
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
