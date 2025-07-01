import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";

const SendParcel = () => {
  const districtData = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const {
    register,
    handleSubmit,
    watch,
    // reset,
    formState: { errors },
  } = useForm();

  const [senderRegion, setSenderRegion] = useState("");
  const [receiverRegion, setReceiverRegion] = useState("");

  const type = watch("type");

  const regionList = [...new Set(districtData.map((d) => d.region))];
  const senderDistricts = districtData
    .filter((d) => d.region === senderRegion)
    .map((d) => d.district);

  const receiverDistricts = districtData
    .filter((d) => d.region === receiverRegion)
    .map((d) => d.district);

  const onSubmit = (data) => {
    const isSameDistrict = data.senderCenter === data.receiverCenter;
    const weight = parseFloat(data.weight || 0);

    let baseCost = 0;
    let extraCharge = 0;
    let deliveryZone = isSameDistrict ? "Within City" : "Outside City/District";

    let parcelType = data.type === "document" ? "Document" : "Non-Document";

    if (data.type === "document") {
      baseCost = isSameDistrict ? 60 : 80;
    } else {
      if (weight <= 3) {
        baseCost = isSameDistrict ? 110 : 150;
      } else {
        baseCost = isSameDistrict ? 110 : 150;
        extraCharge = (weight - 3) * 40 + (isSameDistrict ? 0 : 40);
      }
    }

    const totalCost = baseCost + extraCharge;

    const summaryHTML = `
    <div style="text-align:left; font-size:16px">
      <p><strong>Parcel Type:</strong> ${parcelType}</p>
      <p><strong>Weight:</strong> ${weight} kg</p>
      <p><strong>Delivery Zone:</strong> ${deliveryZone}</p>
      <p><strong>Base Cost:</strong> ৳${baseCost}</p>
      <p><strong>Extra Charges:</strong> ৳${extraCharge}</p>
      <hr style="margin: 10px 0;" />
      <p style="font-size:18px"><strong>Total Cost: <span style="color:#16a34a">৳${totalCost}</span></strong></p>
    </div>
  `;

    Swal.fire({
      title: "Confirm Your Parcel Info",
      html: summaryHTML,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Proceed to Payment 💸",
      cancelButtonText: "Edit Info ✏️",
      customClass: {
        popup: "text-left",
        confirmButton: "bg-primary text-white px-4 py-2 rounded-md",
        cancelButton: "bg-gray-200 text-gray-800 px-4 py-2 rounded-md",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        handleConfirm(data, totalCost);
        // reset();
      }
    });
  };

  const handleConfirm = (data, totalCost) => {
    const creation_date = new Date().toISOString();
    const trackingId = `TRK-${nanoid(10)}`;
    const ParcelData = {
      ...data,
      deliveryCost: totalCost,
      created_by: user.email,
      delivery_status: "not_collected",
      payment_status: "unpaid",
      creation_date,
      trackingId,
    };

    // Replace with actual DB post or navigate if needed
    axiosSecure.post("/parcels", ParcelData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Redirecting.....",
          text:"proceeding to payment gateway",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-xl rounded-xl my-10">
      <h2 className="text-4xl font-bold mb-2 text-secondary text-center">
        Send Parcel
      </h2>
      <p className="mb-6 text-gray-500 text-center">
        Please fill in all the required details.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* === Parcel Info === */}
        <section>
          <h3 className="text-xl font-semibold mb-3 text-secondary">
            Parcel Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label font-medium">Type</label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="document"
                    {...register("type", { required: true })}
                    className="radio radio-primary"
                  />
                  <span>Document</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value="non-document"
                    {...register("type", { required: true })}
                    className="radio radio-primary"
                  />
                  <span>Non-document</span>
                </label>
              </div>
              {errors.type && (
                <p className="text-error text-sm mt-1">Please select a type</p>
              )}
            </div>

            <div>
              <label className="label">Title</label>
              <input
                {...register("title", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.title && (
                <span className="text-error text-sm">Title is required</span>
              )}
            </div>

            {type === "non-document" && (
              <div>
                <label className="label">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  {...register("weight", {required: true})}
                  className="input input-bordered w-full"
                />
                {errors.weight && (
                <span className="text-error text-sm">weight is required</span>
              )}
              </div>
            )}
          </div>
        </section>

        {/* === Sender Info === */}
        <section>
          <h3 className="text-xl font-semibold mb-3 text-secondary">
            Sender Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label">Name</label>
              <input
                value={user?.displayName || ""}
                readOnly
                {...register("senderName")}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Contact</label>
              <input
                {...register("senderContact", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.senderContact && (
                <span className="text-error text-sm">Required</span>
              )}
            </div>

            <div>
              <label className="label">Sender Region</label>
              <select
                {...register("senderRegion", { required: true })}
                className="select select-bordered w-full"
                onChange={(e) => setSenderRegion(e.target.value)}
              >
                <option value="">Select Region</option>
                {regionList.map((region, idx) => (
                  <option key={idx} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              {errors.senderRegion && (
                <p className="text-error text-sm">Region is required</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="label">Sender Service Center (District)</label>
              <select
                {...register("senderCenter", { required: true })}
                className="select select-bordered w-full"
                disabled={!senderRegion}
              >
                <option value="">Select District</option>
                {senderDistricts.map((district, idx) => (
                  <option key={idx} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              {errors.senderCenter && (
                <p className="text-error text-sm">Service Center is required</p>
              )}
            </div>

            <div>
              <label className="label">Address</label>
              <input
                {...register("pickupInstruction", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="label">Pickup Instruction</label>
            <textarea
              {...register("senderAddress", { required: true })}
              className="textarea textarea-bordered w-full"
            />
          </div>
        </section>

        {/* === Receiver Info === */}
        <section className="space-y-3">
          <h3 className="text-xl font-semibold mb-3 text-secondary">
            Receiver Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="label">Name</label>
              <input
                {...register("receiverName", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Contact</label>
              <input
                {...register("receiverContact", { required: true })}
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Receiver Region</label>
              <select
                {...register("receiverRegion", { required: true })}
                className="select select-bordered w-full"
                onChange={(e) => setReceiverRegion(e.target.value)}
              >
                <option value="">Select Region</option>
                {regionList.map((region, idx) => (
                  <option key={idx} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              {errors.receiverRegion && (
                <p className="text-error text-sm">Region is required</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="label">
                Receiver Service Center (District)
              </label>
              <select
                {...register("receiverCenter", { required: true })}
                className="select select-bordered w-full"
                disabled={!receiverRegion}
              >
                <option value="">Select District</option>
                {receiverDistricts.map((district, idx) => (
                  <option key={idx} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              {errors.receiverCenter && (
                <p className="text-error text-sm">Service Center is required</p>
              )}
            </div>

            <div>
              <label className="label">Address</label>
              <textarea
                {...register("receiverAddress", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div>
            <label className="label">Delivery Instruction</label>
            <input
              {...register("deliveryInstruction", { required: true })}
              className="textarea textarea-bordered w-full"
            />
          </div>
        </section>

        <p className="text-xl text-secondary mt-6">
          PickUp Time: 4pm - 7pm Approx.
        </p>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
