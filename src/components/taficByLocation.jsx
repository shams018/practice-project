import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "United States", value: 52.1, color: "#111111" },
  { name: "Canada", value: 22.8, color: "#7DB4FF" },
  { name: "Mexico", value: 13.9, color: "#7CE3A1" },
  { name: "Other", value: 11.2, color: "#BFD6FF" },
];

const TrafficByLocation = ({ chartData = data }) => {
  // If no valid data provided, show a friendly fallback instead of breaking
  if (!chartData || !Array.isArray(chartData) || chartData.length === 0) {
    return (
      <div className="w-full w-[432px] h-[280px] bg-[#F9F9FA] flex items-center justify-center">
        <p className="text-gray-500 text-sm">No data available at the moment</p>
      </div>
    );
  }

  return (
    <div className="w-full mt- w-[432px] h-[280px] bg-[#F9F9FA] rounded-lg">
      {/* Title */}
      <h2 className="text-lg font-semibold mt-4">
        Traffic by Location
      </h2>

      <div className="flex items-center gap-6 mt-10  ">
        {/* Donut Chart */}
        <div className="w-[120px] h-[120px]" style={{ minHeight: '120px', minWidth: '120px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={4}
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-4 ">
          {chartData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-6 w-[200px]"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-sm text-gray-700">
                  {item.name}
                </span>
              </div>

              <span className="text-sm font-medium text-gray-900">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrafficByLocation;
