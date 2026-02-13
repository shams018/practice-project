import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", value: 40, top: 50 },
  { month: "Feb", value: 45, top: 60 },
  { month: "Mar", value: 35, top: 55 },
  { month: "Apr", value: 50, top: 70 },
  { month: "May", value: 60, top: 85 },
  { month: "Jun", value: 48, top: 65 },
  { month: "Jul", value: 52, top: 68 },
  { month: "Aug", value: 55, top: 72 },
  { month: "Sep", value: 62, top: 88 },
  { month: "Oct", value: 58, top: 75 },
  { month: "Nov", value: 54, top: 70 },
  { month: "Dec", value: 44, top: 60 },
];


const ThinBarChart = () => {
  return (
    <div className="      w-full lg:w-[1188px]  lg:h-[240px] p-4">
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8}>
          
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />


          {/* Red main line */}
<Bar 
  dataKey="value"
  stackId="a"
  fill="#FF3B30"
  barSize={3}
/>
         


{/* Gray middle small segment */}
<Bar 
  dataKey={(data) => data.top - data.value - 5}
  stackId="a"
  fill="#BDBDBD"
  barSize={3}
/>

{/* Black top small cap */}
<Bar 
  dataKey={() => 5}
  stackId="a"
  fill="#000"
  barSize={3}
/>




            
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ThinBarChart;
