import { myStocks } from "@/constants/data";
import React from "react";
import StockCard from "./StockCard";

const MyStocks = () => {
  return (
    <section className="flex items-center flex-wrap justify-between rounded-md bg-white py-10 px-10">
      {myStocks.map((st) => (
        <StockCard {...st} />
      ))}
    </section>
  );
};

export default MyStocks;
