"use client";

import { motion, useScroll, useSpring, useAnimationControls } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaBootstrap, FaAngular, FaJava, FaArrowUp, FaChevronDown, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiDotnet, SiPostgresql, SiTailwindcss, SiTypescript, SiExpress, SiFlutter, SiDart } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Image from "next/image";
import { useState, useEffect } from "react";

const techIcons = [
  // Frontend
  { Icon: FaHtml5, name: "HTML5", category: "Frontend" },
  { Icon: FaCss3Alt, name: "CSS3", category: "Frontend" },
  { Icon: FaBootstrap, name: "Bootstrap", category: "Frontend" },
  { Icon: SiTailwindcss, name: "TailwindCSS", category: "Frontend" },
  { Icon: FaReact, name: "React", category: "Frontend" },
  { Icon: FaAngular, name: "Angular", category: "Frontend" },
  { Icon: SiNextdotjs, name: "Next.js", category: "Frontend" },
  
  // Backend
  { Icon: FaNodeJs, name: "Node.js", category: "Backend" },
  { Icon: SiExpress, name: "Express.js", category: "Backend" },
  { Icon: SiDotnet, name: ".NET", category: "Backend" },
  { Icon: FaJava, name: "Java", category: "Backend" },
  { Icon: FaPython, name: "Python", category: "Backend" },
  
  // Databases
  { Icon: SiMongodb, name: "MongoDB", category: "Database" },
  { Icon: SiPostgresql, name: "PostgreSQL", category: "Database" },
  
  // Languages & Tools
  { Icon: SiTypescript, name: "TypeScript", category: "Language" },
  { Icon: SiFlutter, name: "Flutter", category: "Mobile" },
  { Icon: SiDart, name: "Dart", category: "Mobile" },
  { Icon: FaDocker, name: "Docker", category: "DevOps" }
];

const projects = [
  { 
    title: "Blog Application", 
    description: "A full-stack blog application with user authentication, CRUD operations, and responsive design. Features include user profiles, post creation, comments, and real-time updates.",
    tech: "React, Node.js, MongoDB, Express, JWT", 
    demo: "https://blog-frontend-sigma-ecru.vercel.app/", 
    github: "https://github.com/sahelii/blog-frontend",
    image: "/projects/blog-app.gif",
    imageAlt: "Blog Application Preview"
  },
  { 
    title: "Fitness Tracker", 
    description: "An interactive fitness application that provides access to over 1000 exercises with detailed instructions and video demonstrations. Features include exercise categorization, search functionality, and YouTube video integration.",
    tech: "React, Material UI, RapidAPI, Axios", 
    demo: "https://fitness-saheli.netlify.app/", 
    github: "https://github.com/sahelii/fitness-app",
    image: "/projects/fitness-app.png",
    imageAlt: "Fitness Tracker Preview"
  },
  { 
    title: "Flappy Bird", 
    description: "A modern implementation of the classic Flappy Bird game using HTML5 Canvas and JavaScript. Features include score tracking, responsive design, and smooth animations.",
    tech: "JavaScript, HTML5 Canvas, CSS", 
    demo: "https://sahelii.github.io/flappy_bird/", 
    github: "https://github.com/sahelii/flappy_bird",
    image: "/projects/flappy-bird.gif",
    imageAlt: "Flappy Bird Game Preview"
  }
];

const resumeLink = "/resume.pdf";

const socialLinks = [
  { Icon: FaGithub, url: "https://github.com/sahelii", label: "GitHub" },
  { Icon: FaLinkedin, url: "https://www.linkedin.com/in/saheli-mahapatra-83b759202", label: "LinkedIn" },
  { Icon: FaEnvelope, url: "mailto:saheliofficial22@gmail.com", label: "Email" }
];

// Add loading state
const LoadingState = () => (
  <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
    />
  </div>
);

// Add scroll to top button
const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={scrollToTop}
          className="p-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-glow transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-50"
        style={{ scaleX }}
      />
    </>
  );
};

