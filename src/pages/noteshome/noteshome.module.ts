import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoteshomePage } from './noteshome';

@NgModule({
  declarations: [
    NoteshomePage,
  ],
  imports: [
    IonicPageModule.forChild(NoteshomePage),
  ],
})
export class NoteshomePageModule {}
