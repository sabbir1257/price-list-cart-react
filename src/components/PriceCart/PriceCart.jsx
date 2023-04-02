import React from "react";
import Feature from "../Feature/Feature";

const PriceCart = ({ price }) => {
  return (
    <div className="bg-indigo-400 mt-6 rounded-lg p-4 flex flex-col">
      <h2 className="text-center">
        <span className="text-purple-700 text-4xl font-extrabold">
          {price.price}
        </span>
        <span className="3xl font-bold text-white">/mon</span>
      </h2>
      <h5 className="text-2xl font-bold text-center">{price.name}</h5>
      <p className="underline font-bold text-white">Features: </p>
      {price.features.map((feature, idx) => (
        <Feature feature={feature} key={idx}></Feature>
      ))}
      <button class="py-2 px-4 mt-3 w-full mt-auto bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Bay Now
      </button>
    </div>
  );
};

export default PriceCart;
