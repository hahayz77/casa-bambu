import { StateContext } from '@/context/StateContext'
import { Nav } from '../components/Nav';
import { Footer } from '@/components/Footer';
import { Products } from '@/components/AllProducts';
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