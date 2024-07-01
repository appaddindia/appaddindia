// pages/api/create-order.js
import Razorpay from "razorpay";
import shortid from "shortid";

const instance = new Razorpay({
  key_id: "rzp_live_vXoCPV6kHWAnF9",
  key_secret: "LLHRRq4xyTHuN20q5pYmXxLx",
});

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(405).json({
      error: {
        status: 405,
        message: "GET method not allowed for this endpoint",
      },
    });
    return;
  }

  try {
    const { amount } = req.body; // Extract the amount from the request body
    if (!amount) {
      res.status(400).json({
        error: {
          status: 400,
          message: "Amount not provided",
        },
      });
      return;
    }

    const payment_capture = 1;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(), // Convert to paisa
      currency,
      receipt: shortid.generate(),
      payment_capture,
      notes: {
        paymentFor: "service",
        userId: "undefined",
        productId: "undefined",
      },
    };

    const order = await instance.orders.create(options);
    res.status(200).json({ msg: "success", order });
  } catch (error) {
    console.error("Error handling POST request:", error);
    res.status(500).json({
      error: {
        status: 500,
        message: "Failed to handle POST request",
      },
    });
  }
}
