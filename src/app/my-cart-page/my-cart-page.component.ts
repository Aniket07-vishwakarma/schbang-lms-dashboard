import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global';
import { HttpClient } from '@angular/common/http';
import {MessageService} from 'primeng/api';
// import { HomePageComponent } from '../home-page/home-page.component';


@Component({
  selector: 'app-my-cart-page',
  templateUrl: './my-cart-page.component.html',
  styleUrls: ['./my-cart-page.component.css'],
  providers: [MessageService]
})
export class MyCartPageComponent implements OnInit {
  myCartFruits: any;
  userCartData: any;
  mobileNumber: any;
  shippingAdd: any;
  pincode: any;
  totalCost: number = 0;
  totalNumberOfProducts: any;
  displayCheckoutForm: boolean = false;
  isOrderCompleted: boolean = false;
  constructor(public global: GlobalService, private http: HttpClient, private messageService: MessageService) { }

  ngOnInit(): void {    
    this.myCartData();
  }

  myCartData() {
    let userId = localStorage.getItem("userId");
    let url = this.global.basePath + "/getAllCartData?userId=" + userId;
    this.http.get(url).subscribe(
      (response) => {
        this.userCartData = response;
        this.myCartFruits = this.userCartData.data[0].cartDetailsArr;

        if(this.myCartFruits.length > 0) {
          this.isOrderCompleted = true;
        }
        console.log("user cart data", this.userCartData);
        console.log("my car data", this.myCartFruits);

      },
      (error) => {
        console.log(error);
      }
    )
  }

  removeDataFunc(event: any) {
    let userId = localStorage.getItem("userId");
    let docId = event.target.name;
    let passDataToRemove = {
      "userId": userId,
      "id": docId
    }

    let url = this.global.basePath + "/updateCartDataToRemove";

    console.log(docId);

    this.http.post(url, passDataToRemove).subscribe(
      (response) => {
        console.log("Product has been removed", response);
        this.myCartData()
      },
      (error) => {
        console.log(error);
      }
    )
  }

  checkoutNow() {
    this.displayCheckoutForm = true;
    this.totalNumberOfProducts = this.myCartFruits.length;
    this.totalCost = 0;

    for(let i=0; i<this.myCartFruits.length; i++) {
        this.totalCost =  this.totalCost +  parseInt(this.myCartFruits[i].price);
    }
    console.log(this.totalCost, this.totalNumberOfProducts);
  }

  submitOrder() {
    if (this.mobileNumber && this.shippingAdd && this.pincode) {
      this.displayCheckoutForm = false
      console.log(this.mobileNumber, this.shippingAdd, this.pincode);
      
      let orderedProductData = {
        userName: localStorage.getItem("userName"),
        emailAdd: localStorage.getItem("emailAdd"),
        userId: localStorage.getItem("userId"),
        mobileNum: this.mobileNumber,
        shippingAdd: this.shippingAdd,
        pincode: this.pincode,
        checkOutProductDeails: this.myCartFruits,
        totaNumberOfProducts: this.totalNumberOfProducts,
        totalOrderCost: this.totalCost,
    }


    let url = this.global.basePath + "/saveOrderData";

    this.http.post(url, orderedProductData).subscribe(
      (response) => {
        console.log("Order has been completed.", response);
        this.messageService.add({severity:'success', summary: 'Congratulations!!', detail: 'Your order has been completed'});
        this.isOrderCompleted = false;
        this.removeCheckoutData();
      },
      (error) => {
        console.log(error);
      }
    )

    } else {
      this.messageService.add({severity:'warn', summary: 'Fill Details', detail: 'Please fill the all the details.'});
    }
  }

  removeCheckoutData() {
    let userId = localStorage.getItem("userId");
    let url = this.global.basePath + "/removeCartData?userId=" + userId;
    this.http.get(url).subscribe(
      (response) => {
        console.log("User cart data deleted");
      },
      (error) => {
        console.log(error);
      }
    )
  }
  // removeCartData

}
