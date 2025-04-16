import { motion } from "framer-motion";
import NavigationBar from "@/components/NavigationBar";
import {
  Brain,
  Sparkles,
  MessageSquare,
  Target,
  Dumbbell,
  Clock,
  BarChart,
  Calendar,
  ChevronRight,
  ArrowRight,
  Play,
  Users,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

const coachFeatures = [
  {
    icon: <Dumbbell className="w-6 h-6 text-fitness-orange" />,
    title: "Personalized Workouts",
    description:
      "AI-designed exercise routines adapted to your fitness level, goals, and available equipment.",
  },
  {
    icon: <Target className="w-6 h-6 text-blue-500" />,
    title: "Goal Tracking",
    description:
      "Set specific fitness targets and receive AI-optimized plans to achieve them faster.",
  },
  {
    icon: <BarChart className="w-6 h-6 text-green-500" />,
    title: "Performance Analysis",
    description:
      "Advanced analytics that identify patterns, strengths, and areas for improvement.",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
    title: "Real-time Feedback",
    description:
      "Get form corrections, motivation, and advice during your workout sessions.",
  },
];

const recommendedWorkouts = [
  {
    title: "HIIT Cardio Blast",
    duration: "25 min",
    level: "Intermediate",
    focus: "Cardio, Core",
    calories: 320,
    progress: 60,
    color: "from-fitness-orange to-amber-500",
  },
  {
    title: "Upper Body Strength",
    duration: "40 min",
    level: "Advanced",
    focus: "Chest, Arms, Back",
    calories: 280,
    progress: 75,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Yoga Flow Recovery",
    duration: "30 min",
    level: "Beginner",
    focus: "Flexibility, Balance",
    calories: 180,
    progress: 85,
    color: "from-green-500 to-emerald-600",
  },
];

const Coach = () => {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "ai",
      message: "Hi there! I'm your AI Fitness Coach. How can I help you today?",
    },
  ]);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    // Add user message
    setChatMessages([...chatMessages, { sender: "user", message: chatInput }]);

    // Simulate AI response
    setTimeout(() => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "ai",
          message:
            "Based on your progress, I'd recommend focusing on your upper body strength today. Would you like me to create a personalized workout plan?",
        },
      ]);
    }, 1000);

    setChatInput("");
  };

  return (
    <div className="min-h-screen bg-fitness-dark">
      <NavigationBar />
      <motion.main
        className="p-4 sm:p-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="bg-gradient-to-r from-fitness-orange to-amber-500 rounded-2xl p-6 mb-6"
          variants={item}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">
                AI Fitness Coach
              </h1>
              <p className="text-white/80">
                Your personalized workout companion
              </p>
            </div>

            <div className="mt-4 sm:mt-0 flex items-center space-x-3">
              <div className="bg-black/20 px-4 py-2 rounded-lg text-white flex items-center">
                <Brain className="w-5 h-5 mr-2 text-white/80" />
                <div>
                  <div className="text-sm opacity-80">Coach Status</div>
                  <div className="text-xl font-bold flex items-center">
                    Active
                    <span className="ml-2 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* AI Coach Chat Section */}
          <motion.div variants={item} className="lg:col-span-2">
            <div className="bg-fitness-card rounded-2xl p-6 h-full">
              <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
                <Sparkles className="text-fitness-orange mr-2 w-5 h-5" />
                AI Coach Conversation
              </h2>

              <div className="flex flex-col h-96">
                <div className="flex-1 overflow-y-auto mb-4 pr-2 space-y-4">
                  {chatMessages.map((chat, index) => (
                    <motion.div
                      key={index}
                      className={`flex ${
                        chat.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div
                        className={`rounded-2xl px-4 py-3 max-w-[80%] ${
                          chat.sender === "user"
                            ? "bg-fitness-orange text-white rounded-tr-none"
                            : "bg-gray-800 text-white rounded-tl-none"
                        }`}
                      >
                        {chat.message}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask your AI Coach a question..."
                    className="w-full bg-gray-800 rounded-full px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-fitness-orange"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="absolute right-1 top-1 rounded-full bg-fitness-orange hover:bg-fitness-orange/90 p-2 text-white"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Weekly Stats Section */}
          <motion.div variants={item}>
            <div className="bg-fitness-card rounded-2xl p-6 h-full">
              <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
                <Calendar className="text-fitness-orange mr-2 w-5 h-5" />
                Weekly Progress
              </h2>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-fitness-text-gray">Apr 10 - Apr 16</div>
                  <div className="text-white bg-fitness-orange/20 px-2 py-1 rounded-md text-sm">
                    <span className="text-fitness-orange">+15%</span>{" "}
                    improvement
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-fitness-text-gray">
                        Workouts Completed
                      </span>
                      <span className="text-white font-medium">5/6</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-fitness-orange h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "83%" }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-fitness-text-gray">
                        Intensity Level
                      </span>
                      <span className="text-white font-medium">7.5/10</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-fitness-text-gray">
                        Goal Progress
                      </span>
                      <span className="text-white font-medium">65%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-green-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                </div>

                <motion.button
                  className="bg-black/20 w-full py-3 rounded-lg text-fitness-orange font-medium flex items-center justify-center"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(0,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BarChart className="w-4 h-4 mr-2" />
                  View Detailed Analytics
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recommended Workouts */}
        <motion.div variants={item}>
          <h2 className="text-white text-xl font-semibold mb-4">
            AI-Recommended Workouts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {recommendedWorkouts.map((workout, index) => (
              <motion.div
                key={index}
                className="bg-fitness-card rounded-2xl overflow-hidden"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`bg-gradient-to-r ${workout.color} p-1`}>
                  <div className="h-2"></div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-white font-semibold">
                      {workout.title}
                    </h3>
                    <div className="bg-fitness-orange/20 text-fitness-orange text-xs rounded-full px-2 py-1">
                      {workout.level}
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-fitness-text-gray flex items-center">
                        <Clock className="w-4 h-4 mr-1" /> Duration
                      </span>
                      <span className="text-white">{workout.duration}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-fitness-text-gray flex items-center">
                        <Target className="w-4 h-4 mr-1" /> Focus
                      </span>
                      <span className="text-white">{workout.focus}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-fitness-text-gray flex items-center">
                        <Dumbbell className="w-4 h-4 mr-1" /> Calories
                      </span>
                      <span className="text-white">
                        {workout.calories} kcal
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-fitness-text-gray text-xs">
                        Progress
                      </span>
                      <span className="text-white text-xs">
                        {workout.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <motion.div
                        className={`bg-gradient-to-r ${workout.color} h-1.5 rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${workout.progress}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>

                  <motion.button
                    className="w-full bg-black/30 hover:bg-black/40 text-white rounded-lg py-2 flex items-center justify-center"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Play className="w-4 h-4 mr-2 text-fitness-orange" />
                    Start Workout
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Coach Features */}
        <motion.section
          className="py-10 mb-6 bg-fitness-card rounded-2xl"
          variants={item}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Meet Your <span className="text-fitness-orange">AI Coach</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our advanced artificial intelligence analyzes your performance,
                adapts to your progress, and provides personalized guidance to
                help you achieve your fitness goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coachFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/20 backdrop-blur-lg rounded-2xl p-6 border border-white/5 shadow-xl transition-all duration-300 hover:shadow-fitness-orange/20 hover:border-fitness-orange/20"
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="mb-4 rounded-xl bg-gradient-to-br from-fitness-dark to-black p-3 inline-block"
                    whileHover={{
                      rotate: [0, -10, 10, -5, 0],
                      transition: { duration: 0.5 },
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <motion.button
                className="bg-gradient-to-r from-fitness-orange to-amber-500 hover:from-fitness-orange/90 hover:to-amber-500/90 text-white rounded-full px-8 py-4 text-lg font-medium shadow-lg shadow-fitness-orange/20 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                <span>Set Up Your AI Coaching Plan</span>
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.div variants={item} className="mb-6">
          <h2 className="text-white text-xl font-semibold mb-4 flex items-center">
            <Users className="text-fitness-orange mr-2 w-5 h-5" />
            User Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah K.",
                achievement: "Lost 15 lbs in 8 weeks",
                quote:
                  "The AI coach adjusted my workouts perfectly as I progressed. It's like having a personal trainer who knows exactly what I need.",
                image: "https://i.pravatar.cc/100?img=25",
                color: "border-fitness-orange",
              },
              {
                name: "James L.",
                achievement: "Marathon PR: 3:45",
                quote:
                  "I was skeptical at first, but the AI coach's running program helped me shave 20 minutes off my marathon time!",
                image: "https://i.pravatar.cc/100?img=53",
                color: "border-blue-500",
              },
              {
                name: "Mia R.",
                achievement: "Doubled strength in 3 months",
                quote:
                  "As a beginner, I had no idea where to start. The AI coach built the perfect progression plan for me without any intimidation.",
                image: "https://i.pravatar.cc/100?img=46",
                color: "border-green-500",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-fitness-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`rounded-full border-2 ${testimonial.color} overflow-hidden flex-shrink-0`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      {testimonial.name}
                    </h4>
                    <p className="text-fitness-orange text-sm">
                      {testimonial.achievement}
                    </p>
                  </div>
                </div>
                <p className="text-white/80 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Tips */}
        <motion.div variants={item} className="mb-12">
          <div className="bg-gradient-to-r from-fitness-orange/20 to-blue-500/20 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="bg-fitness-orange/30 p-3 rounded-lg">
                <Lightbulb className="text-fitness-orange w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1">
                  Today's AI Coach Tip
                </h3>
                <p className="text-white/80">
                  Focus on proper hydration today. Since you're increasing your
                  workout intensity, aim to drink at least 3 liters of water
                  throughout the day to optimize recovery and performance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <footer className="py-10 bg-black/50 backdrop-blur-md border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/50 text-sm">
            © 2025 FitDash AI. All rights reserved. The ultimate fitness
            companion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Coach;
