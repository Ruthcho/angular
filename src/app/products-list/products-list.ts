import { Component, input } from '@angular/core';

export interface Product {
  name: string;
  brand: string;
  price: number;
  description: string;
  Discount_percentages: number;
}

@Component({
  imports: [],
  selector: 'app-products-list',
  styleUrl: './products-list.css',
  templateUrl: './products-list.html',
})
export class ProductsList {
  // הקלט שהאב מעביר לקומפוננטה
  readonly products = input.required<Product[]>();
}
