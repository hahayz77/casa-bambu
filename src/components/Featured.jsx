export function Featured() {
    return (
        <>
            <section class="featured text-rose body-font">
                <div className="title w-[50%] block mx-auto px-8">
                    <label for="full-name" class="leading-7 text-sm text-gray-600"><h2>Pesquisar</h2></label>
                    <input type="text" id="full-name" name="full-name" class="w-full bg-opacity-50 rounded-full border focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div class="featured_grid px-6 pb-12 flex flex-col md:grid lg:grid-flow-row md:grid-cols-2 md:grid-rows-[repeat(5,minmax(100px,400px))] lg:grid-cols-3 lg:grid-rows-[repeat(4,minmax(100px,400px))] gap-6">
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