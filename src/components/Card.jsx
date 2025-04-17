import React from "react";
import { IoIosLeaf } from "react-icons/io";

const Card = ({ title, subHeading, l1, l2, image }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg w-full max-w-xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-center mb-4 space-x-2 px-2 sm:px-4">
        <IoIosLeaf className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          {title}
        </h2>
      </div>

      {/* Subheading */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 px-2 sm:px-4">
        {subHeading}
      </h3>

      {/* Bullet Points */}
      <ol className="text-gray-700 list-disc list-inside space-y-3 px-4 mb-6">
        <li className="text-base sm:text-lg font-medium">{l1}</li>
        <li className="text-base sm:text-lg font-medium">{l2}</li>
      </ol>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt="Image"
          className="w-[40vw] md:w-[20vw] sm:w-[20vw] object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
