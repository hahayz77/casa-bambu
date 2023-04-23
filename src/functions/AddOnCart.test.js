const { AddOnCart } = require("./AddOnCart")

const quantity = 1;
const product = {_id: 1, name: 'Produto 1', price: 90.50, qty: 1}
const cartItems = [];
const totalQuantities = 0;
const totalPrice = 0;
const setCartItems = ()=>{}
const setTotalQuantities = ()=>{}
const setTotalPrice = ()=>{}

const result = 0;


describe('Return Test', ()=>{

    it('should return something', ()=>{
        expect(AddOnCart(product, quantity, cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice ,setTotalPrice)).toEqual(result);
    })
})