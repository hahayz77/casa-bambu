export async function InsideCartLogic(product, method, cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice, setTotalPrice, finalPrice) {

    totalPrice = 0;
    const arrayOfOtherProducts = cartItems.filter((item) => item._id !== product._id);
    const index = cartItems.findIndex((e)=> e._id === product._id);

    if(method === 'dec'){
        if(product.qty > 1){
            cartItems[index].qty -= 1;

        }else{
            setCartItems(arrayOfOtherProducts);
        }
        // toast.error(`${product.name} Removed! `);
        setTotalQuantities(totalQuantities - 1);
    }
    else if(method === 'inc'){ 																							// IMPLEMENTAR LIMITE DE PRODUTOS
        setTotalQuantities(totalQuantities + 1);
        cartItems[index].qty += 1;
        setCartItems(cartItems);
        // toast.success(`1un of ${product.name} added in Cart! `);

    }
    else if(method === 'rem'){
        setTotalQuantities(totalQuantities - product.qty);
        setCartItems(arrayOfOtherProducts);
        // toast.error(`All ${product.name} Removed!`);
    }
    
    
    for (let i in cartItems){
        totalPrice += Number(parseFloat(cartItems[i].price * ( 1- ( cartItems[i].discount ) / 100)).toFixed(2) * cartItems[i].qty);
    }
    
    setTotalPrice(Number(parseFloat(totalPrice).toFixed(2)));
    console.log("-----------------------------")
    console.log(product, method, cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice, setTotalPrice, finalPrice);
    console.log("-----------------------------")
}