import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    imports: [CommonModule],
    selector: 'products-component',
    standalone: true,
    templateUrl: `./products.component.html`,
    styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}

    products = [
        {
            code: 386,
            name: "אדנית",
            price: 25,
            color: "אפור, חום",
            image: "https://mashtela-urbanit.co.il/images/stories/virtuemart/product/266.png"
        },
        {
            code: 129,
            name: "קולאוס",
            price: 18,
            color: "שילוב של ירוק וורוד",
            image: "https://mashtela-urbanit.co.il/images/stories/virtuemart/product/449.png"
        },
        {
            code: 946,
            name: "דקל חמדוריאה",
            price: 149,
            color: "ירוק",
            image: "https://mashtela-urbanit.co.il/images/stories/virtuemart/product/%D7%97%D7%9E%D7%93%D7%90%D7%A8%D7%99%D7%94.jpg"
        },
        {
            code: 193,
            name: "סחלב",
            price: 125,
            color: "ורוד, לבן",
            image: "https://mashtela-urbanit.co.il/images/stories/virtuemart/product/287.png"
        },
        {
            code: 843,
            name: "אנטוריום",
            price: 55,
            color: "אדום",
            image: "https://mashtela-urbanit.co.il/images/stories/virtuemart/product/antorium_red.jpg"
        }
    ];
}