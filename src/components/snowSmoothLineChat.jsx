import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
   

  { month: "Jan", value: 40 },
  { month: "Feb", value: 20 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 60 },
  { month: "May", value: 45 },
  { month: "Jun", value: 55 },
];

const SmoothLineChart = () => {
  return (
    <div className="w-full lg:w-[1188px] p-4 lg:p-6">
  <div className="w-full h-[250px] lg:h-[256px]">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        
        <CartesianGrid vertical={true} horizontal={false} stroke="#E5E7EB" />

        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#555", fontSize: 12 }}
        />

        <YAxis hide />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#A855F7"
          strokeWidth={3}
          dot={{
            stroke: "black",
            strokeWidth: 3,
            fill: "white",
            r: 5,
          }}
          activeDot={{
            r: 7,
            stroke: "black",
            strokeWidth: 3,
            fill: "white",
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>


  );
};

export default SmoothLineChart;
