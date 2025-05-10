import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const XRpressoCard = () => {
  const navigate = useNavigate();
  const params = useParams();

  const handleNavigate = () => {
    navigate("/xrperience/XRpresso");
  };

  return (
    <div
      onClick={() => handleNavigate()}
      class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden"
    >
      <img
        class="w-full h-48 object-cover"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Glass Souls Tour"
      />
      <div class="p-6">
        <h2 class="text-xl font-semibold text-gray-900">
          Glass Souls’ World Tour
        </h2>
        <p class="text-gray-500 mt-1">From your recent favorites</p>
        <button class="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
          Buy tickets
        </button>
      </div>
    </div>
  );
};

export default XRpressoCard;
