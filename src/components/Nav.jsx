import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export function Nav() {
    const [activemenu, setActiveMenu] = useState(false);


    return (
        <>
            {/* <-- Normal Nav --> */}
            <nav className="bg-white hidden sm:flex justify-center align-middle w-full sm:h-[60px] md:h-[80px] transition-all duration-300">
                <div className="navegation flex justify-center align-bottom text">
                    <Link href="/" className='nav_text border-b-rose border-b-2'>Início</Link>
                    <Link href="#" className='nav_text'>Sobre</Link>
                </div>
                {/* <-- Logo --> */}
                <figure className="logo h-20 md:h-24 pt-3 z-10 bg-white w-[100px] md:w-[130px]"><Image className='mx-auto w-[80px] md:w-[90px]' src="/logo.svg" alt="me" width="120" height="300"></Image></figure>
                <div className="navegation flex">
                    <Link href="/produtos" className='nav_text'>Produtos</Link>
                    <Link href="#" className='nav_text'>Contato</Link>
                </div>
            </nav>
                {/* <-- CART --> */}
                <div className='cart absolute top-0 right-0 h-20 px-3 py-3'>
                    <Link href="#" className='hover:scale-110'>
                        <figure className='relative top-3 md:top-5 right-2'><Image className='w-[26px] md:w-[36px]' src="/cart.svg" alt="me" width="36" height="36"></Image></figure>
                        <span className='bg-green text-white rounded-full h-[13px] md:h-4 w-4 text-center text-[8px] md:text-[10px] absolute top-2 md:top-4 right-4'>10</span>
                    </Link>
                </div> 
            {/* <-- Icon menu to Small Nav --> */}
            <nav className="bg-white sm:hidden flex justify-start align-middle w-full h-[60px] transition-all duration-300">
                <span onClick={()=>{setActiveMenu(!activemenu)}}>
                    <Image className={`bt_side_menu absolute top-0 left-[12px] h-[60px] w-[30px] ${activemenu === true ? 'openmenu' : 'closemenu'}`} src="/menu-icon.svg" alt="me" width="100" height="100"></Image>
                    </span>
                <figure className="h-20 p-1 w-[80px] block mx-auto"><Image className='mx-auto w-[80px]' src="/logo.svg" alt="me" width="120" height="300"></Image></figure>
            </nav>
            {/* <-- Small Nav --> */}
            <div className={`small_nav absolute top-[62px] h-fill w-full pb-10 z-10 bg-bege ${activemenu === true ? 'menuheight' : 'noheight'} `}>
                <span className='block text-end pr-4 text-rose text-2xl' onClick={()=>{setActiveMenu(!activemenu)}}> x </span>
                <Link href="#" onClick={()=>{setActiveMenu(!activemenu)}} className='menu_item'>Início</Link>
                <Link href="#" onClick={()=>{setActiveMenu(!activemenu)}} className='menu_item'>Sobre</Link>
                <Link href="#" onClick={()=>{setActiveMenu(!activemenu)}} className='menu_item'>Produtos</Link>
                <Link href="#" onClick={()=>{setActiveMenu(!activemenu)}} className='menu_item'>Contato</Link>
            </div>
            <hr className='bg-rose h-[2px] w-full border-none'/>
        </>
    )
}