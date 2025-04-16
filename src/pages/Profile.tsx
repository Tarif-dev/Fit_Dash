import { motion } from "framer-motion";
import NavigationBar from "@/components/NavigationBar";
import {
  Calendar,
  Award,
  Clock,
  Target,
  Dumbbell,
  Heart,
  Droplet,
  LineChart,
  Edit,
  Camera,
  LogOut,
  Shield,
  ChevronRight,
  Trophy,
  Star,
  Zap,
  Ruler,
  Settings,
} from "lucide-react";

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

const StatsBar = ({
  title,
  value,
  max,
  color,
}: {
  title: string;
  value: number;
  max: number;
  color: string;
}) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-fitness-text-gray text-sm">{title}</span>
      <span className="text-white text-sm">
        {value}/{max}
      </span>
    </div>
    <div className="w-full bg-fitness-card h-2 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`h-full ${color}`}
      />
    </div>
  </div>
);

const AchievementBadge = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <motion.div
    className="flex flex-col items-center bg-fitness-card rounded-lg p-4"
    whileHover={{ y: -5, scale: 1.03 }}
  >
    <div className="bg-fitness-dark/50 rounded-full p-3 mb-2">{icon}</div>
    <span className="text-white text-xs text-center">{title}</span>
  </motion.div>
);

