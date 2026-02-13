import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from "recharts";
const data = [
  { name: "Linux", value: 17000, color: "#A7C1E8" },
  { name: "Mac", value: 30000, color: "#6FE3CF" },
  { name: "iOS", value: 22000, color: "#000000" },
  { name: "Win", value: 31000, color: "#7EB6FF" },
  { name: "Android", value: 13000, color: "#B9A0F3" },
  { name: "Other", value: 26000, color: "#75E08C" },
];


export default function TrafficByDevice() {
  return (
    <div className="bg-[#F9F9FA] w-[432px] h-[280px] flex flex-col p-4 box-border ">
      <h3 className="text-lg font-semibold mb-2 ml-7 ">
        Traffic by Device
      </h3>

      <div className="flex-1" style={{ minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v / 1000}K`}
          />
          <Tooltip formatter={(v) => `${v / 1000}K`} />

          <Bar
            dataKey="value"
            radius={[10, 10, 10, 10]}
            barSize={30}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
