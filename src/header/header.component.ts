import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  standalone: true,
  templateUrl: `./header.component.html`,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  name: string = "שושן צחור - משתלה";

  getSecName() : string { 
    return "המשתלה שלכם בצפון";
  }

  picAndBorderHeight: number = 250;
  picWidth: number = 320;
}
