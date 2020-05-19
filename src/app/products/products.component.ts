import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getAllProducts().subscribe(
      data => this.products = data
    );
  }
  buyProduct(product) {
    this.productService.buyProduct(product.product_id, product.boughtQuantity).subscribe(
      data => {
        this.getProducts();
      }
    );
  }

}
