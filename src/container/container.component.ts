import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'container-component',
  imports: [NavComponent, HeaderComponent],
  standalone: true,
  templateUrl: `./container.component.html`,
  styleUrls: ['./container.component.css'],
})
export class Container implements OnInit {
  constructor() {}
  ngOnInit() {}
}
