
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

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
        <span className="text-white text-2xl font-bold mb-2">Kickboxing</span>
        
        <div className="space-y-2 my-3">
          <motion.div 
            className="flex items-center text-white/70 text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>Tomorrow • 10:00 AM</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center text-white/70 text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Clock className="w-4 h-4 mr-2" />
            <span>60 minutes • High intensity</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center text-white/70 text-sm"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span>Fitness Center, 2nd Floor</span>
          </motion.div>
        </div>
        
        <div className="mt-auto flex justify-between items-center">
          <motion.div 
            className="flex -space-x-2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            {[1, 2, 3].map((i) => (
              <div 
                key={i} 
                className="w-8 h-8 rounded-full bg-white/20 border-2 border-fitness-blue flex items-center justify-center text-xs text-white"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-fitness-blue flex items-center justify-center text-xs text-white">
              +5
            </div>
          </motion.div>
          
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
