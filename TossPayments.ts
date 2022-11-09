import { loadTossPayments } from "@tosspayments/payment-sdk";

const clientKey = 'test_ck_lpP2YxJ4K87WDe9pLvm8RGZwXLOb';

export function Toss(orderId: string) {
    return loadTossPayments(clientKey)
        .then(payments => {
            payments.requestPayment('카드', {
                amount: 1,
                orderId: orderId,
                orderName: "토스 티셔츠 외 2건",
                customerName: "프로토스",
                successUrl: "http://localhost:3000/paysuccess",
                failUrl: "http://localhost:3000/payfail",
                flowMode: "DIRECT",
                easyPay: "토스페이"
            })
        });
};

export function TossBilling() {
    return loadTossPayments(clientKey)
        .then(billing => {
            billing.requestBillingAuth('카드', {
                customerKey: "2X6rWjNeP4sD1OVkNh6tz",
                successUrl: "http://localhost:3000/paysuccess",
                failUrl: "http://localhost:3000/payfail",
            })
        })
}

export function Payco(orderId: string) {
    return loadTossPayments(clientKey)
        .then((payments) => {
            payments.requestPayment('카드', {
                amount: 1,
                orderId: orderId,
                orderName: "토스 티셔츠 외 2건",
                customerName: "프로토스",
                successUrl: "http://localhost:3000/paysuccess",
                failUrl: "http://localhost:3000/payfail",
                flowMode: "DIRECT",
                easyPay: "페이코"
            })
        });
};

export function LPay(orderId: string) {
    return loadTossPayments(clientKey)
        .then((payment) => {
            payment.requestPayment('카드', {
                amount: 1,
                orderId: orderId,
                orderName: "토스 티셔츠 외 2건",
                customerName: "프로토스",
                successUrl: "http://localhost:3000/paysuccess",
                failUrl: "http://localhost:3000/payfail",
                flowMode: "DIRECT",
                easyPay: "엘페이"
            })
        });
};

export function SamsungPay(orderId: string) {
    return loadTossPayments(clientKey)
        .then((payment) => {
            payment.requestPayment('카드', {
                amount: 1,
                orderId: orderId,
                orderName: "토스 티셔츠 외 2건",
                customerName: "프로토스",
                successUrl: "http://localhost:3000/paysuccess",
                failUrl: "http://localhost:3000/payfail",
                flowMode: "DIRECT",
                easyPay: "삼성페이"
            })
        });
};