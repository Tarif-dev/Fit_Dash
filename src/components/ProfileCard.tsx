
import { MapPin } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="bg-fitness-orange rounded-2xl p-6">
      <div className="text-white">
        <h2 className="text-3xl font-bold mb-2">Makise Kurisu</h2>
        <div className="flex items-center space-x-2 mb-4">
          <MapPin className="w-4 h-4" />
          <span>Tokyo, Japan</span>
          <span className="bg-white/20 px-2 py-1 rounded-full text-sm">75% Healthy</span>
        </div>
        <div className="bg-black/20 rounded-xl p-4 flex justify-between">
          <div>
            <span className="text-2xl font-bold">121</span>
            <span className="block text-white/80 text-sm">bpm</span>
          </div>
          <div>
            <span className="text-2xl font-bold">128</span>
            <span className="block text-white/80 text-sm">mmHg</span>
          </div>
          <div>
            <span className="text-2xl font-bold">98</span>
            <span className="block text-white/80 text-sm">SpO2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
