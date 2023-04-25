import { Cart } from "@/components/Cart";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { client } from '@/lib/SanityClient';
import { Faq } from "@/components/FAQ";


export default function Sobre({faq}) {
    return (
        <>
            <Nav/>
            <About/>
            <Faq faq={faq}/>
            <Cart/>
            <Footer/>
        </>
    )
}


export async function getStaticProps() {
    const faq = await client.fetch(`*[_type == "faq"]`);  

    return {
        props: {
            faq,
        }
    };
  }