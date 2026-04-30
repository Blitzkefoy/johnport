"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, cart functionality, and payment gateway integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    image: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    title: "Task Management App",
    description: "A productivity tool allowing users to create, organize, and track tasks using a Kanban board interface with drag-and-drop features.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    image: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built to showcase my skills, projects, and professional background. Features smooth animations and dark mode.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "bg-gradient-to-br from-purple-500 to-pink-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-indigo-500">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-indigo-500/50 transition-colors flex flex-col"
            >
              {/* Image Placeholder */}
              <div className={`h-48 w-full ${project.image} relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm bg-black/30">
                    <span className="text-white font-semibold flex items-center gap-2">View Project <ExternalLink size={16} /></span>
                 </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-800 text-indigo-300 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors ml-auto">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
