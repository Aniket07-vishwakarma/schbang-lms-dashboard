import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllOrderPageComponent } from './all-order-page/all-order-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyCartPageComponent } from './my-cart-page/my-cart-page.component';

const routes: Routes = [
  {path: "", component: LoginPageComponent},
  {path: "Home", component: HomePageComponent},
  // {path: "checkout", component: CheckoutPageComponent},
  {path: "my-cart", component: MyCartPageComponent},
  {path: "admin/allOrders", component: AllOrderPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
