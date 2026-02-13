import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Linux", value: 120 },
  { name: "Mac", value: 220 },
  { name: "iOS", value: 160 },
  { name: "Windows", value: 260 },
  { name: "Android", value: 243 },
  { name: "Other", value: 110 },
];

const DeviceBarChart = () => {
  return (
    <div className="w-full lg:w-[538px] mx-4 lg:mx-6">
  
  {/* Chart Height Wrapper */}
  <div className="w-full h-[200px] lg:h-[168px]">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barSize={60}>
        
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#333", fontSize: 12 }}
        />

        <YAxis hide />

        <Tooltip cursor={{ fill: "transparent" }} />

        <Bar
          dataKey="value"
          radius={[20, 20, 20, 20]}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.name === "Android"
                  ? "url(#blueGradient)"
                  : "#E5E5E5"
              }
            />
          ))}
        </Bar>

        <defs>
          <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2F80ED" />
            <stop offset="100%" stopColor="#5FA8F5" />
          </linearGradient>
        </defs>

      </BarChart>
    </ResponsiveContainer>
  </div>

</div>

  );
};

export default DeviceBarChart;
