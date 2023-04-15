export async function InsideCartLogic(product, method, cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice, setTotalPrice) {

    totalPrice = 0;
    const arrayOfOtherProducts = cartItems.filter((item) => item._id !== product._id);
    const index = cartItems.findIndex((e)=> e._id === product._id);

    if(method === 'dec'){
        cartItems[index].qty -= 1;
         totalQuantities = totalQuantities - 1
        setTotalQuantities(totalQuantities);
        localStorage.setItem('totalQuantities', totalQuantities);

        // toast.error(`${product.name} Removed! `);
    }
    else if(method === 'inc'){ 																							// IMPLEMENTAR LIMITE DE PRODUTOS
        totalQuantities = totalQuantities + 1;
        setTotalQuantities(totalQuantities);
        localStorage.setItem('totalQuantities', totalQuantities);
        cartItems[index].qty += 1;
        setCartItems(cartItems);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        // toast.success(`1un of ${product.name} added in Cart! `);

    }
    else if(method === 'rem'){
        totalQuantities = totalQuantities - product.qty;
        setTotalQuantities(totalQuantities);
        localStorage.setItem('totalQuantities', totalQuantities);
        cartItems[index].qty = 0;
        // toast.error(`All ${product.name} Removed!`);
    }
    
    CalcAndRemove();
    
    function CalcAndRemove(){
        for (let i in cartItems){
            totalPrice += Number(parseFloat(cartItems[i].price * ( 1- ( cartItems[i].discount ) / 100)).toFixed(2) * cartItems[i].qty);
        }
        
        setTotalPrice(Number(parseFloat(totalPrice).toFixed(2)));
        localStorage.setItem('totalPrice', Number(parseFloat(totalPrice).toFixed(2)).toString());
        RemoveComponent();
    }
    
    function RemoveComponent(){
        if(method === 'dec' && product.qty === 0){
            setCartItems(arrayOfOtherProducts);
            localStorage.setItem('cartItems', JSON.stringify(arrayOfOtherProducts));
        }
        if(method === 'rem'){
            setCartItems(arrayOfOtherProducts);
            localStorage.setItem('cartItems', JSON.stringify(arrayOfOtherProducts));
        }
    }
}

