import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { NoteshomePage } from '../noteshome/noteshome';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  rootPage = NoteshomePage;

  notes;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private rest: RestProvider,
    public menuCtrl: MenuController,
    private service: ServiceProvider) {
    menuCtrl.enable(true);
    this.getNotes();
    service.getProfile();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad NotesPage');
  }

  getNotes() {
    this.rest.get('notes/all').subscribe(res => {
      console.log(res);
      this.notes = res;
    })
  }

}
