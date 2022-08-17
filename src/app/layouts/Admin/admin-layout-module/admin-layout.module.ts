import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { FooterComponent } from 'src/app/Core/footer/footer.component';
import { NavbarComponent } from 'src/app/Core/navbar/navbar.component';
import { AddNewProductComponent } from 'src/app/Pages/products/add-new-product/add-new-product.component';
import { ProductDetailsComponent } from 'src/app/Pages/products/product-details/product-details.component';
import { ProductsComponent } from 'src/app/Pages/products/products.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AddNewProductComponent,
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
