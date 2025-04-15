
import { ArrowRight } from 'lucide-react';

const WelcomeCard = () => {
  return (
    <div className="bg-gradient-to-r from-fitness-orange to-fitness-orange/80 rounded-2xl p-6 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-white">Hello, Makise!</h2>
        <p className="text-white/80">You have 2451 AI fitness Tasks.</p>
      </div>
      <button className="bg-black/20 p-2 rounded-full">
        <ArrowRight className="text-white w-5 h-5" />
      </button>
    </div>
  );
};

export default WelcomeCard;
