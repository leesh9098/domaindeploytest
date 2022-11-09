import { useRouter } from "next/router"

export default function PayFail() {
    const router = useRouter();

    const onClick = () => {
        router.replace("/payment");
    }

    return (
        <>
            <h1>
                Pay Fail
            </h1>
            <button onClick={onClick}>
                결제화면으로 돌아가기
            </button>
        </>
    )
}