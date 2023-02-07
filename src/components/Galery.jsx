import Image from "next/image";

export function Galery() {
    return (
        <>
            <section className="galery">
                <h1 className="title">Galeria</h1>
                <div className="galery_grid">
                    <div className="grid1 md:col-span-2"><Image src="/imgs/hero01.jpg" alt="img1" width='1000' height='1000'/></div>
                    <div className="grid2"><Image src="/imgs/hero02.jpg" alt="img2" width='1000' height='1000'/></div>
                    <div className="grid3"><Image src="/imgs/hero03.jpg" alt="img3" width='1000' height='1000'/></div>
                    <div className="grid4 md:col-span-2 lg:col-span-2"><Image src="/imgs/hero04.jpg" alt="img4" width='1000' height='1000'/></div>
                    <div className="grid5 lg:col-span-2"><Image src="/imgs/hero05.jpg" alt="img5" width='1000' height='1000'/></div>
                    <div className="grid6"><Image src="/imgs/hero01.jpg" alt="img" width='1000' height='1000'/></div>
                    <div className="grid7 lg:col-span-3 md:col-span-2"><Image src="/imgs/hero02.jpg" alt="img6" width='1000' height='1000'/></div>
                </div>
            </section>
        </>
    )
}