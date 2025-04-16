
import { motion } from "framer-motion";
import NavigationBar from '@/components/NavigationBar';
import { PieChart, Apple, Egg, Coffee, Utensils, ChevronRight, PlusCircle, TrendingUp, BarChart } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const meals = [
  {
    type: "Breakfast",
    time: "8:15 AM",
    calories: 420,
    items: ["Oatmeal with berries", "Greek yogurt", "Black coffee"],
    icon: <Coffee className="w-5 h-5" />,
    color: "bg-fitness-orange"
  },
  {
    type: "Lunch",
    time: "12:30 PM",
    calories: 650,
    items: ["Grilled chicken salad", "Quinoa", "Avocado"],
    icon: <Utensils className="w-5 h-5" />,
    color: "bg-green-500"
  },
  {
    type: "Snack",
    time: "3:45 PM",
    calories: 180,
    items: ["Protein bar", "Apple"],
    icon: <Apple className="w-5 h-5" />,
    color: "bg-blue-500"
  },
  {
    type: "Dinner",
    time: "7:00 PM",
    calories: 580,
    items: ["Salmon", "Roasted vegetables", "Brown rice"],
    icon: <Egg className="w-5 h-5" />,
    color: "bg-purple-500"
  }
];

const macroData = [
  { name: "Protein", value: 35, color: "bg-fitness-orange", target: 40 },
  { name: "Carbs", value: 45, color: "bg-blue-500", target: 40 },
  { name: "Fat", value: 20, color: "bg-green-500", target: 20 },
];

const Nutrition = () => {
  return (
    <div className="min-h-screen bg-fitness-dark">
      <NavigationBar />
      <motion.main 
        className="p-4 sm:p-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="bg-gradient-to-r from-fitness-orange to-fitness-orange/80 rounded-2xl p-6 mb-6"
          variants={item}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Nutrition Tracker</h1>
              <p className="text-white/80">Today's nutrition summary</p>
            </div>
            
            <div className="mt-4 sm:mt-0 flex items-center space-x-3">
              <div className="bg-black/20 px-4 py-2 rounded-lg text-white">
                <div className="text-sm opacity-80">Calories</div>
                <div className="text-xl font-bold">1,830 / 2,200</div>
              </div>
              
              <motion.button 
                className="bg-black/20 p-2 rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <PlusCircle className="text-white w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div variants={item} className="md:col-span-2">
            <div className="bg-fitness-card rounded-2xl p-6 h-full">
              <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
                <PieChart className="text-fitness-orange mr-2 w-5 h-5" /> 
                Macronutrients
              </h2>
              
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <div className="bg-black/20 rounded-xl p-4 mb-4">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {macroData.map((macro) => (
                        <motion.div 
                          key={macro.name}
                          className="text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className={`${macro.color} h-2 rounded-full mb-2`}></div>
                          <div className="text-white font-bold text-xl">{macro.value}%</div>
                          <div className="text-fitness-text-gray text-sm">{macro.name}</div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="h-40 flex items-center justify-center">
                      <div className="rounded-full w-32 h-32 border-8 border-fitness-orange relative flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-t-transparent border-r-transparent rotate-[115deg]"></div>
                        <div className="absolute inset-0 rounded-full border-8 border-green-500 border-t-transparent border-l-transparent border-b-transparent rotate-[245deg]"></div>
                        <div className="text-center">
                          <div className="text-white font-bold text-2xl">1,830</div>
                          <div className="text-fitness-text-gray text-xs">calories</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="space-y-4">
                    {macroData.map((macro) => (
                      <motion.div 
                        key={macro.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className={`${macro.color.replace('bg-', 'bg-').replace('500', '500/20')}`}>
                              <div className={`${macro.color} rounded-md p-1 text-white`}>
                                {macro.name === "Protein" ? <Egg className="w-4 h-4" /> : 
                                 macro.name === "Carbs" ? <Apple className="w-4 h-4" /> : 
                                 <BarChart className="w-4 h-4" />}
                              </div>
                            </div>
                            <span className="text-white text-sm">{macro.name}</span>
                          </div>
                          <span className="text-fitness-text-gray text-sm">
                            {Math.round(macro.value * 18.3)}g / {Math.round(macro.target * 22)}g
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div 
                            className={`${macro.color} h-2 rounded-full`} 
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(100, (macro.value / macro.target) * 100)}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={item}>
            <div className="bg-fitness-card rounded-2xl p-6 h-full">
              <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
                <TrendingUp className="text-fitness-orange mr-2 w-5 h-5" /> 
                Weekly Trend
              </h2>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-fitness-text-gray">Apr 10 - Apr 16</div>
                  <div className="text-white bg-fitness-orange/20 px-2 py-1 rounded-md text-sm">
                    <span className="text-fitness-orange">-240</span> calories
                  </div>
                </div>
                
                <div className="flex space-x-3 h-32">
                  {Array.from({ length: 7 }).map((_, index) => {
                    const height = Math.random() * 0.7 + 0.3;
                    return (
                      <motion.div
                        key={index}
                        className="flex-1 flex flex-col gap-2 items-center justify-end"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                      >
                        <motion.div
                          style={{ height: `${height * 100}%` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${height * 100}%` }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          className={`w-full rounded-t-sm ${index === 4 ? 'bg-fitness-orange' : 'bg-gray-600'}`}
                        />
                        <span className="text-fitness-text-gray text-xs">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={item}>
          <h2 className="text-white text-xl font-semibold mb-4">Today's Meals</h2>
          <div className="bg-fitness-card rounded-2xl p-6">
            <div className="space-y-4">
              {meals.map((meal, index) => (
                <motion.div 
                  key={meal.type}
                  className="flex items-center justify-between border-b border-gray-800 pb-4 last:border-0 last:pb-0"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${meal.color.replace('bg-', 'bg-').replace('500', '500/20')} p-2 rounded-lg`}>
                      <div className={`${meal.color} rounded-md p-1 text-white`}>
                        {meal.icon}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-white font-medium">{meal.type}</h4>
                        <span className="text-fitness-text-gray text-xs">{meal.time}</span>
                      </div>
                      <p className="text-fitness-text-gray text-sm">{meal.items.join(", ")}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-white">{meal.calories}</span>
                      <span className="text-fitness-text-gray text-sm ml-1">kcal</span>
                    </div>
                    <ChevronRight className="text-fitness-text-gray w-5 h-5" />
                  </div>
                </motion.div>
              ))}
              
              <motion.button
                className="bg-black/20 rounded-xl p-4 w-full mt-4 flex items-center justify-center text-fitness-orange"
                whileHover={{ scale: 1.01, backgroundColor: "rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.99 }}
              >
                <PlusCircle className="w-5 h-5 mr-2" />
                <span>Add Meal</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Nutrition;
