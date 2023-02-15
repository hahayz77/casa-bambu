import Image from "next/image";
import Link from "next/link";

export function Steps() {
    const repeat = ['Escolher Item','Pagar','Conferir E-mail','Tirar Dúvidas'];
    return (
        <>
            <section id="steps" className="bg-special">
                <h1 className="title">Como comprar ?</h1>
                <div className="steps_container">
                    {repeat.map((e, index)=>{
                        return(
                            <div className="step_content">
                                <figure className="step_figure"><img src='https://img.icons8.com/color/96/null/get-cash.png'/></figure>
                                <div className="step_description">
                                    <div className="step_title">
                                        <span>{index+1}. {e}</span>
                                        <hr/>
                                    </div>
                                    <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolore vel nesciunt voluptate, culpa autem deleniti quia aperiam in fuga, quas magni odio architecto at? Quod atque eos dolorem odit.</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="steps_cta">
                    <Link href='/sobre'><button className="btn_cta_rose">Mais detalhes</button></Link>
                </div>
            </section>
        </>
    )
}