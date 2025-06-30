import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { Trash2, View, Wallet } from "lucide-react";
import Swal from "sweetalert2";

const MyParcles = () => {
  const { user } = useAuth();

  const axiosSecure = useAxios();
  const { data: parcels = [], refetch } = useQuery({

    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  console.log("query data", parcels);

  const handleView = (parcels) => {
    console.log("Viewing parcel:", parcels);
  };

  const handlePay = (parcels) => {
    console.log("Paying for:", parcels);
  };

  const handleDelete = async (id) => {
  // console.log("ID received by handleDelete:", id);
    const confirm = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) { 
        try {
            const res = await axiosSecure.delete(`/parcels/${id}`);
            if (res.data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
              refetch()
               
            }
        } catch (error) {
            console.error("Failed to delete the parcel:", error);
            Swal.fire({
                title: "Error!",
                text: "Something went wrong.",
                icon: "error",
            });
        }
    }
};
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full text-sm md:text-base">
        <thead className="bg-base-200 text-base font-semibold text-gray-700">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Created At</th>
            <th>Cost</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {parcels?.map((parcel, index) => (
          //  console.log("Parcel object in map:", parcel),
            <tr key={parcel._id}>
              
              <td>{index + 1}</td>
              <td className="capitalize max-w-[180px] truncate">
                {parcel.title}
              </td>
              <td className="capitalize">{parcel.type}</td>

              <td>{new Date(parcel.creation_date).toLocaleDateString()}</td>
              <td>{parcel.deliveryCost} tk</td>

              <td>
                <span
                  className={`badge ${
                    parcel.payment_status === "paid"
                      ? "badge-success"
                      : "badge-error"
                  } text-white px-3 py-2`}
                >
                  {parcel.payment_status}
                </span>
              </td>

              <td className="flex gap-2">
                <button
                  onClick={() => handleView(parcel)}
                  className="btn btn-sm btn-info text-white"
                >
                  <View className="mr-1" /> View
                </button>

                <button
                  onClick={() => handlePay(parcel)}
                  className="btn btn-sm btn-success text-white"
                  disabled={parcel.payment_status === "paid"}
                >
                  <Wallet className="mr-1" /> Pay
                </button>

                <button
                  onClick={() => handleDelete(parcel._id)}
                  className="btn btn-sm btn-error text-white"
                >
                  <Trash2 className="mr-1" /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyParcles;
