import { Component } from '@angular/core';

import { NavController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  declaraciones: any[] = [];

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { 
    this.getTodos();
  }

  ngOnInit() {
  }

  getTodos() {
    firebase.firestore().collection("declaraciones")
    .onSnapshot((querySnapshot) => {
      this.declaraciones = querySnapshot.docs;
    });
  }
}
