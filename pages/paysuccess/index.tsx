import axios from "axios"
import { useRouter } from "next/router";
import { useEffect } from "react"

export default function PaySuccess() {
    const router = useRouter();

    const onClick = () => {
        router.replace("/payment");
    }

    // useEffect(() => {
    //     // const splitUrl = window.location.href.split("&");
    //     // const paymentKey = splitUrl[1].replace("paymentKey=", "");
    //     const orderId = "ABcdEfgHijkLMnopQrSTU";
    //     // const orderId = "XBrDsMnKciMxjgZIGO8HE";
    //     const secretKey = "test_sk_OEP59LybZ8Bg5enpkNG36GYo7pRe";

    //     axios.post("/api/payment", {
    //         orderId: orderId,
    //         // paymentKey: paymentKey
    //         secretKey: secretKey
    //     })
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    // }, [])

    // useEffect(() => {
    //     axios.get("/api/billing")
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })
    // }, [])

    useEffect(() => {
        axios.get("/api/billingaccess")
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>
                Pay Success
            </h1>
            <button onClick={onClick}>
                결제화면으로 돌아가기
            </button>
        </>
    )
}