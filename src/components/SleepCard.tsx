
import { Moon, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const SleepCard = () => {
  return (
    <motion.div 
      className="bg-[#2D3748] rounded-2xl p-6 h-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <Moon className="text-indigo-400 w-5 h-5" />
          <span className="text-white">Sleep Quality</span>
        </div>
        <motion.span 
          className="text-indigo-400"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        >
          +15%
        </motion.span>
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-3xl font-bold text-white">7.5</span>
          <span className="text-gray-400 text-sm ml-1">hrs</span>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-1 bg-indigo-400/20 px-3 py-1 rounded-full"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Clock className="text-indigo-400 w-3 h-3" />
          <span className="text-indigo-400 text-xs">11:30 PM - 7:00 AM</span>
        </motion.div>
      </div>
      
      <div className="space-y-3">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">Deep Sleep</span>
            <span className="text-white">2.5 hrs</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '33%' }}></div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">REM Sleep</span>
            <span className="text-white">1.8 hrs</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-indigo-400 h-2 rounded-full" style={{ width: '24%' }}></div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-400">Light Sleep</span>
            <span className="text-white">3.2 hrs</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-indigo-300 h-2 rounded-full" style={{ width: '43%' }}></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SleepCard;
