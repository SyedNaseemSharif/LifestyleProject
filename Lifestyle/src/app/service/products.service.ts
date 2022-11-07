import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Products } from '../common/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private baseUrl='http://localhost:8080/productses';

  constructor(private httpClient:HttpClient) { }

  getProductList(theCategoryId:number): Observable<Products[]> {

    //Define the url for accessing the categorybyid
    const searchUrl=`${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response =>response._embedded.productses)
    
    );
  }
}

interface GetResponse{
_embedded: {
  productses: Products[];
}
}

