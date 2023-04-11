import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray, Validators, FormBuilder} from '@angular/forms';
import { LoginForm } from './login-form';
@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm:FormGroup;
submitted: boolean;
  constructor(private fb:FormBuilder) { 
  }
  loginUser(){
    if(this.myForm.valid){
    console.log(this.myForm.status);
    console.log(this.myForm.value);
    this.submitted=true;
    }
  }
  ngOnInit() {
    this.myForm=this.fb.group({
      email:new FormControl(null,[Validators.required,Validators.minLength(4)]),
      password:new FormControl(null,[Validators.required,Validators.maxLength(8)])
    });
  }s
  onSubmit() {
    if (this.myForm.valid) {
      const loginData: LoginForm = {
        email: this.myForm.value.email,
        password: this.myForm.value.password
      };
      // do something with the login data
    }
  }
  

}
