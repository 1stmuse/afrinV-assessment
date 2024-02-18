"use client";

import { StockAsset } from "@/common/types/interface";
import images from "@/common/utils/images";
import Image from "next/image";
import React from "react";

const StockCard = ({ logo, name, total_returns, total_shares }: StockAsset) => {
  return (
    <div className="w-[22%] flex justify-between">
      <div className="">
        <div className="flex items-center h-5 mb-4">
          <Image
            src={`/assets/images/${logo}.svg`}
            alt="logo"
            width={30}
            height={30}
          />
          <p>{name}</p>
        </div>
        <div>
          <p className="text-left">Total Shares</p>
          <p>Total Returns</p>
        </div>
      </div>
      <div className="items-center">
        <div className="h-5 mb-4">
          <p>Fake logo</p>
        </div>
        <div>
          <p className="text-left">{`${total_shares}%`}</p>
          <p>{`${total_returns}%`}</p>
        </div>
      </div>
    </div>
  );
};

export default StockCard;
