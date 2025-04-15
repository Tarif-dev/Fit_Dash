
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { time: '1d', value: 75 },
  { time: '1w', value: 82 },
  { time: '1m', value: 65 },
  { time: '1y', value: 90 },
  { time: 'ALL', value: 87.51 }
];

const SandowScoreCard = () => {
  return (
    <div className="bg-fitness-card rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-white">Sandow Score</span>
            <span className="text-fitness-orange">+8.2</span>
          </div>
          <span className="text-fitness-text-gray text-sm">Increasing Steadily</span>
        </div>
        <span className="text-white text-3xl font-bold">87.51<span className="text-sm text-fitness-text-gray ml-1">pts</span></span>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#FF6B2C"
              strokeWidth={2}
              dot={false}
            />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8A8A8A' }}
            />
            <YAxis hide />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex space-x-2 mt-4">
        {['1d', '1w', '1m', '1y', 'ALL'].map((period) => (
          <button
            key={period}
            className={`px-4 py-1 rounded-full text-sm ${
              period === '1d'
                ? 'bg-fitness-orange text-white'
                : 'text-fitness-text-gray'
            }`}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SandowScoreCard;
