import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';

/**
 * Generated class for the FilerequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filerequest',
  templateUrl: 'filerequest.html',
})
export class FilerequestPage {

  itemImgDirPath = "assets/imgs/";
  itemList = [
    {
      name : "Toro tinto - Tetrabrik 1L",
      amount : 0,
      price : 20,
      stock : 10,
      img : this.itemImgDirPath + "toro-tinto-tetra-brik.jpg"
    },
    {
      name : "Toro Viejo tinto 750 mL",
      amount : 0,
      price : 33,
      stock : 6,
      img : this.itemImgDirPath + "toro-viejo-tinto-3-4.jpg"
    },
    {
      name : "Toro tinto - Botella 1L",
      amount : 0,
      price : 41,
      stock : 3,
      img : this.itemImgDirPath + "toro-tinto-botella.jpg"
    },
    {
      name : "Brahama - Botella 1L",
      amount : 0,
      price : 41,
      stock : 3,
      img : this.itemImgDirPath + "brahama-botela-litro.jpg"
    },
    {
      name : "Quilmes Cristal - Botella 1L",
      amount : 0,
      price : 41,
      stock : 3,
      img : this.itemImgDirPath + "quilmes-botella.jpg"
    },
    {
      name : "Quilmes Cristal - Lata 500 mL",
      amount : 0,
      price : 41,
      stock : 3,
      img : this.itemImgDirPath + "quilmes-lata.jpg"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilerequestPage');
  }

  showConfirm() {
    let total = 0;
    for(let item of this.itemList){
      total = total + item.amount * item.price;
    }
    let confirm = this.alertCtrl.create({
      title: '¿Facturar?',
      message: '¿Usted quiere emitir una factura por el monto de <u><b>$' + total + '</b></u>?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Si',
          handler: () => {
            console.log('Agree clicked');
            const root = this.app.getRootNav();
            root.popToRoot();
          }
        }
      ]
    });
    confirm.present();
  }

  decreaseItemAmountList(event, item){
    item.amount = (item.amount <= 0) ? 0 : item.amount - 1;
  }

  increaseItemAmountList(event, item){
    item.amount = (item.amount < item.stock) ? item.amount + 1 : item.amount;
  }

}
