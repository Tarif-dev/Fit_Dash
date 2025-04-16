
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const WelcomeCard = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-fitness-orange to-fitness-orange/80 rounded-2xl p-6 flex justify-between items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.01 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-white">Hello, Makise!</h2>
        <p className="text-white/80 mb-1">You have 2451 AI fitness Tasks.</p>
        <motion.div 
          className="flex items-center gap-2 text-white/90 text-sm flex-wrap"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-black/20 px-2 py-0.5 rounded-full">Active: 92 min</span>
          <span className="bg-black/20 px-2 py-0.5 rounded-full">Distance: 5.2km</span>
          <span className="bg-black/20 px-2 py-0.5 rounded-full">Calories: 420</span>
        </motion.div>
      </div>
      <motion.button 
        className="bg-black/20 p-2 rounded-full"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.3)" }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowRight className="text-white w-5 h-5" />
      </motion.button>
    </motion.div>
  );
};

export default WelcomeCard;
