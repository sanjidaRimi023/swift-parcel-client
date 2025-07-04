import axios from 'axios';
import React, { useState } from 'react';

const CloudImageUpload = ({onUploadSuccess}) => {

    const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    };
    const handleUpload = async () => {
    if (!image) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "swiftparcel"); 
    formData.append("folder", "parcels_Image");

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData
      );

      const imageUrl = res.data.secure_url;
      setUrl(imageUrl);
      onUploadSuccess(imageUrl); 
    } catch (err) {
      console.error("Image Upload Failed:", err);
    } finally {
      setUploading(false);
    }
  };

    
    return (
        <div className="space-y-3">
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-1 rounded"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>

      {url && (
        <div>
          <p className="font-bold">Uploaded Image Preview:</p>
          <img src={url} alt="Uploaded" className="w-40 h-40 object-cover rounded" />
        </div>
      )}
    </div>
    );
};

export default CloudImageUpload;