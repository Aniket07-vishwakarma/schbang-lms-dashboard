import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [MessageService]
})
export class LoginPageComponent implements OnInit {
  displayBasic: boolean = false;
  emailAdd: any;
  password: any;
  userName: any;
  userLoginData: any;
  islogin: boolean= false;
  constructor(private http: HttpClient, private global: GlobalService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.displayBasic = true;
    localStorage.clear();
    localStorage.setItem("isLogin", "false");
  }

  onLogin() {
    console.log(this.userName, this.emailAdd, this.password);

    localStorage.setItem("userName", this.userName);
    localStorage.setItem("emailAdd", this.emailAdd);
    localStorage.setItem("password", this.password);

    if (this.userName && this.emailAdd && this.password) {
      this.displayBasic = false;
      let loginData = {
        userName: this.userName,
        emailAdd: this.emailAdd,
        password: this.password
      }
      let url = this.global.basePath + "/saveUserLogin";
      console.log(url)
      this.http.post(url, loginData).subscribe(
        (response) => {
          this.userLoginData = response;          
          localStorage.setItem("userId", this.userLoginData.data.userId)
          this.redirectHomePage();
        },
        (error) => {
          console.log(error);          
        }
      )
    }     
    else {
      this.messageService.add({severity:'warn', summary: 'Fill Details', detail: 'Please fill the login the details.'});
    }
  }

  redirectHomePage() {
    localStorage.setItem("isLogin", "true");
    // this.router.navigateByUrl('/Home');
    window.location.href="/Home";
  }


}
