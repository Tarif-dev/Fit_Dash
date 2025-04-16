
import { Activity, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

type StatsCardProps = {
  type: 'steps' | 'hydration';
  value: number;
  unit: string;
  data: number[];
};

const StatsCard = ({ type, value, unit, data }: StatsCardProps) => {
  const maxValue = Math.max(...data);
  
  return (
    <motion.div 
      className="bg-fitness-card rounded-2xl p-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          {type === 'steps' ? (
            <Activity className="text-fitness-orange w-5 h-5" />
          ) : (
            <Droplets className="text-fitness-blue w-5 h-5" />
          )}
          <span className="text-fitness-text-gray capitalize">{type}</span>
        </div>
      </div>
      <div className="flex space-x-2 h-32">
        {data.map((value, index) => (
          <motion.div
            key={index}
            className="flex-1 flex items-end"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <motion.div
              style={{
                height: `${(value / maxValue) * 100}%`,
              }}
              initial={{ height: 0 }}
              animate={{ height: `${(value / maxValue) * 100}%` }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`w-full rounded-t-sm ${
                type === 'steps' ? 'bg-fitness-orange/20' : 'bg-fitness-blue/20'
              } ${
                index >= data.length - 3 ? 
                  type === 'steps' ? 'bg-fitness-orange' : 'bg-fitness-blue'
                  : ''
              }`}
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-4">
        <motion.span 
          className="text-white text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {value.toLocaleString()}
        </motion.span>
        <span className="text-fitness-text-gray ml-1">{unit}</span>
      </div>
    </motion.div>
  );
};

export default StatsCard;
