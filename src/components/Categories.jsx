import Link from "next/link";

export function Categories({ bg, text, color, categories}) {
    categories = categories?.sort((a,b)=>a.name.localeCompare(b.name))
    return (
        <>
            <div className="categories">
                {categories?.map((e, index)=>{return(
                    <div className="categories_div" key={index+Date.now()}> <Link href={`#${index}`}>
                        <div className={`categories_items ${bg} ${text}`}>
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        <div>
                            <h2 className={color}>{e.name}</h2>
                        </div>
                    </Link>
                </div>
                )})}
            </div>
        </>
    )
}