import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { HomeComponent } from './home/home.component';
import { SellerSignupPageComponent } from './seller-signup-page/seller-signup-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerProductAddComponent } from './seller-product-add/seller-product-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateProductComponent } from './update-product/update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { CardComponent } from './card/card.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { MyOrderComponent } from './my-order/my-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SellerPageComponent,
    HomeComponent,
    SellerSignupPageComponent,
    ErrorPageComponent,
    SellerProductAddComponent,
    UpdateProductComponent,
    SearchProductComponent,
    ProductDetailsComponent,
    UserSignUpComponent,
    FooterBarComponent,
    CardComponent,
    BuyProductComponent,
    MyOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    FontAwesomeModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
