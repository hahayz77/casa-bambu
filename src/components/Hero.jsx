import Link from "next/link";
import { useStateContext } from "../context/StateContext";

export function Hero() {
    const { teste } = useStateContext();
    return (
        <>
            <h1 className="text-5xl font-mono">Hero Section</h1>
            <h2>{teste}</h2>
            <Link href="/api">Api Link</Link>
            
        </>
    )
}