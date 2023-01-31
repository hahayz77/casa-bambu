import { StateContext } from '@/context/StateContext'
import { Hero } from '../components/Hero';
import { Nav } from '../components/Nav';
import { Carousel } from '../components/Carousel';

export default function Index() {
    return (
        <>
            <StateContext>
                <Nav />
                <Carousel />
                <Hero />
            </StateContext>
        </>
    )
}