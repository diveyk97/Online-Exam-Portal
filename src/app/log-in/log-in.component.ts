import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
   logInForm:FormGroup ;
  constructor(public router: Router) { 
    this.logInForm = new FormGroup({
      
      mailId:new FormControl("",Validators.required),
      passWord:new FormControl("",Validators.required)
    }) ;
  }
  goToRegister(){
    this.router.navigateByUrl('/register');
  }
 goToStart(){
  this.router.navigateByUrl('/start');
 }

  ngOnInit(): void {
  }

}
