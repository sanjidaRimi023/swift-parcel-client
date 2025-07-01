import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const PaymentForm = () => {
  const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
      }
      
      const { error, paymentMethod } = await stripe.createPaymentMethod(
          {
              type: "card",
              card
          }
      )
    if (error) {
          setError(error.message)

      }
    else {
        setError("")
          console.log("payment method", paymentMethod);
      }
      
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto">
        <CardElement className="p-4 border rounded-2xl"/>
                  <button type="submit" disabled={!stripe} className="btn btn-primary w-full">
                      Pay the parcels picked
                  </button>
              {
                  error && <p className="text-red-500">{error}</p>
   }
      </form>
    </>
  );
};

export default PaymentForm;
