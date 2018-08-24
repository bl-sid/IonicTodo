import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  notes;// = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  private rest: RestProvider) {
    this.getNotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

  getNotes() {
    this.rest.get('notes/all').subscribe(res => {
      console.log(res);
      this.notes = res;
    })
  }

}
