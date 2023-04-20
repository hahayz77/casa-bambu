function NewAddOnCart(cartItems, productSelected, quantity) {

    const itemIndex = cartItems.findIndex( e => e.id === productSelected.id );
    if(itemIndex >= 0) {
        productSelected.qty = quantity + cartItems[itemIndex].qty;
        cartItems[itemIndex] = productSelected;
        return cartItems;
    }

    productSelected.qty = quantity;
    return [...cartItems, productSelected];
}

module.exports = NewAddOnCart;