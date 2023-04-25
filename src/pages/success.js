import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import { useEffect } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Success() {

    const { setCartItems, setTotalQuantities, setTotalPrice } = useStateContext();
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify({cartItems: [], totalPrice: 0, totalQuantities: 0}));
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    },[])
    
    const email = 'contato@contato.com'

    return (
        <>
            <Nav/>
            <Cart/>
            <div id="success">
                <h1 className="title">Tudo certo!</h1>
                <Image src='/successbag.svg' width='300' height='300' />
                <p className="!text-xl md:!text-2xl !text-green">Sua compra foi efetuada com sucesso!</p>
                <p>Agora é com a gente. Vamos preparar o seu pedido com carinho.</p>
                <p>Você também pode confirmar esta compra no seu e-mail.</p>
                <p>Se você tiver alguma outra dúvida é só falar...</p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
                <div className="success_icons">
                    <FaWhatsapp/> 
                    <FaInstagram/> 
                    <FaFacebook/>
                </div>
            </div>
            <Footer/>
        </>
    )
}