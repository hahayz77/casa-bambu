export const AddOnCart = (product, quantity, cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice ,setTotalPrice, finalPrice) => {
    let setItem = {cartItems: [], totalPrice: 0, totalQuantities: 0};
    finalPrice = Number(parseFloat( product.price * ( 1- ( product.discount ) / 100) ).toFixed(2));
    const checkProductInCart = cartItems?.find((item) => item._id === product._id);
    const otherProductsInCart = cartItems?.find((item) => item._id !== product._id);

    if(checkProductInCart !== undefined && otherProductsInCart === undefined){      	// CASE 1 - Just the Input Item in the cart
        cartItems[0].qty = cartItems[0].qty + quantity;
        setItem.cartItems = cartItems;
        setCartItems(cartItems);
        
    }
    else if(checkProductInCart !== undefined && otherProductsInCart !== undefined){  	// CASE 2 - Input item and other items in cart
        const arrayOfOtherProducts = cartItems.filter((item) => item._id !== product._id);
        checkProductInCart.qty = checkProductInCart.qty + quantity;
        setItem.cartItems = [...arrayOfOtherProducts, checkProductInCart];
        setCartItems([...arrayOfOtherProducts, checkProductInCart]);

    }
    else{                                                                               // CASE 3 - Input Item is'n in the Cart
        product.qty = quantity;
        setItem.cartItems = [...cartItems, product];
        setCartItems([...cartItems, product]);

    };
    totalQuantities = totalQuantities + quantity
    setItem.totalQuantities = totalQuantities;
    setItem.totalPrice = Number(parseFloat(totalPrice + finalPrice * quantity).toFixed(2));
    setTotalQuantities(totalQuantities);
    setTotalPrice(Number(parseFloat(totalPrice + finalPrice * quantity).toFixed(2)));
    localStorage.setItem('cart', JSON.stringify(setItem));
    return {cartItems, totalPrice, totalQuantities}
    // toast.success(`${qty}un ${product.name} was added in cart.`);
}