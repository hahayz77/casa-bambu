import { StateContext } from '@/context/StateContext'
import { Nav } from '../components/Nav';
import { Carousel } from '../components/Carousel';
import { ProductCategories } from '@/components/ProductCategories';
import { Footer } from '@/components/Footer';
import { Galery } from '@/components/Galery';
import { Cart } from '@/components/Cart';
import { Steps } from '@/components/Steps';

export default function Index() {
    return (
        <>
            <Nav/>
            <Cart/>
            <Carousel/>
            <ProductCategories/>
            <Steps/>
            <Galery/>
            <Footer/>
        </>
    )
}