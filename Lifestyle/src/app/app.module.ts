import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdminPageAddProductComponent } from './admin-page-add-product/admin-page-add-product.component';
import { AdminPageDeleteProductComponent } from './admin-page-delete-product/admin-page-delete-product.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartStatusComponent } from './cart-status/cart-status.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from './service/products.service';
import { CheckoutComponent } from './checkout/checkout.component';


const routes:Routes=[
  // {path:'about-us', component: AboutUsComponent},
  {path:'contact-us', component: ContactUsComponent},
  // {path:'help', component: HelpComponent},
  {path:'admin-page', component: AdminPageComponent},
  {path:'admin-page-add-product', component: AdminPageAddProductComponent},
  {path:'admin-page-delete-product', component: AdminPageDeleteProductComponent},
  {path:'admin-login', component: AdminLoginComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'cart-details', component: CartDetailsComponent},
{path:'category/:id', component: ProductListComponent},
{path:'category', component: ProductListComponent},
{path:'productses', component: ProductListComponent},
{path:'', redirectTo: '/productses', pathMatch:'full'},
{path:'**', redirectTo: '/productses', pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    ProductsCategoryComponent,
    ProductListComponent,
    ContactUsComponent,
    AdminPageAddProductComponent,
    AdminPageDeleteProductComponent,
    AdminPageComponent,
    AdminLoginComponent,
    CartDetailsComponent,
    CartStatusComponent,
    ProductDetailsComponent,
    CheckoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
