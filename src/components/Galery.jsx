export function Galery() {
    return (
        <>
            <section className="galery">
                <h1 className="title">Galeria</h1>
                <div className="galery_grid">
                    <div className="grid1 md:col-span-2"><img src="/imgs/hero01.jpg" alt="img1"/></div>
                    <div className="grid2"><img src="/imgs/hero02.jpg" alt="img2"/></div>
                    <div className="grid3"><img src="/imgs/hero03.jpg" alt="img3"/></div>
                    <div className="grid4 md:col-span-2 lg:col-span-2"><img src="/imgs/hero04.jpg" alt="img4"/></div>
                    <div className="grid5 lg:col-span-2"><img src="/imgs/hero05.jpg" alt="img5"/></div>
                    <div className="grid6"><img src="/imgs/hero01.jpg" alt="img"/></div>
                    <div className="grid7 lg:col-span-3 md:col-span-2"><img src="/imgs/hero02.jpg" alt="img6"/></div>
                </div>
            </section>
        </>
    )
}