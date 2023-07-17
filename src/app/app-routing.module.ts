import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { SellerSignupPageComponent } from './seller-signup-page/seller-signup-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { SellerProductAddComponent } from './seller-product-add/seller-product-add.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'seller-home',
    component: SellerPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'seller-singup-page',
    component: SellerSignupPageComponent
  },
  {
    path: 'seller-product-add',
    component: SellerProductAddComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'seller-update-product/:id',
    component: UpdateProductComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'search-product/:product',
    component: SearchProductComponent
  },
  {
    path:'product-details/:details',
    component:ProductDetailsComponent
  },
  {
    path:'user',
    component: UserSignUpComponent
  },
  {
    path:'my-card',
    component: CardComponent
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
