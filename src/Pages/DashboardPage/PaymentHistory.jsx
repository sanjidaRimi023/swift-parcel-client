import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import LoadSpinner from "../../Components/LoadSpinner";
import { NotebookText } from "lucide-react";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { isPending, data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return <LoadSpinner />;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-accent rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
        <NotebookText /> Payment History
      </h2>

      {payments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse shadow-md rounded-lg">
            <thead className="bg-gray-100 text-gray-700">
              <tr className="text-left">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Transaction ID</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Method</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr
                  key={payment._id}
                  className="border-t hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4 font-mono text-blue-600">
                    {payment.transactionId?.slice(0, 10)}...
                  </td>
                  <td className="py-2 px-4">${payment.amount}</td>
                  <td className="py-2 px-4">{payment.paymentMethod}</td>
                  <td className="py-2 px-4">
                    {new Date(payment.paidAt).toLocaleString()}
                  </td>
                  <td className="py-2 px-4">
                    <span className="inline-block bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center font-semibold text-xl py-10">
          🚫 No payment history found.
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
