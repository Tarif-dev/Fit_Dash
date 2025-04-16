
import { MapPin, Heart, Droplet, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ProfileCard = () => {
  return (
    <motion.div 
      className="bg-fitness-orange rounded-2xl p-6 h-full relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background image with overlay */}
      <motion.div 
        className="absolute inset-0 opacity-20 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.3 }}
      >
        <img 
          src="/lovable-uploads/c020f10b-2634-422d-a727-391b34f99883.png" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-fitness-orange opacity-80"></div>
      </motion.div>

      <div className="text-white relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Avatar className="h-16 w-16 border-2 border-white/30">
              <AvatarImage src="/lovable-uploads/c020f10b-2634-422d-a727-391b34f99883.png" alt="User" />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h2 
              className="text-3xl font-bold"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Makise Kurisu
            </motion.h2>
            <motion.div 
              className="flex items-center space-x-2 flex-wrap"
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <MapPin className="w-4 h-4" />
              <span>Tokyo, Japan</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-sm">75% Healthy</span>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-black/20 rounded-xl p-4 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-sm text-white/70 mb-2">Health Metrics</div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <motion.div className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                <motion.span 
                  className="text-xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  121
                </motion.span>
              </motion.div>
              <span className="block text-white/80 text-sm">bpm</span>
            </div>
            <div>
              <motion.div className="flex items-center gap-1">
                <Activity className="w-3 h-3" />
                <motion.span 
                  className="text-xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  128
                </motion.span>
              </motion.div>
              <span className="block text-white/80 text-sm">mmHg</span>
            </div>
            <div>
              <motion.div className="flex items-center gap-1">
                <Droplet className="w-3 h-3" />
                <motion.span 
                  className="text-xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  98
                </motion.span>
              </motion.div>
              <span className="block text-white/80 text-sm">SpO2</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="bg-black/20 rounded-xl p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-sm text-white/70 mb-2">Body Stats</div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <motion.span 
                className="text-xl font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                68
              </motion.span>
              <span className="block text-white/80 text-xs">kg</span>
            </div>
            <div>
              <motion.span 
                className="text-xl font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
              >
                22.1
              </motion.span>
              <span className="block text-white/80 text-xs">BMI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
