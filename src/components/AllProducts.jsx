import { useStateContext } from "@/context/StateContext";
import { Input, Pagination, Row } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export function AllProducts() {
    const { setShowCart } =  useStateContext();
    const repeat = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    const [search, setSearch] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const router = useRouter();
    function handlerEnter(e){
        router.push(`/produto/${inputValue}`);
    }

    return (
        <>
            <div id="all_products" className="bg-special">
               <div className="search_wrapper">
                    <Row className="search" justify="center" align="center">
                        <Input clearable underlined labelPlaceholder="Name" initialValue={inputValue} size="xl" color="secondary" label="Pesquisar" onFocus={()=>{setSearch(true)}} onBlur={()=>{setTimeout(() => {setSearch(false);}, "200")}} onChange={(e)=>{setInputValue(e.target.value)}} onKeyDown={(e)=>{if(e.key === "Enter"){handlerEnter(e.key)}}} css={{width:'100%'}}/>
                        {search === true  && inputValue !== '' &&
                            <div className={` ${search === true ? 'search_result' : 'search_ocult'}`} onFocus={()=>{setSearch(true)}}>
                                <Link href={`/produto/${inputValue}1`}><span>{inputValue}</span></Link>
                                <Link href={`/produto/${inputValue}2`}><span>{inputValue}</span></Link>
                                <Link href={`/produto/${inputValue}3`}><span>{inputValue}</span></Link>
                            </div>
                        }
                    </Row>
               </div>
                {repeat.map((e,index)=>{
                    return(
                        <div className="products_wrapper">
                            <Link href={`/produto/Produto%20-%20${index+1}`}>
                                <div className="products_img">
                                    <Image src='/imgs/hero05.jpg' width='600' height='600' alt="single_product"/>
                                </div>
                                <div className="products_content">
                                    <span className="font-bold">Item {index+1}</span>
                                    <span className="line-through">R$ 100,00</span>
                                    <span>R$ 80,00</span> 
                                </div>
                                <span className="btn_products_add" onClick={()=>{setShowCart(true)}}>+</span>
                                <figure className="all_products_discount"><Image src='/discount.svg' width='200' height='200'></Image></figure>
                                <span className="discount_text">-12%</span>
                            </Link>
                        </div>
                        )
                    })}
                <div className="pagination">
                    <Pagination id="all_prod_pagination" rounded total={3} initialPage={1} />
                </div>
            </div>
        </>
    )
}