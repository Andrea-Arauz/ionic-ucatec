import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import {ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nombre: string;
  nit: string;
  direccion: string;
  ciudad:string;
  rubro:string

  ngOnInit() {
  }
  constructor(private toastCtrl: ToastController, private navCtrl: NavController) {
  }
  addTodo() {
    firebase.firestore().collection("empresa").add({
      nombre: this.nombre,
      nit: this.nit,
      direccion: this.direccion,
      ciudad:this.ciudad,
      rubro: this.rubro
    }).then((docRef) => {
      this.toastCtrl.create({
        message: "Registro Guardado Correctamente!",
        duration: 2000
      }).then((toast) => {
        toast.present();
        this.navCtrl.back();
      })
    }).catch((err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 2000
      }).then((toast) => {
        toast.present();
      })
    })

  }


}
