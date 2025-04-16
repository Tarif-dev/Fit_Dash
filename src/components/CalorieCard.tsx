
import { motion } from 'framer-motion';

const CalorieCard = () => {
  return (
    <motion.div 
      className="bg-fitness-card rounded-2xl p-6 h-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white">AI Calorie Intake</h3>
        <motion.button 
          className="text-fitness-text-gray"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ⋮
        </motion.button>
      </div>
      <motion.div 
        className="relative w-48 h-48 mx-auto"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-fitness-orange/20" />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-fitness-orange"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)',
          }}
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span 
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            2551
          </motion.span>
          <span className="text-fitness-text-gray">kcal</span>
        </div>
      </motion.div>
      <motion.div 
        className="flex justify-center space-x-6 mt-4 flex-wrap"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-fitness-orange mr-2" />
          <span className="text-fitness-text-gray text-sm">PROTEIN</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-fitness-blue mr-2" />
          <span className="text-fitness-text-gray text-sm">CARBS</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-white/20 mr-2" />
          <span className="text-fitness-text-gray text-sm">MACRO</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CalorieCard;
