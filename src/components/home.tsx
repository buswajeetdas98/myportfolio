import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SectionContainer from "./SectionContainer";
import ProjectCard from "./ProjectCard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Code,
  Server,
  Wrench,
  ExternalLink,
} from "lucide-react";
import emailjs from '@emailjs/browser';

const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const containsProfanity = (text) => {
  // Simple list, can be expanded
  const badWords = [
    'fuck', 'shit', 'bitch', 'asshole', 'bastard', 'damn', 'crap', 'dick', 'piss', 'cunt', 'fag', 'slut', 'whore', 'nigger', 'retard', 'idiot', 'stupid', 'douche', 'bollocks', 'bugger', 'bloody', 'bollocks', 'arse', 'wank', 'prick', 'twat', 'cock', 'pussy', 'tit', 'tosser', 'wanker', 'motherfucker', 'fucker', 'suck', 'jerk', 'moron', 'gay', 'lesbian', 'homo', 'queer', 'negro', 'coon', 'spic', 'chink', 'gook', 'kike', 'kyke', 'heeb', 'spook', 'wetback', 'beaner', 'gyp', 'gip', 'gimp', 'tranny', 'trannie', 'dyke', 'fairy', 'fruit', 'goof', 'gook', 'guido', 'half-breed', 'halfbreed', 'jap', 'jungle bunny', 'kafir', 'kaffir', 'kike', 'kraut', 'kyke', 'lesbo', 'mick', 'negro', 'nigga', 'nigger', 'paki', 'pickaninny', 'pikey', 'pollock', 'porch monkey', 'raghead', 'redskin', 'sand nigger', 'sheeny', 'shylock', 'spade', 'spic', 'spook', 'slope', 'wetback', 'zipperhead'
  ];
  const lower = text.toLowerCase();
  return badWords.some(word => lower.includes(word));
};

