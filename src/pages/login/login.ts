import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public storage: Storage
  ) {

      this.regForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
      });
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad LoginPage');
   this.storage.get('token').then(res => {
    console.log(res);
    this.navCtrl.setRoot(NotesPage);
   });
   
  }

  login() {
    console.log(this.regForm.value);
    this.rest.login('oauth/token', this.regForm.value).subscribe(res => {
      this.storage.set('token', res['access_token']).then(res => {
        this.navCtrl.setRoot(NotesPage);
      });
    });
  }

}
