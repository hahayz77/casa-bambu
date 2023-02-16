import { StateContext } from '@/context/StateContext'
import { Nav } from '../components/Nav';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { AllProducts } from '@/components/AllProducts';
import { ProductCarousel } from '@/components/ProductCarousel';
import { client } from '@/lib/SanityClient';

export default function Index({products}) {
    return (
        <>
            <StateContext>
                <Nav/>
                <Cart/>
                <AllProducts products={products}/>
                <h1 className="title" id="outrosprodutos">Produtos em Destaque</h1>
                <ProductCarousel products={products}/>
                <Footer/>
            </StateContext>
        </>
    )
}

export async function getStaticProps() { 
    const products = await client.fetch(`*[_type == "products"]`);

    return {
      props: {
        products
      }
    };
  }