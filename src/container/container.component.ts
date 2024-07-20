import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { PlantComponent } from '../plant/plant.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'container-component',
  imports: [NavComponent, HeaderComponent, PlantComponent, ProductsComponent],
  standalone: true,
  templateUrl: `./container.component.html`,
  styleUrls: ['./container.component.css'],
})
export class Container implements OnInit {
  constructor() {}
  ngOnInit() {}
}
