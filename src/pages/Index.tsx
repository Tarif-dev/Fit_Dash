
import { motion } from "framer-motion";
import NavigationBar from '@/components/NavigationBar';
import WelcomeCard from '@/components/WelcomeCard';
import StatsCard from '@/components/StatsCard';
import CalorieCard from '@/components/CalorieCard';
import ExerciseCard from '@/components/ExerciseCard';
import SandowScoreCard from '@/components/SandowScoreCard';
import ProfileCard from '@/components/ProfileCard';
import { useIsMobile } from '@/hooks/use-mobile';

const mockStepsData = [4000, 3000, 6000, 5000, 9158, 8000, 7000];
const mockHydrationData = [800, 600, 900, 1000, 1187, 1100, 900];

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
        className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <motion.div variants={item}>
            <WelcomeCard />
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            variants={item}
          >
            <StatsCard
              type="steps"
              value={9158}
              unit="total"
              data={mockStepsData}
            />
            <StatsCard
              type="hydration"
              value={1187}
              unit="ml"
              data={mockHydrationData}
            />
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            variants={item}
          >
            <ExerciseCard />
            <CalorieCard />
          </motion.div>
          <motion.div variants={item}>
            <SandowScoreCard />
          </motion.div>
        </div>
        <motion.div 
          className="lg:col-span-1"
          variants={item}
        >
          <ProfileCard />
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Index;
