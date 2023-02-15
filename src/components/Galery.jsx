import Image from "next/image";

export function Galery() {
    return (
        <>
            <section className="galery">
                <h1 className="title">Galeria</h1>
                <div className="galery_grid">
                    <div className="col-span-2"><Image src="/imgs/hero01.jpg" alt="img1" width='1000' height='1000'/></div>
                    <div><Image src="/imgs/hero02.jpg" alt="img2" width='1000' height='1000'/></div>
                    <div><Image src="/imgs/hero03.jpg" alt="img3" width='1000' height='1000'/></div>
                    <div className="col-span-2 lg:col-span-2"><Image src="/imgs/hero04.jpg" alt="img4" width='1000' height='1000'/></div>
                    <div className="lg:col-span-2"><Image src="/imgs/hero05.jpg" alt="img5" width='1000' height='1000'/></div>
                    <div><Image src="/imgs/hero01.jpg" alt="img" width='1000' height='1000'/></div>
                    <div className="col-span-2 lg:col-span-3"><Image src="/imgs/hero02.jpg" alt="img6" width='1000' height='1000'/></div>
                </div>
            </section>
        </>
    )
}