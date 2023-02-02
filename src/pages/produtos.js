import { StateContext } from '@/context/StateContext'
import { Nav } from '../components/Nav';
import { ProductCategories } from '@/components/ProductCategories';
import { Footer } from '@/components/Footer';
import { Products } from '@/components/Products';

export default function Index() {
    return (
        <>
            <StateContext>
                <Nav/>
                <Products/>
                <Footer/>
            </StateContext>
        </>
    )
}