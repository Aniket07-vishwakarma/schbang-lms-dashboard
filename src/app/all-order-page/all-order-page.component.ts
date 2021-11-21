import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global';

@Component({
  selector: 'app-all-order-page',
  templateUrl: './all-order-page.component.html',
  styleUrls: ['./all-order-page.component.css']
})
export class AllOrderPageComponent implements OnInit {
  allOrderData: any;
  allOrderDataArr: any = [];
  constructor(private http: HttpClient, private global: GlobalService) { }

  ngOnInit(): void {
    this.getAllOrderData();
  }

  getAllOrderData() {
    let url = this.global.basePath + "/getAllOrderData";
    this.http.get(url).subscribe(
      async (response) => {
        this.allOrderData = await response;
        console.log("all order data...........", this.allOrderDataArr);
       
        for(let i=0; i<this.allOrderData.data.length; i++) {
          this.allOrderData.data[i].createdAt = this.allOrderData.data[i].createdAt.split("T")[0];
        }
       
        this.allOrderDataArr = await this.allOrderData.data;        
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
