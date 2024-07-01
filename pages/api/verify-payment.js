import Razorpay from "razorpay";
import crypto from "crypto";

const instance = new Razorpay({
  key_id: "rzp_live_vXoCPV6kHWAnF9",
  key_secret: "LLHRRq4xyTHuN20q5pYmXxLx",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests are allowed" });
    return;
  }

  const {
    orderCreationId,
    razorpayPaymentId,
    razorpayOrderId,
    razorpaySignature,
  } = req.body;

  // Signature verification
  const shasum = crypto.createHmac("sha256", "LLHRRq4xyTHuN20q5pYmXxLx");
  shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
  const digest = shasum.digest("hex");

  if (digest === razorpaySignature) {
    res.status(200).json({ message: "Payment verified successfully" });
  } else {
    res.status(400).json({ message: "Invalid signature" });
  }
}
