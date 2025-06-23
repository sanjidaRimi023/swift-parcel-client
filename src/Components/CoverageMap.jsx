import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Subcomponent to control map movement
const MapController = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center && map) {
      // map.setView(center, 10);
      map.flyTo(center, 12, { duration: 2 });
    }
  }, [center, map]);
  return null;
};

const CoverageMap = ({ districtData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCoords, setSelectedCoords] = useState(null);

  const handleSearch = () => {
    const matchedDistrict = districtData.find((district) =>
      district.district.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchedDistrict) {
      setSelectedCoords([matchedDistrict.latitude, matchedDistrict.longitude]);
    } else {
      alert("District not found");
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* 🔍 Search Section */}
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* 🗺️ Map Section */}
      <div className="h-[600px] w-full rounded-xl overflow-hidden">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* 👇 Control for moving map */}
          {selectedCoords && <MapController center={selectedCoords} />}

          {districtData.map((district, index) => (
            <Marker
              key={index}
              position={[district.latitude, district.longitude]}
            >
              <Popup>
                <div className="space-y-1">
                  <strong className="text-primary">{district.city}</strong>
                  <br />
                  <p className="text-sm text-gray-700">
                    Status: {district.status}
                  </p>
                  <p className="text-sm font-semibold">Covered Areas:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {district.covered_area.map((area, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 hover:text-primary hover:underline transition duration-200 cursor-pointer"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CoverageMap;
