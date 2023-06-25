import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerPageComponent } from './seller-page/seller-page.component';
import { SellerSignupPageComponent } from './seller-signup-page/seller-signup-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller-home',
    component:SellerPageComponent,
    pathMatch:'full',
    canActivate:[AuthGuardGuard]
  },
  {
    path:'seller-singup-page',
    component:SellerSignupPageComponent
  },
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    redirectTo:'404'
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
