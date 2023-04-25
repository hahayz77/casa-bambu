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
            </section>
        </>
    )
}