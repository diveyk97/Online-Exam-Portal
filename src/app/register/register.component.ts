import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { FormBuilder,FormControl ,FormGroup, Validators,AbstractControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup ;
  constructor(public router:Router) { 
    this.registerForm = new FormGroup({
      firstName:new FormControl("",Validators.required),
      secondName:new FormControl("",Validators.required),
      mailId:new FormControl("",Validators.email),
      passWord:new FormControl("",[Validators.required,Validators.minLength(8)]),
      cpassWord:new FormControl("",[Validators.required,Validators.minLength(8)]),
      mobilePhone:new FormControl("",[Validators.required,Validators.pattern(/[0-9]{10}/),Validators.maxLength(10)])

    },{validators: this.MustMatch }
    )
  }
  // mailValidator(control:AbstractControl){
  //   for (let i=0;i<control.value.length();i++){
  //     if (control.value>=0 && control.value<=9) return ({'mailValidator':true})
  //   }
  //   if (control.value)
  //   return null ;
  // }
  private MustMatch(form: FormGroup) {
   
        return form.get('passWord').value === form.get('cpassWord').value ? null : { mismatch: true };
}
  ngOnInit(): void {
  }
  goToLogin(){
    this.router.navigateByUrl('/login');
  }

}
