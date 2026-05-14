"use client";

import { motion } from "framer-motion";
import { SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit, SiGithub, SiFigma, SiPostman, SiPython, SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const techStack = [
  { Icon: SiHtml5, color: "group-hover:text-[#E34F26]", name: "HTML5" },
  { Icon: SiCss, color: "group-hover:text-[#1572B6]", name: "CSS3" },
  { Icon: SiJavascript, color: "group-hover:text-[#F7DF1E]", name: "JavaScript" },
  { Icon: SiReact, color: "group-hover:text-[#61DAFB]", name: "React" },
  { Icon: SiNextdotjs, color: "group-hover:text-white", name: "Next.js" },
  { Icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]", name: "Tailwind CSS" },
  { Icon: SiNodedotjs, color: "group-hover:text-[#339933]", name: "Node.js" },
  { Icon: SiExpress, color: "group-hover:text-white", name: "Express" },
  { Icon: SiMongodb, color: "group-hover:text-[#47A248]", name: "MongoDB" },
  { Icon: SiPostgresql, color: "group-hover:text-[#4169E1]", name: "SQL" },
  { Icon: SiGit, color: "group-hover:text-[#F05032]", name: "Git" },
  { Icon: SiGithub, color: "group-hover:text-white", name: "GitHub" },
  { Icon: VscVscode, color: "group-hover:text-[#007ACC]", name: "VS Code" },
  { Icon: SiFigma, color: "group-hover:text-[#F24E1E]", name: "Figma" },
  { Icon: SiPostman, color: "group-hover:text-[#FF6C37]", name: "Postman" },
  { Icon: SiPython, color: "group-hover:text-[#3776AB]", name: "Python" },
  { Icon: FaJava, color: "group-hover:text-[#007396]", name: "Java" },
  { Icon: SiCplusplus, color: "group-hover:text-[#00599C]", name: "C++" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

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

        <div className="flex flex-col max-w-5xl mx-auto gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
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

          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-10">My Tech Stack</h3>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl"
            >
              {techStack.map((tech, index) => {
                const Icon = tech.Icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 100 
                    }}
                    style={{
                      animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`
                    }}
                    className="group relative flex flex-col items-center justify-center p-4 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:bg-slate-800/80 transition-all duration-300 backdrop-blur-sm cursor-pointer hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                  >
                    <Icon className={`text-4xl md:text-5xl text-slate-400 transition-colors duration-300 ${tech.color}`} />
                    
                    {/* Tooltip */}
                    <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                      <span className="bg-slate-900 text-slate-200 text-xs py-1 px-3 rounded-lg border border-slate-700 shadow-xl whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}} />
    </section>
  );
}
