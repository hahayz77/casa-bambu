import Link from "next/link";
import { useStateContext } from "../context/StateContext";

export function Hero() {
    const { teste } = useStateContext();
    return (
        <>
            <h1 className="text-5xl">Hero Section aa</h1>
            <h2>{teste}</h2>
            <Link href="/api">Api Link</Link>
            
        </>
    )
}