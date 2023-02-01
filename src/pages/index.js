import { StateContext } from '@/context/StateContext'
import { Hero } from '../components/Hero';
import { Nav } from '../components/Nav';
import { Carousel } from '../components/Carousel';
import { ProductCategories } from '@/components/ProductCategories';
import { Footer } from '@/components/Footer';
import { Featured } from '@/components/Featured';

export default function Index() {
    return (
        <>
            <StateContext>
                <Nav/>
                <Carousel/>
                <ProductCategories/>
                <Featured/>
                <Footer/>
            </StateContext>
        </>
    )
}