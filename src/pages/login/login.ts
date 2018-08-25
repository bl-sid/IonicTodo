import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { NotesPage } from '../notes/notes';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  regForm: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public rest: RestProvider,
    public storage: Storage,
    public menuCtrl: MenuController
  ) {

    menuCtrl.enable(false);

      this.regForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
      });

      this.storage.get('token').then(res => {
        console.log(res);
        if (res !== null && res !== undefined) {
          this.navCtrl.setRoot(NotesPage);
        }
       }).catch(res => {
         console.log(res);
       });
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad LoginPage');
  }

  login() {
    console.log(this.regForm.value);
    this.rest.login('oauth/token', this.regForm.value).subscribe(res => {
      this.storage.set('token', res['access_token']).then(res => {
        this.rest.setToken();
        this.navCtrl.setRoot(NotesPage);
      });
    });
  }

}
