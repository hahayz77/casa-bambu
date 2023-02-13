import Image from "next/image";
import Link from "next/link";

export function Steps() {
    return (
        <>
            <section id="steps" className="bg-special">
                <h1 className="title">Como comprar ?</h1>
                <div className="steps_container">
                    <div className="step_content">
                        <figure className="step_figure"><Image src='/imgs/steps/step01.svg' height='300' width='200'></Image></figure>
                        <div className="step_description">
                            <div className="step_title">
                                <span>1 - Escolher o item</span>
                                <hr/>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolore vel nesciunt voluptate, culpa autem deleniti quia aperiam in fuga, quas magni odio architecto at? Quod atque eos dolorem odit.</p>
                        </div>
                    <div className="vr"></div>
                    </div>
                    <div className="step_content">
                        <figure className="step_figure grid lg:hidden"><Image src='/imgs/steps/step01.svg' height='300' width='200'></Image></figure>
                        <div className="step_description">
                            <div className="step_title">
                                <span>2 - Escolher o item</span>
                                <hr/>
                            </div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolore vel nesciunt voluptate, culpa autem deleniti quia aperiam in fuga, quas magni odio architecto at? Quod atque eos dolorem odit.</p>
                        </div>
                        <figure className="step_figure hidden lg:grid"><Image src='/imgs/steps/step01.svg' height='300' width='200'></Image></figure>
                    <div className="vr"></div>
                    </div>
                    <div className="steps_container">
                        <div className="step_content">
                            <figure className="step_figure"><Image src='/imgs/steps/step01.svg' height='300' width='200'></Image></figure>
                            <div className="step_description">
                                <div className="step_title">
                                    <span>3 - Escolher o item</span>
                                    <hr/>
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolore vel nesciunt voluptate, culpa autem deleniti quia aperiam in fuga, quas magni odio architecto at? Quod atque eos dolorem odit.</p>
                            </div>
                        <div className="vr"></div>
                        </div>
                        <div className="step_content">
                            <figure className="step_figure grid lg:hidden"><Image src='/imgs/steps/step01.svg' height='300' width='200'></Image></figure>
                            <div className="step_description">
                                <div className="step_title">
                                    <span>4 - Escolher o item</span>
                                    <hr/>
                                </div>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dolore vel nesciunt voluptate, culpa autem deleniti quia aperiam in fuga, quas magni odio architecto at? Quod atque eos dolorem odit.</p>
                            </div>
                            <figure className="step_figure hidden lg:grid"><Image src='/imgs/steps/step01.svg' height='300' width='200'></Image></figure>
                            <div className="vr"></div>
                        </div>
                    </div>
                </div>
                <div className="steps cta">
                    <Link href='/sobre'><button className="btn_cta_rose">Mais detalhes</button></Link>
                </div>
            </section>
        </>
    )
}