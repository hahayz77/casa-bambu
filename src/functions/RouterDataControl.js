import { useRouter } from "next/router";
import { useEffect } from "react";


export function RouterDataControl(setShowCart){
    const router = useRouter();
    useEffect(()=>{
        setShowCart(false);
    },[router.route]);
}