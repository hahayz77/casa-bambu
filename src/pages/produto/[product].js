import { Cart } from "@/components/Cart"
import { Footer } from "@/components/Footer"
import { Nav } from "@/components/Nav"
import { Product } from "@/components/Product"
import { ProductCarousel } from "@/components/ProductCarousel"
import { useRouter } from "next/router"

export default function SingleProduct() {
    const router = useRouter()
    const { product } = router.query
    return (
        <>
            <Nav/>
            <Cart/>
            <Product name={product}/>
            <h1 className="title" id="outrosprodutos">Outros Produtos</h1>
            <ProductCarousel title={"Outros Produtos"}/>        
            <Footer/>
        </>
    )
}