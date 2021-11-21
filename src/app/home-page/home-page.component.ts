import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  fruitObj: any;
  fruitIndex: any;
  cartProducts: any = [];
  userPastCartData: any;
  isFirstDataAdded: boolean = false;
  constructor(private global: GlobalService, private http: HttpClient) { }

  ngOnInit(): void {
    this.fruitObj = [
      {
        "details": "Fresho Apple - 4 pcs (Approx. 500g- 650g)",
        "price": "100",
        "imgUrl": "https://www.gardeningknowhow.com/wp-content/uploads/2018/05/Jonagold.jpg"
      }, {
        "details": "Fresho Orange - Imported, 4 pcs",
        "price": "146",
        "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"
      }, {
        "details": "Fresho Pineapple, 1 pc 800 g -1000 g",
        "price": "48",
        "imgUrl": "https://5.imimg.com/data5/CT/SH/MY-12687905/best-quality-indian-fresh-pineapple-500x500.jpg"
      }, {
        "details": "Fresho Watermelon - Small, 1 pc 1.5 - 2.5 kg",
        "price": "90",
        "imgUrl": "https://static3.ezykolhapur.com/wp-content/uploads/2020/09/FRT32.jpg"
      }, {
        "details": "Fresho Pomegranate, 4 pcs (approx. 800g)",
        "price": "120",
        "imgUrl": "https://www.news-medical.net/image.axd?picture=2020%2F12%2Fshutterstock_1291478515.jpg"
      }, {
        "details": "Fresho Banana - Yelakki, 1 kg",
        "price": "51",
        "imgUrl": "https://5.imimg.com/data5/JJ/ZT/OM/GLADMIN-38128481/81mx4y9v3cl-sl1500--500x500.jpg"
      }, {
        "details": "Fresho Guava - Organically Grown, 500 g",
        "price": "28",
        "imgUrl": "https://content.bakhaberkissan.com/images/guava_ur_1.jpg"
      }, {
        "details": "Fresho Blueberry, 125 g",
        "price": "320",
        "imgUrl": "https://www.bigbasket.com/media/uploads/p/xxl/30009286_7-fresho-blueberry.jpg"
      }, {
        "details": "Fresho Pear - Naspathi, Indian, 500 g",
        "price": "88",
        "imgUrl": "https://m.media-amazon.com/images/I/41imBb83fLL.jpg"
      }
    ]

    this.myPastCartData();
  }

  myPastCartData() {
    let userId = localStorage.getItem("userId");
    let url = this.global.basePath + "/getAllCartData?userId=" + userId;
    this.http.get(url).subscribe(
      (response) => {
        this.userPastCartData = response;
        console.log("user past data", this.userPastCartData);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  addToCartFunc(event: any) {
    let indexOfFruit = event.target.name;
    // this.cartProducts.push(this.fruitObj[indexOfFruit]);
    this.cartProducts = [
      this.fruitObj[indexOfFruit]
    ]

    console.log(this.cartProducts);
    // this.globalService.data = this.cartProducts;

    let dataToPost = {
      "userName": localStorage.getItem("userName"),
      "emailAdd": localStorage.getItem("emailAdd"),
      "userId": localStorage.getItem("userId"),
      "cartDetailsArr": this.cartProducts
    }

    if ((this.userPastCartData.data.length > 0) || this.isFirstDataAdded) {
      let url = this.global.basePath + "/updateCartData";
      console.log(url)
      this.http.post(url, dataToPost).subscribe(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error);
        }
      )
    } else {
      this.isFirstDataAdded = true;
      let url = this.global.basePath + "/saveCartData";
      console.log(url)
      this.http.post(url, dataToPost).subscribe(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error);
        }
      )
    }
    // console.log(dataToPost);


  }



}
