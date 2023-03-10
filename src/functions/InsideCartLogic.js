export function InsideCartLogic(product, method, cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice, setTotalPrice, finalPrice, calcTotalPrice) {

    calcTotalPrice = 0;
    finalPrice = Number(parseFloat( product.price * ( 1- ( product.discount ) / 100) ).toFixed(2));
    const arrayOfOtherProducts = cartItems.filter((item) => item._id !== product._id);
    const index = cartItems.findIndex((e)=> e._id === product._id);

    if(method === 'dec'){
        if(product.qty > 1){
            setTotalPrice((result) => result =  Number(parseFloat(totalPrice).toFixed(2)) - finalPrice);
            cartItems[index].qty -= 1;

        }else{
            setTotalPrice((result) => result = Number(parseFloat(totalPrice).toFixed(2)) - finalPrice * product.qty);
            setCartItems(arrayOfOtherProducts);
        }
        // toast.error(`${product.name} Removed! `);
        setTotalQuantities(() => totalQuantities - 1);
    }
    else if(method === 'inc'){ 																							// IMPLEMENTAR LIMITE DE PRODUTOS
        setTotalQuantities(() => totalQuantities + 1);
        setTotalPrice((result) => result = Number(parseFloat(totalPrice).toFixed(2)) + Number(parseFloat(finalPrice).toFixed(2)));
        cartItems[index].qty += 1;
        setCartItems(cartItems);
        // toast.success(`1un of ${product.name} added in Cart! `);

    }
    else if(method === 'rem'){
        setTotalQuantities(() => totalQuantities - product.qty);
        setTotalPrice(() => totalPrice - finalPrice * product.qty);
        setCartItems(arrayOfOtherProducts);
        // toast.error(`All ${product.name} Removed!`);
    }
}