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
            <ProductCarousel/>        
            <Footer/>
        </>
    )
}