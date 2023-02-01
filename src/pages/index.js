import { StateContext } from '@/context/StateContext'
import { Hero } from '../components/Hero';
import { Nav } from '../components/Nav';
import { Carousel } from '../components/Carousel';
import { ProductCategories } from '@/components/ProductCategories';
import { Footer } from '@/components/Footer';

export default function Index() {
    return (
        <>
            <StateContext>
                <Nav/>
                <Carousel/>
                <ProductCategories/>
                {/* <Hero/> */}
                <Footer/>
            </StateContext>
        </>
    )
}