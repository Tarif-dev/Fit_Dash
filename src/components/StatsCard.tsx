
import { Activity, Droplets, Heart, Clock, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

type MetricType = 'steps' | 'hydration' | 'heartRate' | 'activeMinutes' | 'elevation';

type StatsCardProps = {
  type: MetricType;
  value: number;
  unit: string;
  data: number[];
};

const StatsCard = ({ type, value, unit, data }: StatsCardProps) => {
  const maxValue = Math.max(...data);
  
  const getIcon = () => {
    switch (type) {
      case 'steps':
        return <Activity className="text-fitness-orange w-5 h-5" />;
      case 'hydration':
        return <Droplets className="text-fitness-blue w-5 h-5" />;
      case 'heartRate':
        return <Heart className="text-red-500 w-5 h-5" />;
      case 'activeMinutes':
        return <Clock className="text-green-500 w-5 h-5" />;
      case 'elevation':
        return <Mountain className="text-purple-500 w-5 h-5" />;
      default:
        return <Activity className="text-fitness-orange w-5 h-5" />;
    }
  };
  
  const getBarColor = (index: number) => {
    const colors = {
      steps: index >= data.length - 3 ? 'bg-fitness-orange' : 'bg-fitness-orange/20',
      hydration: index >= data.length - 3 ? 'bg-fitness-blue' : 'bg-fitness-blue/20',
      heartRate: index >= data.length - 3 ? 'bg-red-500' : 'bg-red-500/20',
      activeMinutes: index >= data.length - 3 ? 'bg-green-500' : 'bg-green-500/20',
      elevation: index >= data.length - 3 ? 'bg-purple-500' : 'bg-purple-500/20'
    };
    
    return colors[type];
  };
  
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
          {getIcon()}
          <span className="text-fitness-text-gray capitalize">{type === 'heartRate' ? 'Heart Rate' : type === 'activeMinutes' ? 'Active Minutes' : type}</span>
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
              className={`w-full rounded-t-sm ${getBarColor(index)}`}
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
