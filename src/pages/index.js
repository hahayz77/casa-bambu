import { Nav } from '../components/Nav';
import { Carousel } from '../components/Carousel';
import { ProductCategories } from '@/components/ProductCategories';
import { Footer } from '@/components/Footer';
import { Galery } from '@/components/Galery';
import { Cart } from '@/components/Cart';
import { Steps } from '@/components/Steps';
import { client } from '@/lib/SanityClient'


export default function Index({banners, products, galery}) {
    return (
        <>
            <Nav/>
            <Cart/>
            <Carousel banners={banners}/>
            <ProductCategories products={products}/>
            <Steps/>
            <Galery galery={galery}/>
            <Footer/>
        </>
    )
}
  
  export async function getStaticProps() {
    const banners = await client.fetch(`*[_type == "banners"]`);  
    const products = await client.fetch(`*[_type == "products"]`);
    const galery = await client.fetch(`*[_type == "galery"]`);

    return {
      props: {
        banners, products, galery
      }
    };
  }