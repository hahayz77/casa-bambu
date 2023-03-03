export const AddOnCart = (product, quantity, cartItems, setCartItems, totalQuantities, setTotalQuantities, totalPrice ,setTotalPrice) => {

    const checkProductInCart = cartItems?.find((item) => item._id === product._id);
    const otherProductsInCart = cartItems?.find((item) => item._id !== product._id);

    if(checkProductInCart !== undefined && otherProductsInCart === undefined){      	// CASE 1 - Just the Input Item in the cart
        cartItems[0].qty = cartItems[0].qty + quantity;
        setCartItems(cartItems);
        
    }
    else if(checkProductInCart !== undefined && otherProductsInCart !== undefined){  	// CASE 2 - Input item and other items in cart
        const arrayOfOtherProducts = cartItems.filter((item) => item._id !== product._id);
        checkProductInCart.qty = checkProductInCart.qty + quantity;
        setCartItems([...arrayOfOtherProducts, checkProductInCart]);

    }
    else{                                                                               // CASE 3 - Input Item is'n in the Cart
        product.qty = quantity;
        setCartItems([...cartItems, product]);

    }
    setTotalQuantities(()=>totalQuantities+quantity);
    if(product.discount){
        setTotalPrice(() => totalPrice + ( product.price * (1-(product.discount)/100)).toFixed(2) * quantity);
    } else{
        setTotalPrice(() => totalPrice + product.price * quantity);
    }
    // toast.success(`${qty}un ${product.name} was added in cart.`);
    // setQty(1);
}