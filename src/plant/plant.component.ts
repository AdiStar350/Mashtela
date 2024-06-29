import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'plant-component',
    imports: [FormsModule],
    standalone: true,
    templateUrl: `./plant.component.html`,
    styleUrls: ['./plant.component.css'],
})

export class PlantComponent implements OnInit {
    constructor() {}
    ngOnInit() {}

    total: number = 0;
    quantity: number = 0;
    price: number = 0;
    name: string = "";

    calcTotal() {
        this.total = this.quantity * this.price;
    }

    clean() {
        this.total = 0;
        this.quantity = 0;
        this.price = 0;
        this.name = "";
    }
}