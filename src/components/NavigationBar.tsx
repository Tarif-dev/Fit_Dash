import { Search, Settings, Bell, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="flex items-center justify-between py-4 px-6 sticky top-0 z-10 bg-fitness-dark/80 backdrop-blur-sm">
      <div className="flex items-center space-x-8">
        <Link to="/metrics">
          <motion.div
            className="text-fitness-orange text-3xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            +
          </motion.div>
        </Link>
        <div className="space-x-6 hidden md:block">
          <Link to="/metrics">
            <motion.button
              className={`${
                currentPath === "/metrics"
                  ? "text-white border-b-2 border-fitness-orange"
                  : "text-fitness-text-gray hover:text-white"
              } px-2 py-1 transition-colors`}
              whileHover={{ y: -2 }}
            >
              Metrics
            </motion.button>
          </Link>
          <Link to="/workouts">
            <motion.button
              className={`${
                currentPath === "/workouts"
                  ? "text-white border-b-2 border-fitness-orange"
                  : "text-fitness-text-gray hover:text-white"
              } px-2 py-1 transition-colors`}
              whileHover={{ y: -2 }}
            >
              Workouts
            </motion.button>
          </Link>
          <Link to="/nutrition">
            <motion.button
              className={`${
                currentPath === "/nutrition"
                  ? "text-white border-b-2 border-fitness-orange"
                  : "text-fitness-text-gray hover:text-white"
              } px-2 py-1 transition-colors`}
              whileHover={{ y: -2 }}
            >
              Nutrition
            </motion.button>
          </Link>
          <Link to="/coach">
            <motion.button
              className={`${
                currentPath === "/coach"
                  ? "text-white border-b-2 border-fitness-orange"
                  : "text-fitness-text-gray hover:text-white"
              } px-2 py-1 transition-colors`}
              whileHover={{ y: -2 }}
            >
              AI Coach
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
        <Link to="/profile">
          <motion.div
            className="bg-fitness-orange text-white rounded-full w-8 h-8 flex items-center justify-center overflow-hidden border-2 border-fitness-orange hover:border-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="/assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
              alt="User avatar"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = ""; // Clear the broken image
                target.onerror = null; // Prevent infinite loop
                // Replace with user icon if image fails to load
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = "";
                  const userIcon = document.createElement("div");
                  userIcon.innerHTML =
                    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>';
                  parent.appendChild(userIcon);
                }
              }}
            />
          </motion.div>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
