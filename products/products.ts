enum Availability {
  Available = 'Available',
  NotAvailable = 'Not Available'
}

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  available: Availability;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Watch',
    price: 400,
    color: 'Silver',
    available: Availability.Available,
    image: '/assets/products/watch.jpg'
  },
  {
    id: 2,
    name: 'Orchid Pot',
    price: 100,
    color: 'Pink',
    available: Availability.Available,
    image: '/assets/products/plant.jpg'
  },
  {
    id: 3,
    name: 'Apple iPhone 12',
    price: 5000,
    color: 'Silver',
    available: Availability.NotAvailable,
    image: '/assets/products/iphone12.png'
  },
  {
    id: 4,
    name: 'Burger',
    price: 65,
    color: 'None',
    available: Availability.Available,
    image: '/assets/products/burger.jpg'
  },
  {
    id: 5,
    name: 'Hisense Ultra HD Smart TV',
    price: 8000,
    color: 'Black',
    available: Availability.NotAvailable,
    image: '/assets/products/tv.png'
  }
];