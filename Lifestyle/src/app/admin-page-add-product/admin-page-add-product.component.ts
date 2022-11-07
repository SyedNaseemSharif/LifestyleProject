import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-page-add-product',
  templateUrl: './admin-page-add-product.component.html',
  styleUrls: ['./admin-page-add-product.component.css']
})
export class AdminPageAddProductComponent implements OnInit {

  addProductFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.addProductFormGroup=this.formBuilder.group({
      addproduct:this.formBuilder.group({
        productname: [''],
        imageURL: [''],
        productprice: [''],
        category:
        {
          categoryname:['']
        }

      })
    });
  }

  addProduct(){
    console.log("Handling the Submit Button");
    console.log(this.addProductFormGroup.get('addproduct').value);
  }
}
