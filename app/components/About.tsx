"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: <Layout className="text-indigo-400 mb-4" size={32} />, desc: "HTML, CSS, JavaScript, React, Next.js, Tailwind CSS" },
  { name: "Backend Development", icon: <Database className="text-purple-400 mb-4" size={32} />, desc: "Node.js, Express, MongoDB, SQL" },
  { name: "Tools & Technologies", icon: <Terminal className="text-blue-400 mb-4" size={32} />, desc: "Git, GitHub, VS Code, Figma, Postman" },
  { name: "Programming", icon: <Code2 className="text-emerald-400 mb-4" size={32} />, desc: "Python, Java, C++" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About <span className="text-indigo-500">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col max-w-4xl mx-auto gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
              Get to know me
            </h3>
            <div className="space-y-5 text-slate-300 text-lg leading-relaxed text-left md:text-center">
              <p>
                I am an Information Technology student driven by a deep passion for web development and software engineering. What began as a simple curiosity about the digital world has evolved into a dedicated career path.
              </p>
              <p>
                Currently, I am expanding my expertise in modern frontend and backend technologies, striving to become a highly versatile <span className="text-indigo-400 font-semibold">Full-Stack Developer</span>. I thrive on solving complex challenges and engineering applications that are not only robust but also deliver seamless, intuitive user experiences.
              </p>
              <p>
                My ultimate vision is to leverage technology to solve real-world problems, specifically focusing on building innovative web solutions and exploring the ever-evolving landscape of cybersecurity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 p-6 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-800/60 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10 flex flex-col items-center text-center"
              >
                {skill.icon}
                <h4 className="text-xl font-semibold text-white mb-2">{skill.name}</h4>
                <p className="text-slate-400 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
