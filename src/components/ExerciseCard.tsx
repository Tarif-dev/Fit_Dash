
const ExerciseCard = () => {
  return (
    <div className="bg-fitness-blue rounded-2xl p-6 relative overflow-hidden">
      <div className="flex flex-col">
        <span className="text-white/80 mb-2">Upcoming Exercise</span>
        <span className="text-white text-2xl font-bold mb-4">Kickboxing</span>
      </div>
      <img
        src="/lovable-uploads/8b8fa8bd-4643-44e5-acfc-80b7b2aca568.png"
        alt="Kickboxer"
        className="absolute right-0 bottom-0 h-full object-cover opacity-80"
      />
    </div>
  );
};

export default ExerciseCard;
