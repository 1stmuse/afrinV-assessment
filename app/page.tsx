"use client";

import MyStocks from "@/components/MyStocks";
import StockChart from "@/components/StockChart";
import * as d3 from "d3";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const options = [
  {
    label: "Daily",
    value: "TIME_SERIES_DAILY",
  },
  {
    label: "Weekly",
    value: "TIME_SERIES_WEEKLY",
  },
];

const limitOptions = [
  {
    label: "5",
    value: "5",
  },
  {
    label: "10",
    value: "10",
  },
  {
    label: "15",
    value: "15",
  },
  {
    label: "20",
    value: "20",
  },
];

export default function Home() {
  const [func, setFunc] = useState(options[0]);
  const [limit, setLimit] = useState(limitOptions[0]);

  const { data, isLoading } = useSWR(func.value);

  // console.log(data, "THE TIME DAILY SERIES");

  const structureData = useMemo(() => {
    // if (data == null || data == undefined) return;
    if (data) {
      let keys = Object.keys(data);
      const mainData = data[keys[1]];
      console.log(mainData, "THE MAIN DATA STOCK");
      const parseDate = d3.timeParse("%Y-%m-%d");
      const parsedData = Object.keys(mainData).map((key) => ({
        date: parseDate(key),
        open: mainData[key]?.["1. open"],
        high: mainData[key]?.["2. high"],
        low: mainData[key]?.["3. low"],
        close: mainData[key]?.["4. close"],
      }));
      return parsedData.slice(0, Number(limit.value));
    } else {
      return [];
    }
  }, [isLoading, func.value, limit.value]);

  const onSelectFunc = (option: any) => {
    console.log(option, "THE SELECTED OPTION");
    setFunc(option);
  };

  const onSelectLimit = (option: any) => {
    console.log(option, "THE SELECTED OPTION");
    setLimit(option);
  };

  return (
    <section className="p-4 h-full flex-1 overflow-scroll">
      <h2 className="mb-4 text-lg font-semibold">My Portfolio</h2>
      <MyStocks />
      {isLoading ? (
        <div className="w-full h-56 flex items-center justify-center">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className="w-full px-3 mt-8 bg-white py-2 rounded-md">
          <div className="my-2 ml-8 mb-5 flex items-center">
            <h2 className="text-lg font-semibold">Daily Stock Updates</h2>
            <Dropdown
              onChange={onSelectFunc}
              value={func}
              placeholder="Select an option"
              options={options}
              className="w-[8rem] m-10"
              arrowClassName="mt-1"
            />
            <Dropdown
              onChange={onSelectLimit}
              value={limit}
              placeholder="Select an option"
              options={limitOptions}
              className="w-[8rem] m-10"
              arrowClassName="mt-1"
            />
          </div>
          <StockChart data={structureData} />
        </div>
      )}
    </section>
  );
}
