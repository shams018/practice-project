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
  { name: "US", value: 120 },
  { name: "Canada", value: 220 },
  { name: "Mexico", value: 160 },
  { name: "China", value: 260 },
  { name: "Japan", value: 243 },
  { name: "Australia", value: 110 },
];

const DeviceBarChart2 = () => {
  return (
    <div className="w-full lg:w-[538px] mx-6">
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

export default DeviceBarChart2;
