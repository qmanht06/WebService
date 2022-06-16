import * as shoes from './ImageShoe';
import Products from './Products';

const Cart = [
    {
        id: Products[0].id,
        name: Products[0].name,
        url: Products[0].imageURL,
        price: Products[0].price,
        quantity: 5,
    },
];

export default Cart;