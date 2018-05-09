import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, App } from 'ionic-angular';
import { DataStorageManager, FileDataManager } from '../../app/data-storage-management/data-storage-manager';

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

  private stogrageManager : DataStorageManager;

  private itemImgDirPath = "assets/imgs/";
  private itemList = null;

  total = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public app: App) {
      this.stogrageManager = new FileDataManager("itemsStock.json");
      this.stogrageManager.readItems(this, "itemList");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilerequestPage');
  }

  showConfirm() {
    let total = 0;
    debugger;
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
            this.stogrageManager.writeItems(this.itemList);
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
    this.updateTotal();
  }

  increaseItemAmountList(event, item){
    item.amount = (item.amount < item.stock) ? item.amount + 1 : item.amount;
    this.updateTotal();
  }

  updateTotal(){
    this.total = 0;
    for(let i of this.itemList){
      this.total = this.total + i.amount * i.price;
    }
  }

}
