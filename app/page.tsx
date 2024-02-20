"use client";

import MyStocks from "@/components/MyStocks";
import StockChart from "@/components/StockChart";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    // Fetch stock data from API or use a local JSON file
    // Example: fetch('https://api.example.com/stock-data').then(response => response.json()).then(data => setStockData(data));
    const sampleData = {
      "2024-02-16": {
        "1. open": "186.6300",
        "2. high": "188.9500",
        "3. low": "185.9452",
        "4. close": "187.6400",
        "5. volume": "4842840",
      },
      "2024-02-15": {
        "1. open": "183.6200",
        "2. high": "186.9800",
        "3. low": "183.6200",
        "4. close": "186.8700",
        "5. volume": "4714301",
      },
      "2024-02-14": {
        "1. open": "185.0000",
        "2. high": "185.0000",
        "3. low": "182.2600",
        "4. close": "183.5700",
        "5. volume": "3173391",
      },
      "2024-02-13": {
        "1. open": "184.2800",
        "2. high": "184.7700",
        "3. low": "182.3600",
        "4. close": "183.7000",
        "5. volume": "4290453",
      },
    };

    setStockData(sampleData);
  }, []);

  return (
    <section className="p-4 h-full flex-1 overflow-scroll">
      <h2 className="mb-4 text-lg font-semibold">My Portfolio</h2>
      <MyStocks />
      <div className="w-full px-3 mt-5 bg-white py-8">
        <div className="my-5 ml-8 mb-10">
          <h2 className="text-lg font-semibold">Daily Stock Updates</h2>
        </div>
        {stockData && <StockChart data={stockData} />}
      </div>
    </section>
  );
}
