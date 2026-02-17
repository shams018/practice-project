import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", main: 30, compare: 5 },
  { month: "Feb", main: 20, compare: 13 },
  { month: "Mar", main: 14, compare: 20 },
  { month: "Apr", main: 25, compare: 7 },
  { month: "May", main: 29, compare: 14 },
  { month: "Jun", main: 22, compare: 23 },
  { month: "Jul", main: 24, compare: 30 },
];


export default function AnalyticsChart() {
  return (
    <div className="w-[614px] h-[242px] mt-10 ml-0" style={{ minHeight: '242px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {/* Gradient */}
          <defs>
            <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#000" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#000" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />

          {/* Area (main line with fill) */}
          <Area
            type="monotone"
            dataKey="main"
            stroke="#000"
            fill="url(#colorMain)"
            strokeWidth={2}
          />

          {/* Dashed comparison line */}
          <Line
            type="monotone"
            dataKey="compare"
            stroke="#7aa2ff"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
