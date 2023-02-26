import Link from "next/link";
import { FaCcMastercard, FaCcVisa, FaStripe } from 'react-icons/fa'
import { BiBarcode } from 'react-icons/bi'

export function Footer() {
    return (
        <>
            <footer className="footer bg-special">
                <div className="footer_wrapper">
                    <div className="footer_contact">
                        <span className="footer_title">Endereço : </span>
                        <br/>
                        <span>Rua Tarde em Itapuã, nº 40, bloco X, apt X</span>
                        <br/>
                        <span className="footer_title">Telefone :</span>
                        <br/>
                        <span>(81) 98888-8888</span>
                        <br/>
                        <span className="footer_title">Email :</span>
                        <br/>
                        <span>contato@contato.com</span>
                        <br/>
                    </div>
                    <div className="footer_nav">
                        <span className="footer_title">Links : </span>
                        <br/>
                        <p><Link href='/'>Início</Link></p>
                        <p><Link href='/sobre'>Sobre</Link></p>
                        <p><Link href='/produtos'>Produtos</Link></p>
                        <p><Link href='/contato'>Contato</Link></p>
                    </div>
                    <div className="footer_security">
                        <div className="stripe">
                            <span className="footer_title">Compra Segura</span> 
                            <FaStripe className="h-16 w-16"/>
                        </div>
                        <div className="footer_sec_icons">
                            <FaCcMastercard/>
                            <FaCcVisa/>
                            <BiBarcode/>
                            <svg fill="#fff" className="py-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.76C231.1-7.586 280.3-7.586 310.6 22.76L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.78L22.76 310.6C-7.586 280.3-7.586 231.1 22.76 200.8L80.78 142.7H112.6z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="inline-flex w-full justify-center items-center pb-4 px-5 text-bege text-opacity-70">
                    <p className="text-gray-500 text-sm text-center md:text-left">
                        <a href="https://www.github.com/hahayz77" rel="noopener noreferrer" target="_blank">© 2023 Github.com/hahayz77</a>
                    </p>
                    <span className="inline-flex ml-10 sm:ml-auto justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
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