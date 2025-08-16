import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated SVG Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(195 100% 50%)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(240 100% 60%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(180 100% 50%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Flowing Lines */}
        <motion.path
          d="M0,100 Q200,50 400,200 T800,150 L1200,100"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            strokeDashoffset: [0, -50, -100]
          }}
          transition={{ 
            pathLength: { duration: 3, ease: "easeInOut" },
            opacity: { duration: 1 },
            strokeDashoffset: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />

        <motion.path
          d="M1200,300 Q1000,150 800,400 T400,350 L0,300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8,8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.7,
            strokeDashoffset: [0, 50, 100]
          }}
          transition={{ 
            pathLength: { duration: 3, delay: 0.5, ease: "easeInOut" },
            opacity: { duration: 1, delay: 0.5 },
            strokeDashoffset: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
        />

        <motion.path
          d="M0,600 Q300,450 600,650 T1200,600"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="5,10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.5,
            strokeDashoffset: [0, -30, -60]
          }}
          transition={{ 
            pathLength: { duration: 3, delay: 1, ease: "easeInOut" },
            opacity: { duration: 1, delay: 1 },
            strokeDashoffset: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Connecting Nodes */}
        <motion.circle
          cx="200"
          cy="150"
          r="4"
          fill="hsl(195 100% 50%)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="animate-pulse-glow"
        />
        
        <motion.circle
          cx="800"
          cy="300"
          r="3"
          fill="hsl(180 100% 50%)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="animate-pulse-glow"
        />

        <motion.circle
          cx="600"
          cy="500"
          r="5"
          fill="hsl(240 100% 60%)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="animate-pulse-glow"
        />
      </svg>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-lg"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-12 h-12 bg-accent/10 rotate-45"
        animate={{ 
          y: [0, 40, 0],
          rotate: [45, 225, 405],
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-8 h-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"
        animate={{ 
          x: [0, 60, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-6 h-20 bg-secondary/30 rounded-full"
        animate={{ 
          rotate: [0, 360],
          y: [0, -25, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;