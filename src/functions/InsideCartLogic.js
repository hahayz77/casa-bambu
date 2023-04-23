export const InsideCartLogic = (product, method, cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice, setTotalPrice) => {
    
    let setItem = {cartItems: [], totalPrice: 0, totalQuantities: 0};
    totalPrice = 0;
    const arrayOfOtherProducts = cartItems.filter((item) => item._id !== product._id);
    const index = cartItems.findIndex((e)=> e._id === product._id);

    if(method === 'dec'){
        cartItems[index].qty -= 1;
        totalQuantities = totalQuantities - 1;
        setItem.totalQuantities = totalQuantities;
        setTotalQuantities(totalQuantities);

        // toast.error(`${product.name} Removed! `);
    }
    else if(method === 'inc'){ 																							// IMPLEMENTAR LIMITE DE PRODUTOS
        totalQuantities = totalQuantities + 1;
        setItem.totalQuantities = totalQuantities;
        setTotalQuantities(totalQuantities);
        cartItems[index].qty += 1;
        // toast.success(`1un of ${product.name} added in Cart! `);

    }
    else if(method === 'rem'){
        totalQuantities = totalQuantities - product.qty;
        setItem.totalQuantities = totalQuantities;
        setTotalQuantities(totalQuantities);
        cartItems[index].qty = 0;
        // toast.error(`All ${product.name} Removed!`);
    }
    

    setItem.cartItems = cartItems;
    setCartItems(cartItems);
    CalcAndRemove();
    localStorage.setItem('cart', JSON.stringify(setItem));
    
    function CalcAndRemove(){
        for (let i in cartItems){
            totalPrice += Number(parseFloat(cartItems[i].price * ( 1- ( cartItems[i].discount ) / 100)).toFixed(2) * cartItems[i].qty);
        }
        
        setTotalPrice(Number(parseFloat(totalPrice).toFixed(2)));
        setItem.totalPrice = Number(parseFloat(totalPrice).toFixed(2));
        RemoveComponent();
    }
    
    function RemoveComponent(){
        if(method === 'dec' && product.qty === 0){
            setCartItems(arrayOfOtherProducts);
            setItem.cartItems = arrayOfOtherProducts;
        }
        if(method === 'rem'){
            setCartItems(arrayOfOtherProducts);
            setItem.cartItems = arrayOfOtherProducts;
        }
    }
}

