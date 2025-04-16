
import { Target, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

type Goal = {
  name: string;
  current: number;
  target: number;
  unit: string;
  icon: React.ReactNode;
  color: string;
}

const GoalsCard = () => {
  const goals: Goal[] = [
    {
      name: 'Daily Steps',
      current: 9158,
      target: 10000,
      unit: 'steps',
      icon: <TrendingUp className="w-4 h-4" />,
      color: 'bg-fitness-orange'
    },
    {
      name: 'Active Minutes',
      current: 92,
      target: 150,
      unit: 'min',
      icon: <Award className="w-4 h-4" />,
      color: 'bg-green-500'
    },
    {
      name: 'Workouts',
      current: 4,
      target: 5,
      unit: 'sessions',
      icon: <Target className="w-4 h-4" />,
      color: 'bg-blue-500'
    }
  ];

  return (
    <motion.div 
      className="bg-fitness-card rounded-2xl p-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white flex items-center gap-2">
          <Target className="text-fitness-orange" />
          Weekly Goals
        </h3>
        <span className="text-fitness-text-gray text-sm">3 of 5 completed</span>
      </div>
      
      <div className="space-y-6">
        {goals.map((goal, index) => (
          <motion.div 
            key={goal.name} 
            className="space-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-md ${goal.color.replace('bg-', 'bg-').replace('500', '500/20')}`}>
                  <div className={`${goal.color} rounded-md p-1 text-white`}>
                    {goal.icon}
                  </div>
                </div>
                <span className="text-white text-sm">{goal.name}</span>
              </div>
              <span className="text-fitness-text-gray text-sm">
                {goal.current} / {goal.target} {goal.unit}
              </span>
            </div>
            
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div 
                className={`${goal.color} h-2 rounded-full`} 
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, (goal.current / goal.target) * 100)}%` }}
                transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default GoalsCard;
