import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  // cartItems;
  isMenuCollapsed = true;
  constructor(  ) {
  }

  ngOnInit() {
    // this.cartItems = this.cart.cartProductsNumber;
    // console.log(this.cartItems);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck() {
    // this.cartItems = this.cart.cartProductsNumber;
    // console.log( this.cart.cartProducts );
    // console.log( this.cart.cartProductsNumber );
  }
  logout() {
    // this.cart.emptyCart();
    // this.auth.signOut();
  }
}