// Comment out current work section
/*
const currentWork = {
  title: "Currently Working On",
  projects: [
    {
      name: "Task Management System",
      description: "Building a full-stack task management application with real-time updates, team collaboration, and analytics dashboard. Features include task assignment, progress tracking, deadline management, and team performance metrics.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express.js", "TailwindCSS"],
      progress: 75
    },
    {
      name: "E-commerce Platform",
      description: "Developing a modern e-commerce platform with features like product catalog, shopping cart, payment integration, order tracking, and admin dashboard. Focus on performance optimization and user experience.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", ".NET", "Docker", "Stripe API"],
      progress: 45
    }
  ]
};
*/

// Add navigation items
const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" }
];

// Add floating navigation component
const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("");
  const controls = useAnimationControls();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg">
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-gray-600 dark:text-gray-300 hover:text-primary"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

// Add scroll down indicator
const ScrollDownIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.5, duration: 0.5 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
  >
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll to explore</p>
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <FaChevronDown className="text-primary mx-auto" />
    </motion.div>
  </motion.div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

  // Updated particle options for a more dynamic effect
  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" }
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 }
      },
      resize: true
    },
    particles: {
      color: { value: ["#7c3aed", "#06b6d4", "#ec4899"] },
      links: {
        color: "#7c3aed",
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: { default: "bounce" as const },
        random: true,
        speed: 1,
        straight: false
      },
      number: {
        density: { enable: true, area: 800 },
        value: 50
      },
      opacity: {
        value: 0.5,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1
        }
      },
      shape: {
        type: ["circle", "triangle", "square"]
      },
      size: {
        value: { min: 1, max: 3 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.1
        }
      }
    },
    detectRetina: true
  };

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <FloatingNav />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden">
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          init={loadSlim}
          options={particlesOptions}
        />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-2xl md:text-3xl mb-4 text-gray-700 dark:text-gray-300"
            >
              Hi, I'm
            </motion.h2>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-x">
              Saheli Mahapatra
            </h1>
            <div className="text-2xl md:text-3xl mb-8 font-light text-gray-700 dark:text-gray-300">
              <Typewriter
                words={["Full Stack Developer", "MERN Stack | .NET | PostgreSQL", "Problem Solver", "Tech Explorer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-glow transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Contact Me
              </a>
              <a
                href={resumeLink}
                download
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-900 dark:text-white rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-6 mt-8"
          >
            {socialLinks.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
                aria-label={label}
              >
                <Icon className="text-2xl text-primary" />
              </a>
            ))}
          </motion.div>
        </div>
        <ScrollDownIndicator />
      </section>

      {/* About Me Section */}
      <section id="about" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-12 text-center text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            I am a passionate Full Stack Developer with expertise in MERN, .NET, and PostgreSQL. I love building modern, scalable applications that make a difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {Object.entries(
              techIcons.reduce((acc, tech) => {
                if (!acc[tech.category]) acc[tech.category] = [];
                acc[tech.category].push(tech);
                return acc;
              }, {} as Record<string, typeof techIcons>)
            ).map(([category, techs]) => (
              <div key={category} className="col-span-full">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {techs.map(({ Icon, name }, index) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group relative flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:shadow-glow transition-all duration-300"
                    >
                      <Icon className="text-4xl mb-3 text-primary" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <p className="font-semibold mb-2">Proficiency Level</p>
                          <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileHover={{ width: "85%" }}
                              className="h-full bg-white rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Updated Layout */}
      <section id="skills" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background-light/50 to-background-light dark:from-background-dark/50 dark:to-background-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            Skills & Expertise
          </motion.h2>
          
          {/* Skills Grid with Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(
              techIcons.reduce((acc, tech) => {
                if (!acc[tech.category]) acc[tech.category] = [];
                acc[tech.category].push(tech);
                return acc;
              }, {} as Record<string, typeof techIcons>)
            ).map(([category, techs]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {techs.map(({ Icon, name }, index) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group relative flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <Icon className="text-2xl text-primary" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-2">
                          <div className="w-24 h-1.5 bg-white/20 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileHover={{ width: "85%" }}
                              className="h-full bg-white rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background-light via-background-light/50 to-background-light dark:from-background-dark dark:via-background-dark/50 dark:to-background-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500"
              >
                {/* Project Image Container */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i === 0}
                    unoptimized={proj.image.endsWith('.gif')}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                    <div className="flex gap-4">
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
                        aria-label="View Live Demo"
                      >
                        <FaExternalLinkAlt className="text-xl text-white" />
                      </a>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 hover:shadow-glow"
                        aria-label="View Source Code"
                      >
                        <FaGithub className="text-xl text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{proj.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.split(", ").map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/20 text-primary-dark dark:text-primary-light rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-center rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                    >
                      Live Demo
                    </a>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-900 dark:text-white text-center rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 text-sm font-medium"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background-light to-background-light dark:from-background-dark dark:to-background-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            Resume
          </motion.h2>
          <motion.a
            href={resumeLink}
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-glow transition-all duration-300 transform hover:scale-105 font-medium"
          >
            Download Full Resume
          </motion.a>

          {/* Experience Timeline */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 overflow-hidden">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* SISL Infotech Pvt Ltd (NIC) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white/20"></div>
                  <div className="w-1/2 pr-8 text-right">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                      Software Engineer – NIC
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      Aug 2024 – Present
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-2 text-gray-700 dark:text-gray-300"
                    >
                      Building robust REST APIs, optimizing backend performance, and managing large-scale ETL pipelines.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Farvision ERP */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center justify-end"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white/20"></div>
                  <div className="w-1/2 pl-8">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                      Associate Software Engineer – Farvision ERP
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      Jun 2024 – Aug 2024
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-2 text-gray-700 dark:text-gray-300"
                    >
                      Developed Angular/.NET modules and form-based UIs for ERP systems with SQL Server backend.
                    </motion.p>
                  </div>
                </motion.div>

                {/* ARC Document Solutions */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white/20"></div>
                  <div className="w-1/2 pr-8 text-right">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                      Software Developer Intern – ARC
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      Dec 2023 – May 2024
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-2 text-gray-700 dark:text-gray-300"
                    >
                      Designed databases and APIs in Node.js, enabling smooth ETL flows and analytics processing.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Basel Practitioners */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center justify-end"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white/20"></div>
                  <div className="w-1/2 pl-8">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                      Technical Developer Intern – Basel
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      Nov 2022 – Mar 2023
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-2 text-gray-700 dark:text-gray-300"
                    >
                      Built Node.js APIs and integrated geolocation for real-time data in a farmer-focused mobile app.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white/20"></div>
                  <div className="w-1/2 pr-8 text-right">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                      B.Tech in Computer Science
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      2020 – 2024
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-2 text-gray-700 dark:text-gray-300"
                    >
                      Graduated with 9.78 CGPA from GCCET, Kolkata.
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background-light to-background-light dark:from-background-dark dark:to-background-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            Contact
          </motion.h2>
          <motion.form 
            action="https://formspree.io/f/manozyzk" 
            method="POST"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md mx-auto mb-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col gap-6"
          >
            <div className="space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300" 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300" 
              />
              <textarea 
                name="message"
                placeholder="Message" 
                rows={4} 
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none"
              />
            </div>
            <motion.button 
              type="submit" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-glow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map(({ Icon, url, label }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:shadow-glow"
                aria-label={label}
              >
                <Icon className="text-2xl text-primary" />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center text-sm text-gray-600 dark:text-gray-400"
          >
            Phone: +91 7872072648
          </motion.p>
        </div>
      </section>
    </div>
  );
}

// Add smooth scroll behavior to the entire page
if (typeof document !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}
