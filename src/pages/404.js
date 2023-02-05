import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <Nav/>
            <Cart/>
            <div className="block mx-auto my-32 md:my-60">
                <h1 className="title">Página Não encontrada...</h1>
                <Link href="/"><button className="btn_cta bg-special" >Voltar ao início</button></Link>
            </div>
            <Footer/>
        </>
    )
}