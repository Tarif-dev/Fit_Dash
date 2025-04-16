
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const WelcomeCard = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-fitness-orange to-fitness-orange/80 rounded-2xl p-6 flex justify-between items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-2xl font-bold text-white">Hello, Makise!</h2>
        <p className="text-white/80">You have 2451 AI fitness Tasks.</p>
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
