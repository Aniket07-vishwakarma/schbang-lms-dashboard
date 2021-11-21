import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {    
    if ((localStorage.getItem("isLogin")) == "true") {
      this.isLogin = true;
      console.log(this.isLogin);
    } else {
      this.isLogin = false;
      console.log(this.isLogin);
    }
  }

  clickOnLogOut() {
    localStorage.setItem("isLogin", "false");
    window.location.href = "/";
  }

  clickOnLogIn() {
    localStorage.setItem("isLogin", "true");
    window.location.href = "/";
  }

}
