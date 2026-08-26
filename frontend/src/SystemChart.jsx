import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", cpu: 35 },
  { time: "10:05", cpu: 42 },
  { time: "10:10", cpu: 38 },
  { time: "10:15", cpu: 55 },
  { time: "10:20", cpu: 48 },
  { time: "10:25", cpu: 65 },
  { time: "10:30", cpu: 52 },
];

function SystemChart() {
  return (
    <div className="chart-container">
      <h2>CPU Usage</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#8884d8"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SystemChart;