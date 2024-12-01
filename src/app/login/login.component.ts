import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit, OnDestroy {
  focus;
  focus1;
  form: FormGroup;

  constructor(private  fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }


  private setSession(data) {
    localStorage.setItem('id_token', data.access);
  }

  login(){
    const  val = this.form.value;
    if(val.email && val.password ){
      this.authService.login(val.email, val.password)
        .subscribe( (data) => {
         console.log("User is logged in", data);
         this.setSession(data);
         this.router.navigateByUrl("/dashboard");
      }, error => {

        }
      );
    }
  }

  register(){
    this.router.navigateByUrl("/register");
  }


  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
  }
}
