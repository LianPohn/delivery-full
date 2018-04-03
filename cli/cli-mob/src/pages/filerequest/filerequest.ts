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

  itemAmount = 0;
  itemPrice = 20;
  itemPriceTotal = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilerequestPage');
  }

  decreaseItemAmount(event){
    this.itemAmount = (this.itemAmount <= 0) ? (0) : (this.itemAmount - 1);
    this.updatePriceTotal();
  }

  increaseItemAmount(event){
    this.itemAmount++;
    this.updatePriceTotal();
  }

  updatePriceTotal(){
    this.itemPriceTotal = this.itemAmount * this.itemPrice;
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: '¿Facturar?',
      message: '¿Usted quiere emitir una factura por el monto de <u><b>$' + this.itemPriceTotal + '</b></u>?',
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

}
