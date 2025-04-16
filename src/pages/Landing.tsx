
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Heart, 
  Activity, 
  Flame, 
  Dumbbell, 
  BarChart4, 
  Trophy, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const Landing = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.3 + custom * 0.1,
        duration: 0.8,
        ease: [0.21, 0.45, 0.15, 0.86]
      }
    })
  };

  const features = [
    { 
      icon: <Heart className="w-6 h-6 text-pink-500" />, 
      title: "Health Tracking", 
      description: "Monitor vital signs including heart rate, blood pressure, and oxygen levels." 
    },
    { 
      icon: <Activity className="w-6 h-6 text-blue-500" />, 
      title: "Activity Metrics", 
      description: "Track steps, distance, active minutes, and calories burned daily." 
    },
    { 
      icon: <Flame className="w-6 h-6 text-orange-500" />, 
      title: "Calorie Management", 
      description: "Balance your caloric intake and expenditure for optimal results." 
    },
    { 
      icon: <Dumbbell className="w-6 h-6 text-purple-500" />, 
      title: "Workout Library", 
      description: "Access hundreds of exercises with detailed form guides and videos." 
    },
    { 
      icon: <BarChart4 className="w-6 h-6 text-green-500" />, 
      title: "Progress Analytics", 
      description: "Visualize your fitness journey with detailed charts and insights." 
    },
    { 
      icon: <Trophy className="w-6 h-6 text-yellow-500" />, 
      title: "Goal Setting", 
      description: "Set personalized targets and track your progress toward achievement." 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-fitness-dark to-black overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        className="h-screen relative flex flex-col justify-center items-center px-4 md:px-8"
        style={{ scale, opacity, y }}
        ref={targetRef}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-fitness-orange/20"
                style={{
                  width: Math.random() * 300 + 50,
                  height: Math.random() * 300 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="mb-4 flex justify-center"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-fitness-orange/20 backdrop-blur-md px-4 py-2 rounded-full inline-flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-fitness-orange mr-2" />
              <span className="text-white/90 text-sm">Next-Gen Fitness Technology</span>
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            variants={itemVariants}
          >
            Transform Your
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-fitness-orange to-yellow-400"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                ease: "linear" 
              }}
              style={{
                backgroundSize: "300% 300%",
              }}
            >
              Fitness Journey
            </motion.span>
            with AI
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Experience the future of fitness tracking with our AI-powered dashboard.
            Get real-time insights, personalized recommendations, and track every aspect of your health.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link to="/workouts">
              <Button 
                className="bg-gradient-to-r from-fitness-orange to-amber-500 hover:from-fitness-orange/90 hover:to-amber-500/90 text-white rounded-full px-8 py-6 text-lg font-medium border-0 shadow-lg shadow-fitness-orange/20"
                size="lg"
              >
                <span>Explore Dashboard</span>
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/nutrition">
              <Button 
                className="bg-black/20 backdrop-blur-xl hover:bg-white/10 text-white border border-white/10 rounded-full px-8 py-6 text-lg font-medium"
                variant="outline"
                size="lg"
              >
                <span>Learn More</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="mt-12 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-fitness-orange/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <motion.div
                className="rounded-2xl overflow-hidden bg-fitness-dark/80 backdrop-blur-md border border-white/10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <img 
                  src="/lovable-uploads/8b8fa8bd-4643-44e5-acfc-80b7b2aca568.png" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div 
            className="animate-bounce cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <ChevronRight className="w-8 h-8 text-white/50 rotate-90" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Advanced Features for <span className="text-fitness-orange">Elite Performance</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our fitness dashboard combines cutting-edge technology with intuitive design to deliver 
            the most comprehensive fitness tracking experience available.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 hover:shadow-fitness-orange/20 hover:border-fitness-orange/30"
              whileHover={{ 
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="mb-4 rounded-xl bg-gradient-to-br from-fitness-dark to-black p-3 inline-block"
                whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <motion.section 
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fitness-orange/30 to-purple-500/30 opacity-20"></div>
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.03
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your <span className="text-fitness-orange">Fitness Experience?</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Join thousands of users who are already achieving their fitness goals with our 
            intelligent tracking and personalized insights.
          </motion.p>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/">
              <Button 
                className="bg-gradient-to-r from-fitness-orange to-amber-500 hover:from-fitness-orange/90 hover:to-amber-500/90 text-white rounded-full px-8 py-6 text-lg font-bold shadow-xl shadow-fitness-orange/20"
                size="lg"
              >
                <span>Get Started Now</span>
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-10 bg-black/50 backdrop-blur-md border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/50 text-sm">
            © 2025 FitDash AI. All rights reserved. The ultimate fitness companion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
