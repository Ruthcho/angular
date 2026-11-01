import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsList } from './products-list/products-list';
import type { Product } from './products-list/products-list';

@Component({
  imports: [RouterOutlet, ProductsList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  Electrical_Appliances: Product[] = [{'name':'Refrigerator',
    'brand':'Samsung',
    'price':10000,
    'description':'Large refrigerator with frost-free technology',
    'Discount_percentages':10},
  {'name':'Washing Machine',
    'brand':'LG',
    'price':150,
    'description':'High-efficiency washing machine',
    'Discount_percentages':15
  },
{'name':'Microwave Oven',
    'brand':'Panasonic',
    'price':8000,
    'description':'Compact microwave oven with multiple cooking modes',
    'Discount_percentages':5
  },
{'name':'Air Conditioner',
  'brand':'Daikin',
  'price':25000,
  'description':'Energy-efficient air conditioner with inverter technology',
  'Discount_percentages':20
},
{'name':'Vacuum Cleaner',
  'brand':'Dyson',
  'price':12000,
  'description':'Powerful vacuum cleaner with advanced filtration system',
  'Discount_percentages':12
}]
}
