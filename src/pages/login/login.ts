import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AuthService } from '../../app/auth.service';
import {HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	username = '' ;
	password = '' ;

  constructor(private authService: AuthService, private navCtrl: NavController) {}

  login(){
  	const authenticated = this.authService.authenticate(this.username, this.password);
  	if (authenticated) {
  		this.navCtrl.setRoot(HomePage);
  	} else {
  		console.warn('login failed');
  	}
  }

}
