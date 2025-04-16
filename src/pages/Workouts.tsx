
import { motion } from "framer-motion";
import NavigationBar from '@/components/NavigationBar';
import { Dumbbell, Calendar, Timer, BarChart, ArrowRight, Play, Bookmark, User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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

const workoutCategories = [
  { name: "Strength", icon: <Dumbbell className="w-5 h-5" />, color: "bg-fitness-orange" },
  { name: "Cardio", icon: <Timer className="w-5 h-5" />, color: "bg-green-500" },
  { name: "HIIT", icon: <BarChart className="w-5 h-5" />, color: "bg-blue-500" },
  { name: "Yoga", icon: <User className="w-5 h-5" />, color: "bg-purple-500" },
];

const featuredWorkouts = [
  {
    title: "Full Body Strength",
    duration: "45 min",
    level: "Intermediate",
    trainer: "Alex Chen",
    image: "/lovable-uploads/c020f10b-2634-422d-a727-391b34f99883.png",
    color: "from-fitness-orange to-red-500"
  },
  {
    title: "HIIT Cardio Burn",
    duration: "30 min",
    level: "Advanced",
    trainer: "Sara Johnson",
    image: "/lovable-uploads/c020f10b-2634-422d-a727-391b34f99883.png",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Yoga for Flexibility",
    duration: "55 min",
    level: "Beginner",
    trainer: "Maya Patel",
    image: "/lovable-uploads/c020f10b-2634-422d-a727-391b34f99883.png",
    color: "from-purple-500 to-violet-600"
  },
];

const Workouts = () => {
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
          className="bg-fitness-card rounded-2xl p-6 mb-6"
          variants={item}
        >
          <h1 className="text-2xl font-bold text-white mb-2">Workout Library</h1>
          <p className="text-fitness-text-gray">Find the perfect workout for your goals</p>
        </motion.div>

        <motion.div variants={item}>
          <h2 className="text-white text-xl font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {workoutCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="bg-fitness-card rounded-xl p-4 cursor-pointer"
                whileHover={{ scale: 1.03, backgroundColor: "#222" }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (index * 0.1) }}
              >
                <div className={`${category.color} bg-opacity-20 p-2 rounded-lg inline-flex mb-3`}>
                  <div className={`${category.color} rounded-md p-1 text-white`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-white font-medium">{category.name}</h3>
                <p className="text-fitness-text-gray text-sm">12 workouts</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-xl font-semibold">Featured Workouts</h2>
            <button className="text-fitness-orange flex items-center">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredWorkouts.map((workout, index) => (
              <motion.div
                key={workout.title}
                className={`bg-gradient-to-r ${workout.color} rounded-2xl overflow-hidden relative h-64`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="absolute inset-0 opacity-20">
                  <img src={workout.image} alt={workout.title} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${workout.color} opacity-80`}></div>
                </div>
                
                <div className="p-5 h-full flex flex-col justify-between relative z-10">
                  <div className="flex justify-between">
                    <div className="bg-black/30 text-white text-xs rounded-full px-3 py-1">
                      {workout.duration}
                    </div>
                    <motion.button 
                      className="text-white bg-black/30 p-1.5 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Bookmark className="w-4 h-4" />
                    </motion.button>
                  </div>
                  
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1">{workout.title}</h3>
                    <p className="text-white/80 text-sm mb-3">{workout.level}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border border-white/30">
                          <AvatarFallback className="bg-black/30 text-white text-xs">
                            {workout.trainer.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-white text-sm">{workout.trainer}</span>
                      </div>
                      
                      <motion.button 
                        className="bg-white p-2 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-4 h-4 text-gray-800 fill-current" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-8" variants={item}>
          <h2 className="text-white text-xl font-semibold mb-4">Recent Workouts</h2>
          <div className="bg-fitness-card rounded-2xl p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-between border-b border-gray-800 pb-4 last:border-0 last:pb-0"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-fitness-orange/20 p-2 rounded-lg">
                      <div className="bg-fitness-orange p-1 rounded text-white">
                        <Dumbbell className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Upper Body Strength</h4>
                      <div className="flex items-center text-fitness-text-gray text-xs space-x-2">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" /> {index === 0 ? "Today" : index === 1 ? "Yesterday" : "3 days ago"}
                        </span>
                        <span className="flex items-center">
                          <Timer className="w-3 h-3 mr-1" /> 40 min
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <motion.button
                      className="bg-fitness-orange/10 text-fitness-orange p-1.5 rounded-full"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 107, 44, 0.2)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Workouts;
