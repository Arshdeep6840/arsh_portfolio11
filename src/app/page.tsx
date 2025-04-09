'use client';

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, 
  [darkMode]);

  return (
    <main className={`min-h-screen transition-colors duration-700 ${darkMode ? "bg-gradient-to-br from-black to-blue-950 text-white" : "bg-[radial-gradient(circle_at_top_left,white,rgb(140,226,255))] text-gray-900"} px-6 pb-10 pt-24`}>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 h-20 px-6 py-0 bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/10 dark:border-white/10 flex justify-between items-center shadow-sm">
        <div className="h-full flex items-center justify-start">
          <div className="relative w-[290px] h-[150px]">
            <a href="#hero">
              <Image
                src={darkMode ? "/703d1cbe-6398-4dfb-91eb-ec47250e9f7d.png" : "/dark-logo.png"}
                alt="Logo"
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </a>
          </div>
        </div>


        <div className="flex items-center gap-6">
          {['about', 'education', 'projects', 'contact'].map((section) => (
            <a key={section} href={`#${section}`} className="hover:underline text-sm font-medium capitalize">{section}</a>
          ))}
          <Button variant="ghost" onClick={() => setDarkMode(!darkMode)} className="flex items-center gap-2">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            {darkMode ? "Light" : "Dark"}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center mb-20 scroll-mt-24">
        <div id="hero"  className="text-center mb-20 scroll-mt-24">
          <motion.h1
            className="text-5xl font-extrabold mb-3" 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-5xl font-extrabold mb-3 scroll-mt-24">
              Arshdeep Singh
            </div>
           
          </motion.h1>
          <motion.h5
            
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mt-2 font-bold text-md text-opacity-70">
              Data Scientistc| Data Analyst | Data Engineer
            </div>
           
          </motion.h5>
          <motion.p
            className="text-xl text-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Cleaning and Transforming data into actionable intelligence
          </motion.p>
        
        <div className="flex justify-center gap-6 mt-4">
          <motion.a 
            whileHover={{ scale: 1.1 }} 
            href="https://github.com/arshdeep6840" 
            target="_blank" 
            className="hover:text-white transition"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/arshdeep-singh-python-/" 
            target="_blank" 
            className="hover:text-white transition"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }} 
            href="mailto:arshdeepsingh17092@gmail.com" 
            className="hover:text-white transition"
           >
            <Mail size={24} />
          </motion.a>
        </div>
        
          <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-6">
            <Button 
              className="px-6 py-2 text-lg shadow-lg bg-white text-blue-800 hover:bg-blue-100 transition-all" asChild>
              <a 
              href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Me */}
      <motion.section 
      id="about" 
      className="max-w-3xl mx-auto mb-20 scroll-mt-24" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
        <p className="leading-relaxed text-center">
          I'm a data scientist with a passion for building scalable machine learning systems and delivering business value through data-driven solutions. My expertise spans data engineering, model development, and end-to-end MLOps. I thrive in collaborative, fast-paced environments where data becomes a strategic asset.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section  
      className="max-w-5xl mx-auto mb-20 scroll-mt-24" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1.9 }} 
      viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 center">
          {["Python","NumPy", "Pandas","SQL","Data Analysis","Seaborn","Matplotlib","Statistics", "Machine Learning", "Excel","Jupyter"].map((skill, i) => (
            <motion.div  
              key={i} 
              whileHover={{ scale: 1.05 }}
              >
              <Card 
                className={`p-4 text-center font-medium ${darkMode ? "text-white" : "text-black"} bg-opacity-10 hover:bg-opacity-20 rounded-2xl shadow-md`}>
                  {skill}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section 
      id="education" 
      className="max-w-4xl mx-auto mb-20 px-4 scroll-mt-24" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 2.6 }} 
      viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center scroll-mt-24">
          Education
        </h2>
        <motion.div 
        whileHover={{ scale: 1.03 }} 
        className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/10 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold mb-1">Bachelor of Vocational in Software Development</h3>
          <p className="text-sm opacity-80 mb-2"><a href="https://www.gncbudhlada.org/">Guru Nanak College, Budhlada (Punjab)</a></p>
          <p className="text-sm text-gray-400 mb-2">Ongoing</p>
          <p className="text-sm text-gray-400 mb-3">2022 – 2025</p>
          <p className="text-sm opacity-80">
            <span className="font-medium">Relevant Coursework:</span> Programming, Data Structures, Probability, Database Systems
          </p>
        </motion.div>
      </motion.section>

      {/* Certifications */}
      <motion.section 
      className="max-w-4xl mx-auto mb-20 scroll-mt-24" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{
            title: "Certificate Artificial Intelligence & Data Science",
            institution: "Jagat Guru Nanak Dev Open University, Patiala",
            status: "Completed",
            link: "https://psou.ac.in/index.php",
            url: "/image.png",
          }, 
          {
            title: "Data Science with Python",
            institution: "Cetpa Infotech, Noida",
            status: "Ongoing",
            link: "https://www.cetpainfotech.com/",
            url: "",
          }].map((cert, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.03 }}>
              <Card className="p-5 transition-all rounded-2xl border text-inherit bg-opacity-10 hover:bg-opacity-20">
                <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm opacity-80 mb-2"><a href={cert.link}>{cert.institution}</a></p>
                <p className="text-sm text-gray-400 mb-2">{cert.status}</p>
                {cert.url && <a href={cert.url} target="_blank" className="text-blue-600 dark:text-blue-300 text-sm font-medium hover:text-blue-800 dark:hover:text-white transition-colors">View</a>}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section 
      id="projects" 
      className="max-w-6xl mx-auto mb-20 scroll-mt-24" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }}>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Selected Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[{
            title: "Diamonds Price analysis",
            desc: "Exploratory data analysis and visualization of diamonds dataset.",
            url: "https://github.com/Arshdeep6840/Data-Analysis--Projects/blob/main/diamonds%20-%20Copy.ipynb"
          }, {
            title: "AirLine Delay Prediction",
            desc: "Predicting flight delays using machine learning models.",
            url: "https://github.com/Arshdeep6840/Data-Analysis--Projects/blob/main/AIRLINE_FINAL%20(6)%20-%20Copy.ipynb"
          }, {
            title: "Final Shark Tank",
            desc: "Predicting the success of startups using data analysis.",
            url: "https://github.com/Arshdeep6840/Data-Analysis--Projects/blob/main/Final%20Shark%20Tank%20(1)%20-%20Copy.ipynb"
          }, {
            title: "Naac Portal",
            desc: "Web application for managing NAAC accreditation process.",
            url: "https://github.com/Arshdeep6840/Naac_portal"
          }].map((project, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ scale: 1.03 }}>
              <Card className="p-5 transition-all rounded-2xl border text-inherit bg-opacity-10 hover:bg-opacity-20">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm opacity-80 mb-2">{project.desc}</p>
                <a href={project.url} target="_blank" className="text-blue-600 dark:text-blue-300 text-sm font-medium hover:text-blue-800 dark:hover:text-white transition-colors">View on GitHub</a>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section  
      className="max-w-4xl mx-auto mb-20 px-4 scroll-mt-24" 
      id="contact"
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true }}
      >
        <h2 
        className="text-3xl font-bold mb-4">
          Let's Connect
        </h2>
        <p className="mb-5 opacity-80">Have a question or want to collaborate? Drop me a message.</p>
        <Button variant="secondary" className="px-6 py-2 text-base font-medium bg-white text-blue-900 hover:bg-blue-100" asChild>
          <a href="mailto:arshdeepsingh17092@gmail.com">Send Email</a>
        </Button>
      </motion.section>

      {/* Footer */}
      <footer 
      className="text-center text-sm opacity-70 mt-16">
        © 2024 Arshdeep Singh. All rights reserved.
      </footer>
    </main>
  );
}
