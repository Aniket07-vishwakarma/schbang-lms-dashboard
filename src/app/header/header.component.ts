import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginSatatus: boolean=false;
  constructor(public globalService: GlobalService) { }

  ngOnInit(): void {    
    // if(localStorage.getItem("userName")) {
    //   this.loginSatatus = true
    // } else {
    //   this.loginSatatus = false
    // }
    // alert("isLogin " + this.globalService.isLogin);
  }

}
