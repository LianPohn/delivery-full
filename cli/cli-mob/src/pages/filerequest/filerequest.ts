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

  itemList = [
    {
      name : "item 1",
      amount : 0,
      price : 20
    },
    {
      name : "item 2",
      amount : 0,
      price : 33
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
    item.amount = (item.amount <= 0) ? (0) : (item.amount - 1);
  }

  increaseItemAmountList(event, item){
    item.amount++;
  }

}
