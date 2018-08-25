import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NoteshomePage } from '../pages/noteshome/noteshome';
import { RestProvider } from '../providers/rest/rest';
import { ServiceProvider } from '../providers/service/service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  user;

  imgUrl;

  userSubscription: Subscription;

  constructor(platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
    private service: ServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      this.userSubscription = service.userSubject.subscribe(res => {
        this.user = res;
        this.imgUrl = 'url(' + this.user.profileUrl + ')';
      });

    });
  }
}

