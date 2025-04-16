import { motion } from 'framer-motion';
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
    <motion.div 
      className="bg-fitness-card rounded-2xl p-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-white">Sandow Score</span>
            <motion.span 
              className="text-fitness-orange"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            >
              +8.2
            </motion.span>
          </div>
          <span className="text-fitness-text-gray text-sm">Increasing Steadily</span>
        </div>
        <motion.span 
          className="text-white text-3xl font-bold"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          87.51<span className="text-sm text-fitness-text-gray ml-1">pts</span>
        </motion.span>
      </div>
      <motion.div 
        className="h-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
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
              tick={false}
            />
            <YAxis hide />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
      <motion.div 
        className="flex space-x-2 mt-4 overflow-x-auto pb-2"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {['1d', '1w', '1m', '1y', 'ALL'].map((period, index) => (
          <motion.button
            key={period}
            className={`px-4 py-1 rounded-full text-sm ${
              period === '1d'
                ? 'bg-fitness-orange text-white'
                : 'text-fitness-text-gray hover:bg-fitness-card/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
          >
            {period}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SandowScoreCard;
