import Image from "next/image";
import Link from "next/link";
import { Categories } from "./Categories";
import { ProductCarousel } from "./ProductCarousel";


export function ProductCategories({ products }) {
    
    return (
        <>
            <div className="my-10">
                <h1 className="title">CATEGORIAS</h1>
            </div>
            <Categories bg={'bg-special'} text={'text-white'} description={'text-rose'}/>
            <ProductCarousel products={products}/>
            <div className="mb-40">
                    <Link href='/produtos'><button className="btn_cta bg-special">Ver mais os produtos</button></Link>
            </div>
        </>
    )
}