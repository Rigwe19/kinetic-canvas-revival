import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Vue.js", level: 90, color: "from-green-500 to-teal-500" },
        { name: "Angular", level: 85, color: "from-blue-600 to-blue-400" },
        { name: "Svelte", level: 88, color: "from-yellow-700 to-red-500" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Laravel", level: 98, color: "from-red-500 to-orange-500" },
        { name: "adonis.js", level: 92, color: "from-green-600 to-green-400" },
        { name: "Ts.Ed", level: 90, color: "from-white to-orange-400" },
        { name: "Express", level: 95, color: "from-purple-600 to-purple-400" },
      ]
    },
    {
      title: "Mobile & Desktop",
      skills: [
        { name: "React Native", level: 85, color: "from-blue-500 to-indigo-500" },
        { name: "Ionic", level: 88, color: "from-blue-400 to-blue-600" },
        { name: "Electron", level: 82, color: "from-teal-500 to-cyan-500" },
        { name: "Flutter", level: 75, color: "from-blue-400 to-blue-700" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 93, color: "from-orange-500 to-yellow-500" },
        { name: "PostgreSQL", level: 88, color: "from-blue-600 to-indigo-600" },
        { name: "MongoDB", level: 85, color: "from-green-600 to-green-800" },
        { name: "Docker", level: 80, color: "from-blue-500 to-blue-700" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            8+ years of experience across modern web technologies, frameworks, and development tools
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="space-y-6"
              variants={categoryVariants}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 relative">
                {category.title}
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60px" }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                />
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    variants={skillVariants}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-sm text-muted-foreground font-mono"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                      
                      {/* Glowing effect */}
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full opacity-50 blur-sm`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />

                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Full Stack Expertise
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Specialized in creating <span className="text-primary font-semibold">RESTful APIs</span>, 
              building responsive frontends, and implementing <span className="text-accent font-semibold">scalable architectures</span>. 
              Experienced with both monolithic and microservice approaches, including <span className="text-primary font-semibold">InertiaJS</span> for 
              seamless full-stack development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;