import { StateContext } from '@/context/StateContext'
import { Hero } from '../components/Hero'

export default function Index() {
    return (
        <>
            <StateContext>
                <Hero />
            </StateContext>
        </>
    )
}