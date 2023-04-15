import Link from "next/link";
import { useStateContext } from "../context/StateContext";

export function Hero() {
    return (
        <>
            <h1 className="text-5xl">Hero Section aa</h1>
            <Link href="/api">Api Link</Link>
            
        </>
    )
}