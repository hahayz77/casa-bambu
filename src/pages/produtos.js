import { StateContext } from '@/context/StateContext'
import { Nav } from '../components/Nav';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { AllProducts } from '@/components/AllProducts';
import { ProductCarousel } from '@/components/ProductCarousel';

export default function Index() {
    return (
        <>
            <StateContext>
                <Nav/>
                <Cart/>
                <AllProducts/>
                <h1 className="title" id="outrosprodutos">Produtos em Destaque</h1>
                <ProductCarousel/>
                <Footer/>
            </StateContext>
        </>
    )
}