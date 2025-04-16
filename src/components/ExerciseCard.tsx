
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ExerciseCard = () => {
  return (
    <motion.div 
      className="bg-fitness-blue rounded-2xl p-6 relative overflow-hidden h-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col h-full">
        <span className="text-white/80 mb-2">Upcoming Exercise</span>
        <span className="text-white text-2xl font-bold mb-4">Kickboxing</span>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-white/70 text-sm">Tomorrow • 10:00 AM</span>
          <motion.button 
            className="bg-white/20 p-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="text-white w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ExerciseCard;
