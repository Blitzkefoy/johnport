"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Online Hotel Reservation System for CRIS INN",
    role: "Full-Stack Developer",
    description: "A comprehensive online hotel reservation system designed to streamline bookings, manage rooms, and enhance customer experience.",
    tech: ["PHP", "CSS", "MySQL", "JavaScript"],
    github: "https://github.com/Blitzkefoy/crissinn2",
    live: "",
    image: "bg-gradient-to-br from-amber-500 to-orange-600",
    imageSrc: "/cris-inn.png",
  },
  {
    title: "Fitsense: An AI-Powered Mobile Application for Basketball Injury Risk Prediction and Conditioning",
    role: "Front-End Developer and Documentation",
    description: "An AI-powered mobile application designed to predict basketball injury risks and provide tailored conditioning programs for athletes.",
    tech: ["React Native"],
    github: "",
    live: "",
    image: "bg-gradient-to-br from-blue-600 to-indigo-900",
    imageSrc: "/fitsense-logo.jpg",
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

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] max-w-md bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group hover:border-indigo-500/50 transition-colors flex flex-col"
            >
              {/* Image Placeholder */}
              <div className={`h-48 w-full ${project.imageSrc ? 'bg-white' : project.image} relative overflow-hidden flex items-center justify-center`}>
                {project.imageSrc && (
                  <Image 
                    src={project.imageSrc} 
                    alt={project.title} 
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm bg-black/30 z-20">
                  <span className="text-white font-semibold flex items-center gap-2">View Project <ExternalLink size={16} /></span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                {project.role && (
                  <p className="text-indigo-400 font-medium text-sm mb-3">Role: {project.role}</p>
                )}
                <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-800 text-indigo-300 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                      <FaGithub size={18} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors ml-auto">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
