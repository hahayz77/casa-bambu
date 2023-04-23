const NewAddOnCart = require("./NewAddOnCart");

const cart = [
    {item: "item1", qty: 1, id: 1, price: 57.45},
    {item: "item2", qty: 2, id: 2, price: 24.90}
];

const product = {item: "item3", qty: 1, id: 3, price: 23.99};
const quantity = 3;

const emptyCart = [];

const newCart1 = [
    {item: "item1", qty: 1,id: 1, price: 57.45},
    {item: "item2", qty: 2, id: 2, price: 24.90},
    {item: "item3", qty: quantity, id: 3, price: 23.99}
]

const newCart2 = [
    {item: "item1", qty: (quantity+cart[0].qty), id: 1, price: 57.45},
    {item: "item2", qty: 2, id: 2, price: 24.9}
]

describe('Teste de novo Carrinho',()=>{

    it('Initial test', () => {
        expect(NewAddOnCart(cart, product, quantity)).toStrictEqual(newCart1);
    });

    it('STATE 1 - have no cart items', ()=>{
        expect(NewAddOnCart(emptyCart, product, quantity)).toStrictEqual([product]);
    })

    it('STATE 2 - Already have this item on cart', ()=>{
        expect(NewAddOnCart(cart, cart[0], quantity)).toStrictEqual(newCart2);
    })

})