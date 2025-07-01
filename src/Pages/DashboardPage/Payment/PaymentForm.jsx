import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../../Hooks/useAxios";
import LoadSpinner from "../../../Components/LoadSpinner";

const PaymentForm = () => {
  const stripe = useStripe();
    const elements = useElements();
  const [error, setError] = useState("");
  const { parcelId } = useParams()
  const axiosSecure = useAxios()


  const {isPending, data: parcelInfo = {}} = useQuery(
    {
      queryKey: ["parcels", parcelId],
      queryFn: async () => {
        const res = await axiosSecure.get(`/parcels/${parcelId}`)
        return res.data;

      }
    }
  )
  console.log(parcelInfo);
  if (isPending) {
    return <LoadSpinner/>
  }

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
