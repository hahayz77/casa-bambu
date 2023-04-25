import { Input, Textarea } from "@nextui-org/react";
import Image from "next/image";

export function About() {
    return (
        <>
            <section id="about">
                <h1 className="title">Sobre Nós...</h1>
                <div className="img_container">
                    <Image src={"/logo.svg"} width={600} height={600}/>
                </div>
                <div className="about_content">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                </div>
            </section>
        </>
    )
}