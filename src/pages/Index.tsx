
import { motion } from "framer-motion";
import NavigationBar from '@/components/NavigationBar';
import WelcomeCard from '@/components/WelcomeCard';
import StatsCard from '@/components/StatsCard';
import CalorieCard from '@/components/CalorieCard';
import ExerciseCard from '@/components/ExerciseCard';
import SandowScoreCard from '@/components/SandowScoreCard';
import ProfileCard from '@/components/ProfileCard';
import SleepCard from '@/components/SleepCard';
import GoalsCard from '@/components/GoalsCard';
import NutritionCard from '@/components/NutritionCard';
import { useIsMobile } from '@/hooks/use-mobile';

const mockStepsData = [4000, 3000, 6000, 5000, 9158, 8000, 7000];
const mockHydrationData = [800, 600, 900, 1000, 1187, 1100, 900];
const mockHeartRateData = [72, 68, 75, 80, 121, 85, 78];
const mockActiveMinutesData = [45, 30, 60, 75, 92, 50, 65];
const mockElevationData = [10, 5, 15, 20, 25, 30, 15];

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

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-fitness-dark">
      <NavigationBar />
      <motion.main 
        className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* First column - 1 unit width */}
        <motion.div 
          className="space-y-4 sm:space-y-6 lg:col-span-1"
          variants={item}
        >
          <ProfileCard />
          <SleepCard />
        </motion.div>
        
        {/* Second column - 2 units width */}
        <motion.div 
          className="space-y-4 sm:space-y-6 lg:col-span-2"
          variants={item}
        >
          <WelcomeCard />
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
            variants={item}
          >
            <StatsCard
              type="steps"
              value={9158}
              unit="total"
              data={mockStepsData}
            />
            <StatsCard
              type="heartRate"
              value={121}
              unit="bpm"
              data={mockHeartRateData}
            />
            <StatsCard
              type="hydration"
              value={1187}
              unit="ml"
              data={mockHydrationData}
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={item}
          >
            <GoalsCard />
            <NutritionCard />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={item}
          >
            <ExerciseCard />
            <CalorieCard />
          </motion.div>
        </motion.div>
        
        {/* Third column - 1 unit width */}
        <motion.div 
          className="space-y-4 sm:space-y-6 lg:col-span-1"
          variants={item}
        >
          <SandowScoreCard />
          <motion.div 
            className="grid grid-cols-1 gap-4 sm:gap-6"
            variants={item}
          >
            <StatsCard
              type="activeMinutes"
              value={92}
              unit="min"
              data={mockActiveMinutesData}
            />
            <StatsCard
              type="elevation"
              value={25}
              unit="floors"
              data={mockElevationData}
            />
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Index;
