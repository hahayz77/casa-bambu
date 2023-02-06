import { useRouter } from "next/router";
import { useEffect } from "react";


export function RouterDataControl(setNavRoute, setShowCart){
    const router = useRouter();
    useEffect(()=>{
        setShowCart(false);
        setNavRoute(router.route);
    },[router.route]);
}