const ProfileSection = ({
  title,
  icon,
  children,
  className = "",
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={`bg-fitness-card rounded-2xl p-6 ${className}`}
    variants={item}
  >
    <div className="flex items-center mb-4">
      <div className="bg-fitness-dark/50 rounded-full p-2 mr-3">{icon}</div>
      <h3 className="text-white text-lg font-medium">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const ProfileItem = ({
  label,
  value,
}: {
  label: string;
  value: string | React.ReactNode;
}) => (
  <div className="flex justify-between items-center py-3 border-b border-fitness-dark/30">
    <span className="text-fitness-text-gray">{label}</span>
    <span className="text-white">{value}</span>
  </div>
);

const Profile = () => {
  return (
    <div className="min-h-screen bg-fitness-dark">
      <NavigationBar />

      <motion.main
        className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Left Column */}
        <motion.div
          className="space-y-4 sm:space-y-6 md:col-span-1"
          variants={item}
        >
          {/* Profile Card */}
          <motion.div
            className="bg-fitness-card rounded-2xl p-6 text-center"
            variants={item}
          >
            <div className="relative inline-block mb-4">
              <motion.div
                className="w-28 h-28 rounded-full overflow-hidden border-4 border-fitness-orange mx-auto"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.button
                className="absolute bottom-0 right-0 bg-fitness-orange text-white rounded-full p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Camera size={16} />
              </motion.button>
            </div>

            <h2 className="text-white text-xl font-bold mb-1">Alex Johnson</h2>
            <p className="text-fitness-text-gray text-sm mb-4">@alexfitpro</p>

            <motion.button
              className="bg-fitness-orange text-white rounded-full py-2 px-6 w-full flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Edit size={16} />
              <span>Edit Profile</span>
            </motion.button>
          </motion.div>

          {/* Personal Info */}
          <ProfileSection
            title="Personal Info"
            icon={<Shield size={20} className="text-fitness-orange" />}
          >
            <ProfileItem label="Height" value="185 cm" />
            <ProfileItem label="Weight" value="78 kg" />
            <ProfileItem label="Age" value="32 years" />
            <ProfileItem label="Gender" value="Male" />
            <ProfileItem label="Blood Type" value="O+" />
            <ProfileItem label="Member Since" value="Jan 2023" />
          </ProfileSection>

          {/* Account Settings */}
          <ProfileSection
            title="Account Settings"
            icon={<Settings size={20} className="text-fitness-orange" />}
          >
            <motion.div
              className="flex justify-between items-center py-3 border-b border-fitness-dark/30 cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <span className="text-fitness-text-gray">
                Notification Settings
              </span>
              <ChevronRight size={18} className="text-fitness-text-gray" />
            </motion.div>
            <motion.div
              className="flex justify-between items-center py-3 border-b border-fitness-dark/30 cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <span className="text-fitness-text-gray">Privacy Settings</span>
              <ChevronRight size={18} className="text-fitness-text-gray" />
            </motion.div>
            <motion.div
              className="flex justify-between items-center py-3 border-b border-fitness-dark/30 cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <span className="text-fitness-text-gray">Connected Devices</span>
              <ChevronRight size={18} className="text-fitness-text-gray" />
            </motion.div>
            <motion.div
              className="flex justify-between items-center py-3 cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <span className="text-fitness-text-gray">Premium Membership</span>
              <span className="bg-fitness-orange/20 text-fitness-orange px-2 py-1 rounded text-xs">
                ACTIVE
              </span>
            </motion.div>

            <motion.button
              className="mt-4 text-red-400 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <LogOut size={16} />
              <span>Sign Out</span>
            </motion.button>
          </ProfileSection>
        </motion.div>

        {/* Middle Column - Fitness Stats & Achievements */}
        <motion.div
          className="space-y-4 sm:space-y-6 md:col-span-1"
          variants={item}
        >
          {/* Fitness Stats */}
          <ProfileSection
            title="Fitness Stats"
            icon={<LineChart size={20} className="text-fitness-orange" />}
          >
            <StatsBar
              title="Strength"
              value={78}
              max={100}
              color="bg-fitness-orange"
            />
            <StatsBar
              title="Endurance"
              value={65}
              max={100}
              color="bg-blue-500"
            />
            <StatsBar
              title="Flexibility"
              value={45}
              max={100}
              color="bg-purple-500"
            />
            <StatsBar
              title="Balance"
              value={60}
              max={100}
              color="bg-green-500"
            />
            <StatsBar
              title="Body Composition"
              value={72}
              max={100}
              color="bg-yellow-500"
            />

            <div className="flex justify-between mt-6 bg-fitness-dark/30 rounded-lg p-4">
              <div className="text-center">
                <p className="text-fitness-text-gray text-xs">Current BMI</p>
                <p className="text-white text-lg font-medium">22.8</p>
                <p className="text-green-400 text-xs">Healthy</p>
              </div>
              <div className="h-full w-px bg-fitness-dark/50"></div>
              <div className="text-center">
                <p className="text-fitness-text-gray text-xs">Body Fat %</p>
                <p className="text-white text-lg font-medium">14.2%</p>
                <p className="text-green-400 text-xs">Athletic</p>
              </div>
              <div className="h-full w-px bg-fitness-dark/50"></div>
              <div className="text-center">
                <p className="text-fitness-text-gray text-xs">Sandow Score</p>
                <p className="text-white text-lg font-medium">87.5</p>
                <p className="text-fitness-orange text-xs">+8.2 pts</p>
              </div>
            </div>
          </ProfileSection>

          {/* Achievements */}
          <ProfileSection
            title="Achievements"
            icon={<Trophy size={20} className="text-fitness-orange" />}
          >
            <div className="grid grid-cols-3 gap-3 mb-4">
              <AchievementBadge
                icon={<Zap size={20} className="text-yellow-400" />}
                title="10K Steps"
              />
              <AchievementBadge
                icon={<Award size={20} className="text-blue-400" />}
                title="First Mile"
              />
              <AchievementBadge
                icon={<Star size={20} className="text-purple-400" />}
                title="Early Bird"
              />
              <AchievementBadge
                icon={<Dumbbell size={20} className="text-green-400" />}
                title="Gym Rat"
              />
              <AchievementBadge
                icon={<Heart size={20} className="text-red-400" />}
                title="Heart Zone"
              />
              <AchievementBadge
                icon={<Droplet size={20} className="text-blue-300" />}
                title="Hydrated"
              />
            </div>

            <div className="flex justify-between items-center bg-fitness-dark/30 rounded-lg p-4">
              <div>
                <p className="text-white">Achievement Progress</p>
                <p className="text-fitness-text-gray text-sm">
                  Unlocked 6 of 24 badges
                </p>
              </div>
              <div className="text-white text-lg font-medium">25%</div>
            </div>
          </ProfileSection>

          {/* Fitness Goals */}
          <ProfileSection
            title="Active Goals"
            icon={<Target size={20} className="text-fitness-orange" />}
          >
            <motion.div
              className="flex justify-between items-center p-3 bg-fitness-dark/30 rounded-lg mb-3"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center">
                <div className="bg-blue-500/20 rounded-full p-2 mr-3">
                  <Target size={16} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-white text-sm">Lose 5kg</p>
                  <p className="text-fitness-text-gray text-xs">2.3kg to go</p>
                </div>
              </div>
              <div className="w-16 h-16 relative">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeDasharray="54, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">54%</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-between items-center p-3 bg-fitness-dark/30 rounded-lg mb-3"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center">
                <div className="bg-green-500/20 rounded-full p-2 mr-3">
                  <Dumbbell size={16} className="text-green-500" />
                </div>
                <div>
                  <p className="text-white text-sm">Bench Press 100kg</p>
                  <p className="text-fitness-text-gray text-xs">
                    Current: 85kg
                  </p>
                </div>
              </div>
              <div className="w-16 h-16 relative">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="3"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">85%</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex justify-between items-center p-3 bg-fitness-dark/30 rounded-lg"
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center">
                <div className="bg-purple-500/20 rounded-full p-2 mr-3">
                  <Clock size={16} className="text-purple-500" />
                </div>
                <div>
                  <p className="text-white text-sm">Run 5K in 25 min</p>
                  <p className="text-fitness-text-gray text-xs">
                    Current: 28:45
                  </p>
                </div>
              </div>
              <div className="w-16 h-16 relative">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <path
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="3"
                    strokeDasharray="70, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">70%</span>
                </div>
              </div>
            </motion.div>
          </ProfileSection>
        </motion.div>

        {/* Right Column - Activity & Progress */}
        <motion.div
          className="space-y-4 sm:space-y-6 md:col-span-1"
          variants={item}
        >
          {/* Recent Activity */}
          <ProfileSection
            title="Recent Activity"
            icon={<Calendar size={20} className="text-fitness-orange" />}
          >
            <div className="space-y-4">
              <div className="relative pl-6 border-l-2 border-fitness-orange">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-fitness-orange rounded-full"></div>
                <p className="text-white text-sm">Completed Leg Day Workout</p>
                <p className="text-fitness-text-gray text-xs">
                  Today, 8:45 AM • 45 min
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-blue-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <p className="text-white text-sm">Set New Personal Record</p>
                <p className="text-fitness-text-gray text-xs">
                  Yesterday • Deadlift 140kg
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-green-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                <p className="text-white text-sm">Tracked Nutrition</p>
                <p className="text-fitness-text-gray text-xs">
                  Yesterday • 2400 calories
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-purple-500">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                <p className="text-white text-sm">Morning Run</p>
                <p className="text-fitness-text-gray text-xs">
                  Apr 15, 2025 • 5km in 28:45
                </p>
              </div>

              <div className="relative pl-6">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-fitness-text-gray rounded-full"></div>
                <p className="text-white text-sm">Completed Weekly Goal</p>
                <p className="text-fitness-text-gray text-xs">
                  Apr 14, 2025 • 4 workouts
                </p>
              </div>
            </div>

            <motion.button
              className="mt-4 text-fitness-orange text-sm flex items-center"
              whileHover={{ x: 5 }}
            >
              <span>View All Activity</span>
              <ChevronRight size={16} />
            </motion.button>
          </ProfileSection>

          {/* Progress Stats */}
          <ProfileSection
            title="Weekly Overview"
            icon={<LineChart size={20} className="text-fitness-orange" />}
          >
            <div className="flex justify-between mb-6">
              <div className="text-center">
                <div className="bg-fitness-dark/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Dumbbell className="text-fitness-orange" size={20} />
                </div>
                <p className="text-white text-lg font-medium">4</p>
                <p className="text-fitness-text-gray text-xs">Workouts</p>
              </div>

              <div className="text-center">
                <div className="bg-fitness-dark/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Clock className="text-blue-500" size={20} />
                </div>
                <p className="text-white text-lg font-medium">3.5</p>
                <p className="text-fitness-text-gray text-xs">Hours</p>
              </div>

              <div className="text-center">
                <div className="bg-fitness-dark/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <Zap className="text-yellow-500" size={20} />
                </div>
                <p className="text-white text-lg font-medium">2480</p>
                <p className="text-fitness-text-gray text-xs">Calories</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white text-sm">
                    Weekly Goal Progress
                  </span>
                  <span className="text-fitness-orange text-sm">4/5</span>
                </div>
                <div className="w-full bg-fitness-dark h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-fitness-orange"
                  />
                </div>
              </div>

              <div className="bg-fitness-dark/30 rounded-lg p-4">
                <div className="flex justify-between mb-1">
                  <span className="text-white">Recovery Status</span>
                  <span className="bg-green-500/20 text-green-500 px-2 py-0.5 rounded text-xs">
                    GOOD
                  </span>
                </div>
                <p className="text-fitness-text-gray text-sm">
                  Your body is well recovered and ready for intense training
                  today.
                </p>
              </div>
            </div>
          </ProfileSection>

          {/* Measurements */}
          <ProfileSection
            title="Body Measurements"
            icon={<Ruler size={20} className="text-fitness-orange" />}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-fitness-dark/30 rounded-lg p-3">
                <p className="text-fitness-text-gray text-xs mb-1">Chest</p>
                <div className="flex justify-between items-end">
                  <p className="text-white text-lg">42</p>
                  <p className="text-green-400 text-xs">+2 in</p>
                </div>
              </div>

              <div className="bg-fitness-dark/30 rounded-lg p-3">
                <p className="text-fitness-text-gray text-xs mb-1">Waist</p>
                <div className="flex justify-between items-end">
                  <p className="text-white text-lg">32</p>
                  <p className="text-red-400 text-xs">-1 in</p>
                </div>
              </div>

              <div className="bg-fitness-dark/30 rounded-lg p-3">
                <p className="text-fitness-text-gray text-xs mb-1">Arms</p>
                <div className="flex justify-between items-end">
                  <p className="text-white text-lg">15</p>
                  <p className="text-green-400 text-xs">+0.5 in</p>
                </div>
              </div>

              <div className="bg-fitness-dark/30 rounded-lg p-3">
                <p className="text-fitness-text-gray text-xs mb-1">Thighs</p>
                <div className="flex justify-between items-end">
                  <p className="text-white text-lg">24</p>
                  <p className="text-green-400 text-xs">+1 in</p>
                </div>
              </div>
            </div>

            <motion.button
              className="mt-4 text-fitness-orange text-sm flex items-center"
              whileHover={{ x: 5 }}
            >
              <span>Update Measurements</span>
              <ChevronRight size={16} />
            </motion.button>
          </ProfileSection>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default Profile;
