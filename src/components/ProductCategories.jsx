import Image from "next/image";
import Link from "next/link";

export function ProductCategories() {
    return (
        <>
            <div className="my-10">
                <h1 className="title">CATEGORIAS</h1>
            </div>
            <div className="flex flex-row justify-center align-middle flex-wrap">
                <div className="categories flex justify-center align-middle px-6">
                    <div className="product_box min-w-[150px] m-5">
                        <Link href="product/decoracao/">
                            <div className="img h-[70%]">
                                <img className="w-full h-full object-cover" src="imgs/hero04.jpg" alt="hero" />
                            </div>
                            <div className="content">
                                <h2 className="text-center mt-3">Decoração</h2>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="categories flex justify-center align-middle px-6">
                    <div className="product_box min-w-[150px] m-5">
                        <Link href="product/decoracao/">
                            <div className="img h-[70%]">
                                <img className="w-full h-full object-cover" src="imgs/hero04.jpg" alt="hero" />
                            </div>
                            <div className="content">
                                <h2 className="text-center mt-3">Decoração</h2>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="categories flex justify-center align-middle px-6">
                    <div className="product_box min-w-[150px] m-5">
                        <Link href="product/decoracao/">
                            <div className="img h-[70%]">
                                <img className="w-full h-full object-cover" src="imgs/hero04.jpg" alt="hero" />
                            </div>
                            <div className="content">
                                <h2 className="text-center mt-3">Decoração</h2>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="categories flex justify-center align-middle px-6">
                    <div className="product_box min-w-[150px] m-5">
                        <Link href="product/decoracao/">
                            <div className="img h-[70%]">
                                <img className="w-full h-full object-cover" src="imgs/hero04.jpg" alt="hero" />
                            </div>
                            <div className="content">
                                <h2 className="text-center mt-3">Decoração</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}