import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { PlantComponent } from '../plant/plant.component';

@Component({
  selector: 'container-component',
  imports: [NavComponent, HeaderComponent, PlantComponent],
  standalone: true,
  templateUrl: `./container.component.html`,
  styleUrls: ['./container.component.css'],
})
export class Container implements OnInit {
  constructor() {}
  ngOnInit() {}
}
