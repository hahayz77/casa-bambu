import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Categories } from "./Categories";


export function ProductCategories() {
    const repeat2 = [1,1,1,1,1]
    const [favorites, setFavorites] = useState();
    
    return (
        <>
            <div className="my-10">
                <h1 className="title">CATEGORIAS</h1>
            </div>
            <Categories bg={'bg-special'} text={'text-white'} description={'text-rose'}/>
            <div className="fav_categories bg-special">
                {repeat2.map((e,index)=>{return(
                    <Link href={`#${index}`} key={index}><div className="fav_item"><Image src='/imgs/hero01.jpg' height='1000' width='1000' alt="fav_img"/></div></Link>
                )})}
            </div>
            <div className="mb-40">
                    <Link href='/produtos'><button className="btn_cta bg-special">Ver mais os produtos</button></Link>
            </div>
        </>
    )
}