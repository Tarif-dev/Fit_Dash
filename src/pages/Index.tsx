
import NavigationBar from '@/components/NavigationBar';
import WelcomeCard from '@/components/WelcomeCard';
import StatsCard from '@/components/StatsCard';
import CalorieCard from '@/components/CalorieCard';
import ExerciseCard from '@/components/ExerciseCard';
import SandowScoreCard from '@/components/SandowScoreCard';
import ProfileCard from '@/components/ProfileCard';

const mockStepsData = [4000, 3000, 6000, 5000, 9158, 8000, 7000];
const mockHydrationData = [800, 600, 900, 1000, 1187, 1100, 900];

const Index = () => {
  return (
    <div className="min-h-screen bg-fitness-dark">
      <NavigationBar />
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <WelcomeCard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExerciseCard />
            <CalorieCard />
          </div>
          <SandowScoreCard />
        </div>
        <div className="lg:col-span-1">
          <ProfileCard />
        </div>
      </main>
    </div>
  );
};

export default Index;
