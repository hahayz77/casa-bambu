import Link from "next/link";
import { useState } from "react";


export function ProductCategories() {
    const repeat = [0,0,0,0,0];
    const repeat2 = [1,1,1,1,1]
    const [favorites, setFavorites] = useState();
    
    return (
        <>
            <div className="my-10">
                <h1 className="title">CATEGORIAS</h1>
            </div>
            <div className="categories">
                {repeat.map((e, index)=>{return(
                    <div class="categories_div"> <Link href={`#${index}`}>
                        <div class="categories_items bg-special">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        <div class="flex-grow">
                            <h2 class="cat_description">Categoria {index+1}</h2>
                        </div>
                    </Link>
                </div>
                )})}
            </div>
            <div className="fav_categories bg-special">
                {repeat2.map((e,index)=>{return(
                    <Link href={`#${index}`}><div className="fav_item"><img src='/imgs/hero01.jpg'/></div></Link>
                )})}
            </div>
            <div className="mb-40">
                    <Link href='/produtos'><button className="btn_cta bg-special">Ver mais os produtos</button></Link>
            </div>
        </>
    )
}