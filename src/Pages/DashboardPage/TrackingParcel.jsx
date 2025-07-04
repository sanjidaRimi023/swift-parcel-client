import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import useAxios from "../../Hooks/useAxios";

const TrackingParcel = () => {
  const { trackID: urlTrackID } = useParams();
  const navigate = useNavigate();
  const axiosSecure = useAxios();

  const [trackID, setTrackID] = useState(urlTrackID || "");
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!urlTrackID) return;

    setLoading(true);
    setError("");
    axiosSecure
      .get(`/tracking/${urlTrackID}`)
      .then((res) => {
        setTrackingData(res.data);
      })
      .catch(() => {
        setError("Tracking info not found.");
        setTrackingData(null);
      })
      .finally(() => setLoading(false));
  }, [urlTrackID, axiosSecure]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!trackID.trim()) return;
    navigate(`/track/${trackID.trim()}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Track Your Parcel</h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Enter your Track ID"
          value={trackID}
          onChange={(e) => setTrackID(e.target.value)}
          className="border p-3 rounded w-full"
        />
        <button
          type="submit"
          className="mt-3 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Track
        </button>
      </form>

      {loading && <p>Loading tracking info...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {trackingData && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Tracking Updates for ID: {trackingData.trackID}
          </h2>
          <ul className="space-y-4">
            {trackingData.statusUpdates
              .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
              .map((update, idx) => (
                <li key={idx} className="border p-4 rounded shadow">
                  <p>
                    <strong>Status:</strong> {update.status}
                  </p>
                  {update.location && (
                    <p>
                      <strong>Location:</strong> {update.location}
                    </p>
                  )}
                  <p>
                    <strong>Time:</strong>{" "}
                    {new Date(update.timestamp).toLocaleString()}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TrackingParcel;
