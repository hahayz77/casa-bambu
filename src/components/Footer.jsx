import Link from "next/link";

export function Footer() {
    return (
        <>
            <footer class="footer bg-special">
                <div class="footer_container">
                    <div class="flex-grow flex flex-wrap md:text-left md:pl-10 text-center">
                    <div class="lg:w-1/4 md:w-1/2 w-full mb-10 lg:mb-0 px-4">
                        <h2 class="title-font font-medium tracking-widest text-sm mb-3">CONTATO:</h2>
                        <p>Endereço:</p>
                        <p>Tel: (81)99999-9999</p>
                        <p>E-mail: contato@casabambu.com</p>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full mb-10 lg:mb-0 px-4">
                        <h2 class="title-font font-medium tracking-widest text-sm mb-3">LINKS</h2>
                        <p><Link href="/sobre" class="hover:opacity-70">SOBRE</Link></p>
                        <p><Link href="/sobre" class="hover:opacity-70">PRODUTOS</Link></p>
                        <p><Link href="/sobre" class="hover:opacity-70">CONTATO</Link></p>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full mb-10 lg:mb-0 px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest mb-3">CATEGORIAS</h2>
                        <div className="flex justify-center md:justify-start align-middle">
                            <div className="mr-10">
                                <p className="text-xs">Categoria 1</p>
                                <p className="text-xs">Categoria 2</p>
                                <p className="text-xs">Categoria 3</p>
                                <p className="text-xs">Categoria 4</p>
                                <p className="text-xs">Categoria 5</p>
                            </div>
                            <div>
                                <p className="text-xs">Categoria 1</p>
                                <p className="text-xs">Categoria 2</p>
                                <p className="text-xs">Categoria 3</p>
                                <p className="text-xs">Categoria 4</p>
                                <p className="text-xs">Categoria 5</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full mb-10 lg:mb-0 px-4">
                        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">PAGAMENTO</h2>
                    </div>
                    </div>
                </div>
                <div class="container mx-auto pb-4 px-5 flex flex-wrap flex-col sm:flex-row text-bege text-opacity-70">
                    <p class="text-gray-500 text-sm text-center sm:text-left">
                        <a className="mx-0" href="https://www.github.com/hahayz77" rel="noopener noreferrer" target="_blank">© 2023 Github.com/hahayz77</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a class="text-gray-500">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                        </a>
                        <a class="ml-3">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </>
    )
}