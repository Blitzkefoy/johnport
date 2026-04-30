"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    title: "SQL (Basic)",
    organization: "HackerRank",
    date: "12 Dec, 2024",
    image: "/certificates/sql-basic.jpg",
    color: "from-green-500/20 to-emerald-500/0",
    borderColor: "group-hover:border-green-500/50"
  },
  {
    title: "Getting Started with Full Stack Java Development",
    organization: "Simplilearn",
    date: "8th April 2026",
    image: "/certificates/java-fullstack.jpg",
    color: "from-blue-500/20 to-cyan-500/0",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    title: "Introduction to Front End Development",
    organization: "Simplilearn",
    date: "7th April 2026",
    image: "/certificates/frontend-intro.jpg",
    color: "from-yellow-500/20 to-orange-500/0",
    borderColor: "group-hover:border-yellow-500/50"
  },
  {
    title: "Advanced SQL",
    organization: "Great Learning Academy",
    date: "October 2024",
    image: "/certificates/advanced-sql.jpg",
    color: "from-purple-500/20 to-pink-500/0",
    borderColor: "group-hover:border-purple-500/50"
  }
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-indigo-500">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 p-3 bg-slate-800/80 hover:bg-indigo-500 text-white rounded-full backdrop-blur-sm transition-all shadow-xl hover:scale-110"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 p-3 bg-slate-800/80 hover:bg-indigo-500 text-white rounded-full backdrop-blur-sm transition-all shadow-xl hover:scale-110"
            aria-label="Next certificate"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden rounded-2xl py-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {certificates.map((cert, index) => (
                <div key={index} className="w-full shrink-0 px-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-3xl overflow-hidden transition-all duration-300 group hover:shadow-2xl hover:shadow-indigo-500/10 ${cert.borderColor} mx-auto`}
                  >
                    {/* Image Container */}
                    <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-slate-800">
                      <div className={`absolute inset-0 bg-gradient-to-b ${cert.color} z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="absolute inset-0 flex items-center justify-center text-slate-500 text-sm z-0">
                        Image loading...
                      </div>
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-contain bg-slate-900 transition-transform duration-700 group-hover:scale-105 relative z-0 p-2"
                      />
                    </div>

                    {/* Content Container */}
                    <div className="p-6 md:p-8 relative">
                      <div className="absolute top-0 right-6 md:right-8 -translate-y-1/2 p-3 md:p-4 bg-slate-900 border border-slate-700 rounded-xl group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:text-white text-indigo-400 transition-colors duration-300 shadow-xl">
                        <Award size={28} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 pr-16 line-clamp-2 md:line-clamp-none">
                        {cert.title}
                      </h3>
                      
                      <p className="text-indigo-400 font-medium mb-6 text-lg">
                        {cert.organization}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800/80">
                        <div className="flex items-center gap-2 text-slate-400">
                          <Calendar size={18} />
                          <span className="font-medium text-sm md:text-base">{cert.date}</span>
                        </div>
                        
                        <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-500 group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                          Verified <ExternalLink size={14} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 gap-3">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index 
                    ? 'w-8 h-2.5 bg-indigo-500' 
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
