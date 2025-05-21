"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiDotnet, SiPostgresql } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Image from "next/image";

const techIcons = [
  { Icon: FaReact, name: "React" },
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: FaNodeJs, name: "Node" },
  { Icon: SiMongodb, name: "MongoDB" },
  { Icon: SiDotnet, name: ".NET" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: FaDocker, name: "Docker" }
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

export default function Home() {
  // Particle options for a light, subtle effect
  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: { events: { onClick: { enable: false }, onHover: { enable: false } }, resize: true },
    particles: {
      color: { value: "#b3b3b3" },
      links: { enable: true, color: "#e0e0e0", distance: 120, opacity: 0.3, width: 1 },
      move: { 
        enable: true, 
        speed: 0.5, 
        direction: "none" as const, 
        outModes: { default: "bounce" as const } 
      },
      number: { value: 40, density: { enable: true, area: 800 } },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          init={loadSlim}
          options={particlesOptions}
        />
        <div className="relative z-10 w-full flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl font-bold mb-2"
          >
            Saheli Mahapatra
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl mb-4"
          >
            <Typewriter
              words={["Full Stack Developer", "MERN Stack | .NET | PostgreSQL", "Problem Solver", "Tech Explorer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-4"
          >
            <a href="#contact" className="px-4 py-2 bg-blue-500 text-white rounded hover-transition hover:bg-blue-600">Contact Me</a>
            <a href={resumeLink} download className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded hover-transition hover:bg-gray-300 dark:hover:bg-gray-700">Download Resume</a>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-2xl mx-auto mb-8">I am a passionate Full Stack Developer with expertise in MERN, .NET, and PostgreSQL. I love building modern, scalable applications.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {techIcons.map(({ Icon, name }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-2"
            >
              <Icon className="text-4xl" />
              <span className="mt-1">{name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover-transition group"
            >
              {/* Project Image Container */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i === 0}
                  unoptimized={proj.image.endsWith('.gif')}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    <a 
                      href={proj.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
                      aria-label="View Source Code"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{proj.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.split(", ").map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
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
                    className="flex-1 px-4 py-2 bg-blue-500 text-white text-center rounded-lg hover-transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm font-medium"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white text-center rounded-lg hover-transition hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm font-medium"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Resume
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          Download my resume to learn more about my experience.
        </motion.p>
        <motion.a
          href={resumeLink}
          download="Saheli_Mahapatra_Resume.pdf"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover-transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Download Resume
        </motion.a>

        {/* Enhanced Visual Timeline */}
        <div className="mt-16 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
  {/* SISL Infotech Pvt Ltd (NIC) */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="relative flex items-center"
  >
    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
    <div className="w-1/2 pr-8 text-right">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold text-blue-600 dark:text-blue-400"
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
        className="mt-2"
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
    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
    <div className="w-1/2 pl-8">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold text-blue-600 dark:text-blue-400"
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
        className="mt-2"
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
    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
    <div className="w-1/2 pr-8 text-right">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold text-blue-600 dark:text-blue-400"
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
        className="mt-2"
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
    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
    <div className="w-1/2 pl-8">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold text-blue-600 dark:text-blue-400"
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
        className="mt-2"
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
    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800"></div>
    <div className="w-1/2 pr-8 text-right">
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl font-bold text-blue-600 dark:text-blue-400"
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
        className="mt-2"
      >
        Graduated with 9.78 CGPA from GCCET, Kolkata.
      </motion.p>
    </div>
  </motion.div>
</div>

          </motion.div>
        </div>
      </section>

      {/* Education Section (Optional) */}
      <section id="education" className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <p>B.Tech CSE (2024)</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form 
          action="https://formspree.io/f/manozyzk" 
          method="POST"
          className="max-w-md mx-auto mb-8"
        >
          <div className="mb-4">
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700" 
            />
          </div>
          <div className="mb-4">
            <textarea 
              name="message"
              placeholder="Message" 
              rows={4} 
              required
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
          <button 
            type="submit" 
            className="px-6 py-2 bg-blue-500 text-white rounded hover-transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-4">
          {socialLinks.map(({ Icon, url, label }) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover-transition"
              aria-label={label}
            >
              <Icon className="text-2xl" />
            </motion.a>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <p>Phone: +91 7872072648</p>
        </div>
      </section>
    </div>
  );
}
