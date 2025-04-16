
import { Utensils, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const NutritionCard = () => {
  const nutritionData = [
    { name: 'Protein', value: 120, target: 140, color: 'bg-fitness-orange', unit: 'g' },
    { name: 'Carbs', value: 210, target: 250, color: 'bg-fitness-blue', unit: 'g' },
    { name: 'Fat', value: 55, target: 70, color: 'bg-yellow-500', unit: 'g' },
    { name: 'Water', value: 2.1, target: 3, color: 'bg-blue-400', unit: 'L' },
  ];

  return (
    <motion.div 
      className="bg-fitness-card rounded-2xl p-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Utensils className="text-green-400 w-5 h-5" />
          <span className="text-white">Nutrition Tracking</span>
        </div>
        <div className="flex items-center text-fitness-text-gray text-sm">
          <Zap className="w-4 h-4 mr-1 text-fitness-orange" />
          <span>1750 / 2500 kcal</span>
        </div>
      </div>
      
      <motion.div 
        className="mt-4 mb-6 flex items-center justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              stroke="#374151" 
              strokeWidth="10" 
              fill="none" 
            />
            <motion.circle 
              cx="50" 
              cy="50" 
              r="40" 
              stroke="#FF6B2C" 
              strokeWidth="10" 
              fill="none" 
              strokeLinecap="round"
              strokeDasharray="251.3"
              initial={{ strokeDashoffset: 251.3 }}
              animate={{ strokeDashoffset: 251.3 * (1 - 0.7) }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-white">70%</span>
            <span className="text-xs text-fitness-text-gray">Daily goal</span>
          </div>
        </div>
      </motion.div>
      
      <div className="space-y-3">
        {nutritionData.map((item, index) => (
          <motion.div 
            key={item.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (index * 0.1) }}
          >
            <div className="flex justify-between text-xs mb-1">
              <span className="text-fitness-text-gray">{item.name}</span>
              <span className="text-white">
                {item.value} / {item.target} {item.unit}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div 
                className={`${item.color} h-2 rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${(item.value / item.target) * 100}%` }}
                transition={{ duration: 0.7, delay: 0.4 + (index * 0.1) }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default NutritionCard;
