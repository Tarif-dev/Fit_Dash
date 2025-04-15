
import { Search, Settings, Bell } from 'lucide-react';

const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6">
      <div className="flex items-center space-x-8">
        <div className="text-fitness-orange text-3xl">+</div>
        <div className="space-x-6">
          <button className="text-white border-b-2 border-fitness-orange px-2 py-1">Workouts</button>
          <button className="text-fitness-text-gray px-2 py-1">Nutrition</button>
          <button className="text-fitness-text-gray px-2 py-1">AI Coach</button>
          <button className="text-fitness-text-gray px-2 py-1">Metrics</button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Search className="text-fitness-text-gray w-5 h-5" />
        <Settings className="text-fitness-text-gray w-5 h-5" />
        <Bell className="text-fitness-text-gray w-5 h-5" />
      </div>
    </nav>
  );
};

export default NavigationBar;
