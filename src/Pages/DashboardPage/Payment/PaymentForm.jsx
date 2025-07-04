import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxios from "../../../Hooks/useAxios";
import LoadSpinner from "../../../Components/LoadSpinner";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { parcelId } = useParams();
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);


  const { isPending, data: parcelInfo = {} } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  console.log(parcelInfo);
  const amount = parcelInfo.deliveryCost;
  const amountInCent = 100 * amount;

  if (isPending) {
    return <LoadSpinner />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {

      return;
    }
    setIsProcessing(true); 

    const card = elements.getElement(CardElement);
    if (!card) {
          setIsProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
       setIsProcessing(false);
      Swal.fire({
    icon: "error",
    title: "Payment Failed!",
    text: error.message,
        confirmButtonText: "Try Again",
  
      });
      return;
    } else {
      setError("");
      console.log("payment method", paymentMethod);
      const res = await axiosSecure.post("/create-payment-intent", {
        amountInCent,
        parcelId,
      });

      const clientSecret = res.data.clientSecret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });
      if (result.error) {
        Swal.fire({
          icon: "error",
          title: "Payment Failed!",
          text: result.error.message,
          confirmButtonText: "Try Again",
        });
      } else {
        setError("");
        if (result.paymentIntent.status === "succeeded") {
          setError("");

          const paymentData = {
            parcelId,
            userEmail: user.email,
            amount,
            transactionId: result.paymentIntent.id,
            paymentMethod: paymentMethod.type,
          };

          const paymentRes = await axiosSecure.post("/payments", paymentData);
          if (paymentRes?.data?.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Payment Successful!",
              html: `<p><b>Transaction ID:</b> ${result.paymentIntent.id}</p>`,
              confirmButtonText: "Go to My Parcels",
            }).then(() => {
              navigate("/dashboard/my-parcels");
            });
          }
        }
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto p-10"
      >
        <CardElement className="p-4 border rounded-2xl" />
        <button
          type="submit"
          disabled={!stripe}
          className="btn btn-primary w-full"
        >
         {isProcessing ? "Processing Payment..." : `Pay ${amount}`}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </>
  );
};

export default PaymentForm;
