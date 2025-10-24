import { type NextRequest, NextResponse } from "next/server"
import { initiatePayTRPayment } from "@/lib/paytr"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      orderId,
      amount,
      customerEmail,
      customerFirstName,
      customerLastName,
      customerPhone,
      customerAddress,
      tourTitle,
    } = body

    // Get user IP
    const userIp = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "127.0.0.1"

    const paymentData = await initiatePayTRPayment({
      orderId,
      amount,
      customerEmail,
      customerFirstName,
      customerLastName,
      customerPhone,
      customerAddress,
      userIp,
      tourTitle,
    })

    // Send request to PayTR
    const response = await fetch("https://www.paytr.com/odeme/api/get-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(paymentData as any).toString(),
    })

    const result = await response.json()

    if (result.status === "success") {
      return NextResponse.json({
        success: true,
        token: result.token,
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          error: result.reason || "Payment initiation failed",
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("[v0] Payment initiation error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred while initiating payment",
      },
      { status: 500 },
    )
  }
}
