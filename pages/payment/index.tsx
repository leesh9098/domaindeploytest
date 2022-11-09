import { LPay, Payco, SamsungPay, Toss, TossBilling } from "../../TossPayments"

export default function Payment() {
    const onToss = () => {
        Toss("ABcdEfgHijkLMnopQncst");
    }
    
    const onTossBilling = () => {
        TossBilling();
    }

    const onPayco = () => {
        Payco("ABcdEfgHijkLMnopQrSTU");
    }

    const onLPay = () => {
        LPay("ABcdEfgHijkLMnopQrSTU");
    }

    const onSamsungPay = () => {
        SamsungPay("ABcdEfgHijkLMnopQrSTU");
    }

    return (
        <>
            <button onClick={onToss}>
                토스페이 결제
            </button>
            <br />
            <button onClick={onTossBilling}>
                토스 자동결제
            </button>
            <br />
            <button onClick={onPayco}>
                페이코 결제
            </button>
            <br />
            <button onClick={onLPay}>
                엘페이 결제
            </button>
            <br />
            <button onClick={onSamsungPay}>
                삼성페이 결제
            </button>
        </>
    )
}