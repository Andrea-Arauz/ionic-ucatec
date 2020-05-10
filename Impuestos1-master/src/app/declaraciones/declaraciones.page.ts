import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import {ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-declaraciones',
  templateUrl: './declaraciones.page.html',
  styleUrls: ['./declaraciones.page.scss'],
})
export class DeclaracionesPage implements OnInit {

  numeroCompras: string;
  montoVentas: number;
  numeroDeCompras: string;
  numeroEnCompras:string;
  impuesto:string;
  public ocultar1: boolean = false;
  totalPalets:number;

  ngOnInit() {
  }
  constructor(private toastCtrl: ToastController, private navCtrl: NavController) {
  }

  accion1(){
    this.ocultar1 = !this.ocultar1;

    this.totalPalets = this.montoVentas*0.13;
 }
  addTodo() {
    firebase.firestore().collection("declaraciones").add({
      numeroCompras: this.numeroCompras,
      montoVentas: this.montoVentas,
      numeroDeCompras: this.numeroDeCompras,
      numeroEnCompras:this.numeroEnCompras,
      impuesto: this.totalPalets
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
