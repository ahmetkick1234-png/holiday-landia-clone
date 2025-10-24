import crypto from "crypto"

export const paytrConfig = {
  merchantId: process.env.PAYTR_MERCHANT_ID || "",
  merchantKey: process.env.PAYTR_MERCHANT_KEY || "",
  merchantSalt: process.env.PAYTR_MERCHANT_SALT || "",
  apiUrl: "https://www.paytr.com/odeme/api/get-token",
  testMode: process.env.NODE_ENV !== "production",
}

export interface PayTRPaymentData {
  merchantId: string
  userIp: string
  merchantOid: string
  email: string
  paymentAmount: string
  userBasket: string
  noInstallment: string
  maxInstallment: string
  currency: string
  testMode: string
  merchantOkUrl: string
  merchantFailUrl: string
  userFirstName: string
  userLastName: string
  userAddress: string
  userPhone: string
  debugOn: string
  lang: string
  timeout_limit: string
}

export function generatePayTRToken(data: PayTRPaymentData): string {
  const {
    merchantId,
    userIp,
    merchantOid,
    email,
    paymentAmount,
    userBasket,
    noInstallment,
    maxInstallment,
    currency,
    testMode,
  } = data

  const hashStr = `${merchantId}${userIp}${merchantOid}${email}${paymentAmount}${userBasket}${noInstallment}${maxInstallment}${currency}${testMode}`

  const paytrToken = hashStr + paytrConfig.merchantSalt

  const token = crypto.createHmac("sha256", paytrConfig.merchantKey).update(paytrToken).digest("base64")

  return token
}

export async function initiatePayTRPayment(bookingData: {
  orderId: string
  amount: number
  customerEmail: string
  customerFirstName: string
  customerLastName: string
  customerPhone: string
  customerAddress: string
  userIp: string
  tourTitle: string
}) {
  const paymentAmount = (bookingData.amount * 100).toString() // Convert to kuruş (cents)

  const userBasket = Buffer.from(
    JSON.stringify([
      [bookingData.tourTitle, bookingData.amount.toString(), 1], // [product_name, price, quantity]
    ]),
  ).toString("base64")

  const paymentData: PayTRPaymentData = {
    merchantId: paytrConfig.merchantId,
    userIp: bookingData.userIp,
    merchantOid: bookingData.orderId,
    email: bookingData.customerEmail,
    paymentAmount: paymentAmount,
    userBasket: userBasket,
    noInstallment: "0",
    maxInstallment: "0",
    currency: "EUR",
    testMode: paytrConfig.testMode ? "1" : "0",
    merchantOkUrl: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
    merchantFailUrl: `${process.env.NEXT_PUBLIC_APP_URL}/payment/failure`,
    userFirstName: bookingData.customerFirstName,
    userLastName: bookingData.customerLastName,
    userAddress: bookingData.customerAddress,
    userPhone: bookingData.customerPhone,
    debugOn: "1",
    lang: "tr",
    timeout_limit: "30",
  }

  const token = generatePayTRToken(paymentData)

  return {
    ...paymentData,
    paytr_token: token,
  }
}
