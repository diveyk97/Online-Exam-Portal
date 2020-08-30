import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineproject';
  constructor(public router:Router){}
  // goToRegister(){
  //   this.router.navigateByUrl('/register');
  // }
  goToHome(){
    this.router.navigateByUrl('/');
  }
  goToLogin(){
    this.router.navigateByUrl('/login');
  }

}