import { Cart } from "@/components/Cart"
import { Footer } from "@/components/Footer"
import { Nav } from "@/components/Nav"
import { Product } from "@/components/Product"
import { ProductCarousel } from "@/components/ProductCarousel"
import { client } from "@/lib/SanityClient"

export default function SingleProduct({products}) {

    return (
        <>
            <Nav/>
            <Cart/>
            <Product products={products}/>
            <h1 className="title" id="outrosprodutos">Outros Produtos</h1>
            <ProductCarousel products={products}/>        
            <Footer/>
        </>
    )
}

export const getStaticPaths = async () => {
    const products = await client.fetch(`*[_type == "product"] {slug { current } }`);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }

export const getStaticProps = async ({params: {slug}}) => {
    const product = await client.fetch(`*[_type == "produto" && slug.current == '${slug}'][0]`);
    const products = await client.fetch(`*[_type == "products"]`);

    return {
      props: {products, product}
    }
  }