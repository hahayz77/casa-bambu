import { StateContext } from '@/context/StateContext'
import { Nav } from '../components/Nav';
import { Carousel } from '../components/Carousel';
import { ProductCategories } from '@/components/ProductCategories';
import { Footer } from '@/components/Footer';
import { Galery } from '@/components/Galery';

export default function Index() {
    return (
        <>
            <StateContext>
                <Nav/>
                <Carousel/>
                <ProductCategories/>
                <Galery/>
                <Footer/>
            </StateContext>
        </>
    )
}