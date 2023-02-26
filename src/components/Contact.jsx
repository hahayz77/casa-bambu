import { Input, Textarea } from "@nextui-org/react";
import Image from "next/image";

export function Contact() {
    return (
        <>
            <section id="contact">
                <div className="contact_img">
                    <Image src='/imgs/hero05.jpg' height='1200' width='1200'/>
                </div>
                <div className="contact_form">
                    <h1 className="title">Entre em Contato</h1>
                    <div className="form_container">
                        <Input id="contact_name" labelPlaceholder="Nome" />
                        <Input id="contact_email" labelPlaceholder="E-mail" />
                        <Input id="contact_phone" labelPlaceholder="Telefone (81) 99999-9999" />
                        <Textarea id="contact_textarea" labelPlaceholder="Mensagem" status="default" maxLength={300}/>
                        <button className="btn btn_cta bg-special"> Enviar </button>
                    </div>
                    <div className="contact_other">

                    </div>
                </div>
            </section>
        </>
    )
}