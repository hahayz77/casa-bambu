import { Cart } from "@/components/Cart"
import { Footer } from "@/components/Footer"
import { Nav } from "@/components/Nav"
import { Product } from "@/components/Product"
import { ProductCarousel } from "@/components/ProductCarousel"
import { client } from "@/lib/SanityClient"
import { useRouter } from "next/router"

export default function SingleProduct({products}) {
    const router = useRouter();
    const { product } = router.query;

    return (
        <>
            <Nav/>
            <Cart/>
            {/* <Product product={products}/> */}
            <h1 className="title" id="outrosprodutos">Outros Produtos</h1>
            <ProductCarousel products={products}/>        
            <Footer/>
        </>
    )
}

// export const getStaticPaths = async () => {
//     const query = `*[_type == "product"] {
//       slug {
//         current
//       }
//     }
//     `;
//     const products = await client.fetch(query);
  
//     const paths = products.map((product) => ({
//       params: { 
//         slug: product.slug.current
//       }
//     }));
  
//     return {
//       paths,
//       fallback: 'blocking'
//     }
//   }

// export const getStaticProps = async ({params: {slug}}) => {
//     const product = await client.fetch(`*[_type == "produto" && slug.current == '${slug}'][0]`);
//     const products = await client.fetch(`*[_type == "products"]`);

//     return {
//       props: {products, product}
//     }
//   }