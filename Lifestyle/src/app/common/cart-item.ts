import {Products} from  './products';

export class CartItem {
    id: number;
    productname : string;
    productprice: number;
    imageURL : string;
    quantity:number;

    constructor(products: Products){
        this.id=products.id;
        this.productname=products.productname;
        this.imageURL=products.imageURL;
        this.productprice=products.productprice;
        this.quantity=1;
    }
}
