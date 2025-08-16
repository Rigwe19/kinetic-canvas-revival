import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Online Hospital Management System",
      description: "Complete hospital management solution from drugs to patients with Laravel Vue3 architecture",
      tech: ["Laravel", "Vue3", "MySQL", "API"],
      gradient: "from-blue-500/20 to-purple-500/20",
      image: "🏥"
    },
    {
      title: "Multi-Vendor E-commerce",
      description: "Scalable multi-vendor e-commerce platform with mobile app support",
      tech: ["Ionic", "React", "Laravel", "Payment Integration"],
      gradient: "from-green-500/20 to-blue-500/20",
      image: "🛒"
    },
    {
      title: "Online Blog Platform",
      description: "Modern blog platform with real-time features and social interactions",
      tech: ["Laravel", "React", "Jetstream", "InertiaJS"],
      gradient: "from-purple-500/20 to-pink-500/20",
      image: "📝"
    },
    {
      title: "Factory Management System",
      description: "Comprehensive factory operations management with IoT integration",
      tech: ["Ionic", "React", "Laravel", "IoT"],
      gradient: "from-orange-500/20 to-red-500/20",
      image: "🏭"
    },
    {
      title: "Real Estate Platform",
      description: "Property management and listing platform with virtual tours",
      tech: ["Next.js", "Node.js", "MongoDB", "3D Visualization"],
      gradient: "from-teal-500/20 to-blue-500/20",
      image: "🏠"
    },
    {
      title: "Learning Management System",
      description: "Educational platform with video streaming and progress tracking",
      tech: ["React", "Express.js", "PostgreSQL", "WebRTC"],
      gradient: "from-indigo-500/20 to-purple-500/20",
      image: "🎓"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Apps I've Built
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I have successfully built the following applications, showcasing expertise across different technologies and domains
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <motion.div
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image}
                    </motion.div>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    className="w-full h-1 bg-secondary rounded-full overflow-hidden"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold glow-primary transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View All Projects on GitHub
            <Github className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;