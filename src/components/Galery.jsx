import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/SanityClient";

export function Galery({galery}) {
    const [fullImg, setFullImg] = useState(false);
    const bannersGalery = galery?.slice(0,7).sort((a,b) => b.name.localeCompare(a.name));
    const [galeryFullImg, setGaleryFullImg] = useState();


    return (
        <>
            <section className="galery">
                <h1 className="title">Galeria</h1>
                <div className="galery_grid">
                    {bannersGalery?.map((e, index)=>{ return(
                        <div key={e._id}><Image src={urlFor(e.imagem.asset._ref).url()} width='600' height='600' alt="galery" onClick={()=>{setGaleryFullImg(urlFor(e.imagem.asset._ref).url());setFullImg(true)}}/></div>
                    )})}
                </div>
            </section>
            {fullImg && 
                <>
                    <div id="fullimg" className="full_img transition-all duration-300 modal-active">
                        <div className="mask_full_img" onClick={()=>{setFullImg(false)}}></div>
                        <figure><Image src={galeryFullImg} height='1000' width='1000' alt="mini_carousel"/></figure>
                    </div>
                    <span className="x_mask_full_img" onClick={()=>{setFullImg(false)}}> x </span>
                </>
            }
        </>
    )
}