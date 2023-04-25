import { toast } from "react-hot-toast";

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
        toast.error(`${product.name} foi removido do carrinho! `);
    }
    else if(method === 'inc'){ 			
        let maxQtyVerify = cartItems[index].qty + 1;
        if( maxQtyVerify <= product.max_qty || product.max_qty === 0) {													// PRODUCT LIMIT
            totalQuantities = totalQuantities + 1;
            cartItems[index].qty += 1;
            setItem.totalQuantities = totalQuantities;
            setTotalQuantities(totalQuantities);
            toast.success(`${product.name} foi adicionado ao carrinho!`);
        } else{
            toast.error(`${product.name} tem o limite de ${product.max_qty} ${product.max_qty === 1 ? 'item' : 'itens'} por pedido.`);
            return;
        }

    }
    else if(method === 'rem'){
        totalQuantities = totalQuantities - product.qty;
        setItem.totalQuantities = totalQuantities;
        setTotalQuantities(totalQuantities);
        cartItems[index].qty = 0;
        toast.error(`Todas as unidades de ${product.name} foram removidas do carrinho! `);
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

