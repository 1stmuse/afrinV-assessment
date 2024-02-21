import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const StockChart = ({ data }: { data: any[] }) => {
  const svgRef = useRef(null);
  const margin = { top: 20, right: 30, bottom: 50, left: 50 };
  const width = 800;
  const height = 400 - margin.top - margin.bottom;

  useEffect(() => {
    if (!data.length) return;

    const svg = d3.select(svgRef.current);

    // Create scales
    const x = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.low), d3.max(data, (d) => d.high)])
      .range([height, 0]);

    svg.selectAll("*").remove();
    svg
      .selectAll("line")
      .data(data)
      .enter()
      .append("line")
      .attr("x1", (d) => x(d.date))
      .attr("x2", (d) => x(d.date))
      .attr("y1", (d) => y(d.low))
      .attr("y2", (d) => y(d.high))
      .attr("stroke", (d) => (d.open > d.close ? "red" : "green"))
      .attr("stroke-width", 2);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.date) - 5)
      .attr("y", (d) => (d.open > d.close ? y(d.open) : y(d.close)))
      .attr("width", 10)
      .attr("height", (d) => Math.abs(y(d.open) - y(d.close)))
      .attr("fill", (d) => (d.open > d.close ? "red" : "green"));

    // Add axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.bottom - 10)
      .attr("fill", "#000")
      .text("Date");

    svg
      .append("g")
      .call(d3.axisRight(y))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 10)
      .attr("x", -height / 2)
      .attr("dy", "0.71em")
      .attr("fill", "#000")
      .text("Price");
  }, [data]);

  return (
    <div className="w-[800px]">
      <svg className="ml-10 w-full" width="800" ref={svgRef} height="400">
        <g
          className="ml-10"
          transform={`translate(${margin.left}, ${margin.top})`}
        ></g>
      </svg>
    </div>
  );
};

export default StockChart;
