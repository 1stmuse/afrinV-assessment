"use client";

import { StockAsset } from "@/common/types/interface";
import images from "@/common/utils/images";
import Image from "next/image";
import React from "react";

const StockCard = ({ logo, name, total_returns, total_shares }: StockAsset) => {
  return (
    <div className="w-48 flex justify-between mb-5">
      <div className="">
        <div className="flex items-center h-8 mb-4">
          <Image
            src={`/assets/images/${logo}.svg`}
            alt="logo"
            width={30}
            height={30}
          />
          <p>{name}</p>
        </div>
        <div>
          <p className="text-left text-gray-500 mb-3">Total Shares</p>
          <p className="text-gray-500">Total Returns</p>
        </div>
      </div>
      <div className="items-center">
        <div className="h-8 mb-4">
          <Image
            src={
              total_returns > 0
                ? "/assets/svgs/green-chart.svg"
                : "/assets/svgs/red-chart.svg"
            }
            alt="chart"
            width={40}
            height={40}
          />
        </div>
        <div>
          <p className="text-left mb-3">{`$${total_shares.toLocaleString()}`}</p>
          <div className="flex">
            <p
              className={`${
                total_returns < 0 ? "text-red-700" : "text-green-700"
              }`}
            >{`${total_returns}%`}</p>
            <Image
              src={
                total_returns > 0
                  ? "/assets/svgs/up-arrow.svg"
                  : "/assets/svgs/down-arrow.svg"
              }
              alt="chart"
              width={10}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
