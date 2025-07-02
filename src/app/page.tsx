"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaBootstrap, FaAngular, FaArrowUp, FaChevronDown, FaPython, FaJs, FaCheck, FaExclamationTriangle } from "react-icons/fa";
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
  
  // Databases
  { Icon: SiMongodb, name: "MongoDB", category: "Database" },
  { Icon: SiPostgresql, name: "PostgreSQL", category: "Database" },
  
  // Languages & Tools
  { Icon: FaJs, name: "JavaScript", category: "Language" },
  { Icon: SiTypescript, name: "TypeScript", category: "Language" },
  { Icon: FaPython, name: "Python", category: "Language" },
  { Icon: SiFlutter, name: "Flutter", category: "Mobile" },
  { Icon: SiDart, name: "Dart", category: "Mobile" },
  { Icon: FaDocker, name: "Docker", category: "DevOps" }
];

const projects = [
  { 
    title: "CreditFlowPulse", 
    description: "A comprehensive credit management and financial analytics platform that provides real-time credit monitoring, risk assessment, and financial insights. Features include credit score tracking, payment reminders, and predictive analytics for financial planning.",
    tech: "React, Python, Django, ORM, PostgreSQL", 
    demo: "https://creditflowpulse-frontend.vercel.app/", 
    github: "https://github.com/sahelii/CreditFlowPulse",
    image: "/projects/creditFlowPulse.png",
    imageAlt: "CreditFlowPulse Platform Preview"
  },
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

// Resume link is now handled by the download function

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

// Professional responsive navigation component
const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled
      setIsScrolled(window.scrollY > 50);
      
      // Update active section
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

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Saheli Mahapatra
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="hidden md:block"
          >
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="md:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/20 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
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
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [downloadingResume, setDownloadingResume] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const validateForm = (formData: FormData) => {
    const errors: { [key: string]: string } = {};
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    return errors;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormErrors({});

    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setFormStatus('error');
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/manozyzk', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      const result = await response.json();
      console.log('Formspree response:', result);
      
      if (response.ok && result.ok) {
        setFormStatus('success');
        e.currentTarget.reset();
      } else {
        console.error('Formspree error:', result);
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  const handleResumeDownload = () => {
    setDownloadingResume(true);
    // Simulate download time
    setTimeout(() => {
      setDownloadingResume(false);
    }, 1000);
  };

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
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden pt-16">
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
              Hi, I&apos;m
            </motion.h2>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-x">
              Saheli
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
              <button
                onClick={handleResumeDownload}
                disabled={downloadingResume}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-900 dark:text-white rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {downloadingResume ? 'Downloading...' : 'Download Resume'}
              </button>
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-light dark:to-background-dark" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="text-left">
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                I&apos;m a passionate Full Stack Developer with expertise in MERN, .NET, and PostgreSQL. I love building modern, scalable applications that make a difference.
              </p>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                With experience in government systems, ERP platforms, and fintech applications, I specialize in creating robust backend architectures and intuitive user interfaces.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>15+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Full Stack Expertise</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">9.78</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">CGPA</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-background-light to-background-light dark:from-background-dark dark:to-background-dark" />
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
          <motion.button
            onClick={handleResumeDownload}
            disabled={downloadingResume}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: downloadingResume ? 1 : 1.05 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`inline-block px-8 py-4 rounded-full transition-all duration-300 transform font-medium ${
              downloadingResume
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow hover:scale-105'
            }`}
          >
            {downloadingResume ? 'Downloading...' : 'Download Full Resume'}
          </motion.button>

          {/* Experience Timeline */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 overflow-hidden">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-secondary hidden md:block"></div>
              
              {/* Timeline items */}
              <div className="space-y-8 md:space-y-12">
                {/* SISL Infotech Pvt Ltd (NIC) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center md:items-start flex-col md:flex-row"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white/20 hidden md:block"></div>
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right text-center md:text-left mb-4 md:mb-0">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                      Software Engineer – SISL Infotech
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
                      Developing secure REST APIs, integrating RabbitMQ for async processing, and managing PostgreSQL-based flows in GRIPS 3.0 for government revenue systems.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Farvision ERP */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center md:items-start flex-col md:flex-row md:justify-end"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white/20 hidden md:block"></div>
                  <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left mb-4 md:mb-0">
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
                      Contributed to core ERP product modules with a focus on backend-heavy architecture, workflow automation, and data consistency across dynamic form systems.
                    </motion.p>
                  </div>
                </motion.div>

                {/* ARC Document Solutions */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center md:items-start flex-col md:flex-row"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white/20 hidden md:block"></div>
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right text-center md:text-left mb-4 md:mb-0">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                      SDE Intern – ARC
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
                  className="relative flex items-center md:items-start flex-col md:flex-row md:justify-end"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white/20 hidden md:block"></div>
                  <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left mb-4 md:mb-0">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                      SDE Intern – Basel
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
                      Worked on a farmer-first mobile platform, delivering backend systems that supported geolocation, personalized access, and real-time data flows.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center md:items-start flex-col md:flex-row"
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-white/20 hidden md:block"></div>
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right text-center md:text-left mb-4 md:mb-0">
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
            onSubmit={handleFormSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg mx-auto mb-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 flex flex-col gap-6"
          >
            <div className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  required
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 ${
                    formErrors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20'
                  }`}
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <FaExclamationTriangle className="text-xs" />
                    {formErrors.name}
                  </p>
                )}
              </div>
              
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  required
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 ${
                    formErrors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20'
                  }`}
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <FaExclamationTriangle className="text-xs" />
                    {formErrors.email}
                  </p>
                )}
              </div>
              
              <div>
                <textarea 
                  name="message"
                  placeholder="Message" 
                  rows={4} 
                  required
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 resize-none ${
                    formErrors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-white/20'
                  }`}
                />
                {formErrors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <FaExclamationTriangle className="text-xs" />
                    {formErrors.message}
                  </p>
                )}
              </div>
            </div>
            
            {/* Form Status Messages */}
            {formStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-600 dark:text-green-400"
              >
                <FaCheck className="text-sm" />
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}
            
            {formStatus === 'error' && Object.keys(formErrors).length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2 text-red-600 dark:text-red-400"
              >
                <FaExclamationTriangle className="text-sm" />
                Something went wrong. Please try again later or contact me directly at saheliofficial22@gmail.com
              </motion.div>
            )}
            
            <motion.button 
              type="submit" 
              disabled={formStatus === 'loading'}
              whileHover={{ scale: formStatus === 'loading' ? 1 : 1.02 }}
              whileTap={{ scale: formStatus === 'loading' ? 1 : 0.98 }}
              className={`px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium ${
                formStatus === 'loading'
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-glow'
              }`}
            >
              {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
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

      {/* Footer */}
      <footer className="relative py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 md:mb-0"
            >
              <p className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Saheli Mahapatra
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Full Stack Developer
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex gap-6"
            >
              {socialLinks.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 pt-8 border-t border-gray-700 text-center"
          >
            <p className="text-sm text-gray-400">
              © 2024 Saheli Mahapatra. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

// Add smooth scroll behavior to the entire page
if (typeof document !== 'undefined') {
  document.documentElement.style.scrollBehavior = 'smooth';
}
