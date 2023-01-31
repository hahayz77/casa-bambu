import Link from "next/link";
import { useStateContext } from "../context/StateContext";

export function Hero() {
    const { teste } = useStateContext();
    return (
        <>
            <h1 className="bg-indigo-300 text-5xl font-mono">Hero Section</h1>
            <h2>{teste}</h2>
            <Link href="/api">Api Link</Link>
        </>
    )
}