const HomePage = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);
  // Mock data for projects
  const projects = [
    {
      id: 1,
      title: "Bank Management System (NexBank)",
      description:
        "Designed a text-based Bank Management System in Python using OOP principles (encapsulation, abstraction, modularity). Features include secure account creation, login, deposits, withdrawals, and balance checks with input validation and error handling.",
      image:
        "https://i.postimg.cc/3xMnssYx/Flux-Dev-Design-a-sleek-modern-4-K-dashboard-interface-for-a-Ba-2.jpg",
      technologies: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript", "React"],
      demoLink: "https://bank-management-system-chi.vercel.app/",
      repoLink: "https://github.com/buswajeetdas98/Bank-Management-System.git",
    },
    {
      id: 2,
      title: "Pharmacy POS (Point of Sale) System with Euro Currency Support (Germany Meds)",
      description:
        "Developed a Python-based medicine store system (Germany Meds) using OOP and SQLite. Features include inventory management, real-time billing, Euro (EUR) pricing, and automatic stock updates to simulate real-world pharmacy operations.",
      image:
        "https://i.postimg.cc/gcX9YDwj/p.jpg",
      technologies: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript","React"],
      demoLink: "https://germany-meds.vercel.app/",
      repoLink: "https://github.com/buswajeetdas98/Bank-Management-System.git",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Collaborative project management tool with drag-and-drop interface and team features.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
      demoLink: "https://example.com/demo",
      repoLink: "https://github.com/example/project",
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description:
        "Real-time weather application with location-based forecasts and interactive maps.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
      technologies: ["JavaScript", "OpenWeather API", "Leaflet", "CSS3"],
      demoLink: "https://example.com/demo",
      repoLink: "https://github.com/example/project",
    },
  ];

  // Mock data for education
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "Maharaja Sriram Chandra Bhanja Deo University (Odisha)",
      duration: "2021 - 2025",
      description:
        "Graduated with honors. Coursework included Data Structures, Algorithms, and Web Development.",
    },
    {
      id: 2,
      degree: "Intermediate",
      institution: "Emma International School, Balasore (Odisha)",
      duration: "2019 - 2021",
      description:
        "Studied Science with a focus on Physics, Chemistry, and Mathematics, building a strong analytical and problem-solving foundation for tech development.",
    },
    {
      id: 3,
      degree: "Matric",
      institution: "Panchayat Nodal High School, Kasabajaypur, Balasore (Odisha)",
      duration: "2019",
      description:
        "Completed Matriculation with a solid academic foundation, developing discipline, curiosity, and a strong interest in science and technology.",
    },
  ];

  // Skills data
  const frontendSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Angular",
    "Tailwind CSS",
  ];
  const backendSkills = [
    "Python",
    "Django",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL Sever",
    "RESTful APIs",
  ];
  const toolsSkills = [
    "chatgpt",                                       
    "claude",
    "lovable",
    "grok",
    "deepseek",
    "perplexity",
    "gemini",
    "copilot",
    "replict",
    "Tempo",

  ];

  // Add state for form fields and feedback
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState('');

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setFeedback('');
    // Trim and sanitize inputs
    const name = escapeHtml(form.name.trim());
    const email = escapeHtml(form.email.trim());
    const message = escapeHtml(form.message.trim());
    // Validation
    if (!name || !email || !message) {
      setFeedback('All fields are required.');
      setSending(false);
      return;
    }
    // Basic email format check
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFeedback('Please enter a valid email address.');
      setSending(false);
      return;
    }
    // Profanity filter
    if (containsProfanity(name) || containsProfanity(message)) {
      setFeedback('Inappropriate language detected.');
      setSending(false);
      return;
    }
    // Email body formatting
    const emailBody = `Hello ${name}
\nYou got a new message from: ${name}  \nEmail: ${email}\n\nMessage:  \n${message}\n\n— Portfolio Site`;
    try {
      await emailjs.send(
        'service_qv9gdak',
        'template_jqxyfjd',
        {
          name,
          email,
          message: emailBody,
          to_email: 'dasbiswajeet983.@gmail.com',
        },
        'EHw95-cJj3A2dUJgx'
      );
      setFeedback('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setFeedback('Failed to send message. Please try again later.');
    }
    setSending(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-['Poppins']">
      <Header />

      <main>
        <HeroSection />

        {/* Skills Section */}
        <SectionContainer id="skills" title="Skills">
          <div className="skills-container relative">
            {/* Background Particles */}
            <div className="particles-bg">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${8 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>

            {/* Light Orbs */}
            <div
              className="light-orb"
              style={{
                top: "10%",
                left: "10%",
                width: "100px",
                height: "100px",
                animationDelay: "0s",
              }}
            />
            <div
              className="light-orb"
              style={{
                top: "60%",
                right: "15%",
                width: "80px",
                height: "80px",
                animationDelay: "3s",
              }}
            />
            <div
              className="light-orb"
              style={{
                bottom: "20%",
                left: "20%",
                width: "60px",
                height: "60px",
                animationDelay: "6s",
              }}
            />

            <div className="skills-grid">
              {/* Frontend Skills */}
              <div
                className="skill-card"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="skill-card-inner">
                  <div className="skill-icon">
                    <Code className="w-8 h-8 text-[#a259ff] relative z-10" />
                  </div>
                  <h3 className="skill-title">Frontend Development</h3>
                  <p className="skill-level">Expert Level</p>
                  <div className="skill-tags">
                    {frontendSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="skill-tag enhanced-skill-tag"
                        title={`${skill} - Frontend Technology`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Backend Skills */}
              <div
                className="skill-card"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="skill-card-inner">
                  <div className="skill-icon">
                    <Server className="w-8 h-8 text-[#a259ff] relative z-10" />
                  </div>
                  <h3 className="skill-title">Backend Development</h3>
                  <p className="skill-level">Advanced Level</p>
                  <div className="skill-tags">
                    {backendSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="skill-tag enhanced-skill-tag"
                        title={`${skill} - Backend Technology`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div
                className="skill-card"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div className="skill-card-inner">
                  <div className="skill-icon">
                    <Wrench className="w-8 h-8 text-[#a259ff] relative z-10" />
                  </div>
                  <h3 className="skill-title">Ai Tools & Technologies</h3>
                  <p className="skill-level">Professional Level</p>
                  <div className="skill-tags">
                    {toolsSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="skill-tag enhanced-skill-tag"
                        title={`${skill} - Development Tool`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Projects Section */}
        <SectionContainer id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                demoLink={project.demoLink}
                repoLink={project.repoLink}
              />
            ))}
          </div>
        </SectionContainer>

        {/* Education Section */}
        <SectionContainer id="education" title="Education">
          <div className="space-y-8">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-[#6f00ff] before:z-10 before:shadow-[0_0_10px_#6f00ff]"
              >
                <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gradient-to-b from-[#6f00ff] to-transparent h-full"></div>
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <div className="flex justify-between text-sm text-zinc-400 mt-1">
                  <span>{item.institution}</span>
                  <span>{item.duration}</span>
                </div>
                <p className="mt-2 text-zinc-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        {/* Contact Section */}
        <SectionContainer id="contact" title="Contact Me">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-zinc-300 mb-6">
                Have a project in mind or want to discuss potential
                opportunities? Feel free to reach out through the form or
                connect with me directly through social media.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-[#6f00ff]" />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/biswajeet04"
                    className="hover:text-[#6f00ff] transition-colors"
                  >
                    linkedin.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="w-5 h-5 text-[#6f00ff]" />
                  </div>
                  <a
                    href="https://github.com/buswajeetdas98"
                    className="hover:text-[#6f00ff] transition-colors"
                  >
                    github.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Twitter className="w-5 h-5 text-[#6f00ff]" />
                  </div>
                  <a
                    href="https://x.com/BiswajeetD30266?t=5HwV2suNgj5eg605eOxPYw&s=09"
                    className="hover:text-[#6f00ff] transition-colors"
                  >
                    twitter.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-[#6f00ff]" />
                  </div>
                  <a
                    href="https://www.instagram.com/_am_.krishna_?igsh=OXAwZzRsOHZ0aG0y"
                    className="hover:text-[#6f00ff] transition-colors"
                  >
                    instagram.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="bg-zinc-900 border-zinc-800 focus:border-[#6f00ff] h-12"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="bg-zinc-900 border-zinc-800 focus:border-[#6f00ff] h-12"
                    value={form.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    className="bg-zinc-900 border-zinc-800 focus:border-[#6f00ff] min-h-[150px]"
                    value={form.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Button
                    className="bg-[#6f00ff] hover:bg-[#6f00ff]/80 w-full h-12 transition-all duration-300 shadow-[0_0_15px_rgba(111,0,255,0.5)] hover:shadow-[0_0_25px_rgba(111,0,255,0.8)]"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
                {feedback && (
                  <div className="text-center text-sm mt-2" style={{ color: feedback.includes('success') ? '#22c55e' : '#ef4444' }}>
                    {feedback}
                  </div>
                )}
              </form>
            </div>
          </div>
        </SectionContainer>
      </main>

      <footer className="bg-zinc-900 py-6 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">© Biswajeet Das 2025 — Built with ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
