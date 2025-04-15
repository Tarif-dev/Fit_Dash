
import { Activity, Droplets } from 'lucide-react';

type StatsCardProps = {
  type: 'steps' | 'hydration';
  value: number;
  unit: string;
  data: number[];
};

const StatsCard = ({ type, value, unit, data }: StatsCardProps) => {
  const maxValue = Math.max(...data);
  
  return (
    <div className="bg-fitness-card rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          {type === 'steps' ? (
            <Activity className="text-fitness-orange w-5 h-5" />
          ) : (
            <Droplets className="text-fitness-blue w-5 h-5" />
          )}
          <span className="text-fitness-text-gray capitalize">{type}</span>
        </div>
      </div>
      <div className="flex space-x-2 h-32">
        {data.map((value, index) => (
          <div
            key={index}
            className="flex-1 flex items-end"
          >
            <div
              style={{
                height: `${(value / maxValue) * 100}%`,
              }}
              className={`w-full rounded-t-sm ${
                type === 'steps' ? 'bg-fitness-orange/20' : 'bg-fitness-blue/20'
              } ${
                index >= data.length - 3 ? 
                  type === 'steps' ? 'bg-fitness-orange' : 'bg-fitness-blue'
                  : ''
              }`}
            />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <span className="text-white text-2xl font-bold">
          {value.toLocaleString()}
        </span>
        <span className="text-fitness-text-gray ml-1">{unit}</span>
      </div>
    </div>
  );
};

export default StatsCard;
