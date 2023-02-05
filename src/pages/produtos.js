import { StateContext } from '@/context/StateContext'
import { Nav } from '../components/Nav';
import { ProductCategories } from '@/components/ProductCategories';
import { Footer } from '@/components/Footer';
import { Products } from '@/components/Products';
import { Cart } from '@/components/Cart';

export default function Index() {
    return (
        <>
            <StateContext>
                <Nav/>
                <Cart/>
                <Products/>
                <Footer/>
            </StateContext>
        </>
    )
}