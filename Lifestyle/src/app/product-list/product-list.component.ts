import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../common/cart-item';
import { Products } from '../common/products';
import { CartService } from '../service/cart.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  productses: Products[]=[];
  currentCategoryId: number=1;
  constructor(private productService: ProductsService, private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.listProducts();
    })
    
  }
  listProducts() {
    //check if id param is available
    const hasCategoryId=this.route.snapshot.paramMap.has('id');
    if(hasCategoryId){
//read the string and convert to a number
this.currentCategoryId= +this.route.snapshot.paramMap.get('id')!;

    } else{
      //default category id to one
      this.currentCategoryId=1;
    }
   this.productService.getProductList(this.currentCategoryId).subscribe(
    data=>{
      this.productses=data;
    }
   )
  }

  addToCart(theProduct: Products) {
    console.log(`adding to the cart : ${theProduct.productname}, ${theProduct.productprice}`);
    
    const theCartItem =new CartItem(theProduct);
    this.cartService.addToCart(theCartItem);

    }
}
