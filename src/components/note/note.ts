import { Component, Input } from '@angular/core';

/**
 * Generated class for the NoteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'note',
  templateUrl: 'note.html'
})
export class NoteComponent {

  @Input()
  note;

  text: string;

  constructor() {
    console.log('Hello NoteComponent Component');
    this.text = 'Hello World';
  }

}
