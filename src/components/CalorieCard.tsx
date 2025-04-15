
const CalorieCard = () => {
  return (
    <div className="bg-fitness-card rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white">AI Calorie Intake</h3>
        <button className="text-fitness-text-gray">⋮</button>
      </div>
      <div className="relative w-48 h-48 mx-auto">
        <div className="absolute inset-0 rounded-full border-4 border-fitness-orange/20" />
        <div
          className="absolute inset-0 rounded-full border-4 border-fitness-orange"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)',
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">2551</span>
          <span className="text-fitness-text-gray">kcal</span>
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-fitness-orange mr-2" />
          <span className="text-fitness-text-gray text-sm">PROTEIN</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-fitness-blue mr-2" />
          <span className="text-fitness-text-gray text-sm">CARBS</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-white/20 mr-2" />
          <span className="text-fitness-text-gray text-sm">MACRO</span>
        </div>
      </div>
    </div>
  );
};

export default CalorieCard;
