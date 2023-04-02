import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import PriceCart from "../PriceCart/PriceCart";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  
  useEffect(() => {
    fetch('/prices.json')
    .then(res => res.json())
    .then(data => setPrices(data))
  })
  return (
    <div>
      <h2 className="text-6xl bg-purple-300 font-bold p-4 text-center text-purple-950">
        Awesome Affordable prices
      </h2>
      <dev className='grid md:grid-cols-3 gap-3'>
      {
        prices.map(price => <PriceCart
          key={price.id}
          price={price}
        ></PriceCart>)
      }
      </dev>
    </div>
  );
};

export default PriceList;
