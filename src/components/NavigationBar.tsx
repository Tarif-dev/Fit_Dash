
import { Search, Settings, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="flex items-center justify-between py-4 px-6 sticky top-0 z-10 bg-fitness-dark/80 backdrop-blur-sm">
      <div className="flex items-center space-x-8">
        <Link to="/dashboard">
          <motion.div 
            className="text-fitness-orange text-3xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            +
          </motion.div>
        </Link>
        <div className="space-x-6 hidden md:block">
          <Link to="/workouts">
            <motion.button 
              className={`${currentPath === '/workouts' ? 'text-white border-b-2 border-fitness-orange' : 'text-fitness-text-gray hover:text-white'} px-2 py-1 transition-colors`}
              whileHover={{ y: -2 }}
            >
              Workouts
            </motion.button>
          </Link>
          <Link to="/nutrition">
            <motion.button 
              className={`${currentPath === '/nutrition' ? 'text-white border-b-2 border-fitness-orange' : 'text-fitness-text-gray hover:text-white'} px-2 py-1 transition-colors`}
              whileHover={{ y: -2 }}
            >
              Nutrition
            </motion.button>
          </Link>
          <Link to="/coach">
            <motion.button 
              className={`${currentPath === '/coach' ? 'text-white border-b-2 border-fitness-orange' : 'text-fitness-text-gray hover:text-white'} px-2 py-1 transition-colors`}
              whileHover={{ y: -2 }}
            >
              AI Coach
            </motion.button>
          </Link>
          <Link to="/metrics">
            <motion.button 
              className={`${currentPath === '/metrics' ? 'text-white border-b-2 border-fitness-orange' : 'text-fitness-text-gray hover:text-white'} px-2 py-1 transition-colors`}
              whileHover={{ y: -2 }}
            >
              Metrics
            </motion.button>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Search className="text-fitness-text-gray w-5 h-5 hover:text-white transition-colors" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Settings className="text-fitness-text-gray w-5 h-5 hover:text-white transition-colors" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Bell className="text-fitness-text-gray w-5 h-5 hover:text-white transition-colors" />
        </motion.div>
      </div>
    </nav>
  );
};

export default NavigationBar;
