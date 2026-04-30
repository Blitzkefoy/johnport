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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get to know me</h3>
            <div className="space-y-4 text-slate-400 text-lg">
              <p>
                I am an Information Technology student with a strong passion for web development and software engineering. My journey in tech started with a curiosity about how things work on the internet, and it has evolved into a career path that I am deeply committed to.
              </p>
              <p>
                Currently, I am honing my skills in modern frontend and backend technologies, aiming to become a versatile Full-Stack Developer. I enjoy tackling complex challenges and building applications that are not just functional, but also provide a seamless user experience.
              </p>
              <p>
                My ultimate goal is to leverage technology to solve real-world problems and contribute to innovative projects in the tech industry, specifically in web development and cybersecurity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -5 }}
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-indigo-500/50 transition-colors"
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
