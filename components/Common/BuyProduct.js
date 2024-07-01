import { useState, useEffect } from "react";
import Script from "next/script";
import { useForm } from "react-hook-form";

const BuyProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateAmount = (value) => {
    if (value <= 0) {
      return "Amount must be greater than zero";
    }
    return true;
  };
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: data.amount }),
      });

      const orderData = await response.json();

      if (!response.ok) {
        throw new Error(orderData.error.message);
      }

      handlePayment(orderData.order, data);
    } catch (err) {
      console.error("Error making payment:", err);
    }
  };

  const handlePayment = (order, formData) => {
    if (!isRazorpayLoaded || typeof window.Razorpay === "undefined") {
      console.error("Razorpay SDK is not loaded yet.");
      return;
    }

    const options = {
      key: "rzp_live_vXoCPV6kHWAnF9",
      amount: order.amount,
      currency: order.currency,
      name: "Appaddindia",
      description: "Transaction",
      order_id: order.id,
      handler: async function (response) {
        try {
          const verifyResponse = await fetch("/api/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              orderCreationId: order.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            }),
          });

          const verification = await verifyResponse.json();

          if (verifyResponse.ok) {
            alert(`Payment successful: ${verification.message}`);
          } else {
            alert(`Payment verification failed: ${verification.message}`);
          }
        } catch (err) {
          console.error("Error verifying payment:", err);
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address:
          "#1697/36, Ground floor, Golden House, Dr. Rajkumar Road, Rajajinagar, Bangalore - 560021",
      },
      theme: {
        color: "#00a0e1",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      console.error(response.error.description);
    });

    rzp1.open();
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.Razorpay) {
      setIsRazorpayLoaded(true);
    }
  }, []);

  return (
    <div className="col-xl-12">
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="beforeInteractive"
        onLoad={() => setIsRazorpayLoaded(true)}
        onError={(e) => console.error("Failed to load Razorpay SDK")}
      />
      <h2 className="pb-2">Online Payment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-4">
          <div className="col-12 mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="John"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p style={{ color: "red", marginTop: "2px" }}>
                {errors.name.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p style={{ color: "red", marginTop: "2px" }}>
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="+1234567890"
            {...register("phone", { required: "Phone number is required" })}
          />
          {errors.phone && (
            <p style={{ color: "red", marginTop: "2px" }}>
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="Enter amount"
            {...register("amount", {
              required: "Amount is required",
              validate: validateAmount,
            })}
          />
          {errors.amount && (
            <p style={{ color: "red", marginTop: "2px" }}>
              {errors.amount.message}
            </p>
          )}
        </div>
        <div className="row">
          <div className="col-6">
            <button
              type="submit"
              style={{ width: "100%", marginTop: "10px" }}
              className="default-btn-one"
            >
              Proceed for Payment
            </button>
          </div>
          <div className="col-6">
            <button
              onClick={() => {
                props.setShow(false);
              }}
              style={{ width: "100%", marginTop: "10px" }}
              className="default-btn-one"
            >
              Cancel the payment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuyProduct;
