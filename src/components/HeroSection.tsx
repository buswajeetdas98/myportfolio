import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  profession?: string;
  description?: string;
  typingTexts?: string[];
  profileImage?: string;
}

const HeroSection = ({
  name = "Biswajeet Das",
  profession = "Web Developer",
  description = "I'm a Python Full-Stack Developer who builds fast, scalable, and accessible web applications. I turn complex problems into clean, maintainable solutions—delivering real value from front-end to back-end. I also specialize in prompt engineering to integrate powerful AI features into modern web apps",
  typingTexts = [
    "Full Stack Web Developer",
    "Python Developer",
    "UI-Focused Coder",
    "Tech Enthusiast",
    "Clean Code Advocate"
  ],
  profileImage = "https://i.postimg.cc/26SHXzW3/img1.png",
}: HeroSectionProps) => {
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.1);
        mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.1);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Typing animation effect
  useEffect(() => {
    const currentText = typingTexts[typingIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setTypingIndex((typingIndex + 1) % typingTexts.length);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, typingIndex, typingTexts]);

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/biswajeet04/",
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      icon: Github,
      href: "https://github.com/buswajeetdas98",
      label: "GitHub",
      color: "#333",
    },
    {
      icon: Twitter,
      href: "https://x.com/BiswajeetD30266?t=5HwV2suNgj5eg605eOxPYw&s=09",
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/_am_.krishna_?igsh=OXAwZzRsOHZ0aG0y",
      label: "Instagram",
      color: "#E4405F",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="bg-black text-white min-h-[700px] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-16 relative overflow-hidden"
    >
      {/* Background Particles */}
      <div className="hero-particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="hero-floating-shape hero-shape-1"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="hero-floating-shape hero-shape-2"
        style={{ x: springX, y: springY }}
        transition={{ delay: 0.2 }}
      />
      <motion.div
        className="hero-floating-shape hero-shape-3"
        style={{ x: springX, y: springY }}
        transition={{ delay: 0.4 }}
      />

      {/* Left side - Profile Image */}
      <motion.div
        className="w-full md:w-2/5 flex justify-center md:justify-start mb-10 md:mb-0 relative z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-profile-container"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="hero-profile-glow"></div>
          <img
            src={profileImage}
            alt="Profile"
            className="hero-profile-image"
          />
        </motion.div>
      </motion.div>

      {/* Right side - Content */}
      <motion.div
        className="w-full md:w-3/5 text-center md:text-left relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h3
          className="text-xl md:text-2xl font-light mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Hi, It's {name}
        </motion.h3>

        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 hero-main-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          I'm a <span className="hero-profession-text">{profession}</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          className="h-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-[#a259ff] hero-typing-text">
            <span>{displayText}</span>
            <span className="hero-cursor">|</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-gray-300 mb-8 max-w-xl hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {description}
        </motion.p>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center md:justify-start space-x-4 mb-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {socialLinks.map(({ icon: Icon, href, label }, index) => (
            <div key={label} className="relative">
              <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                onHoverStart={() => setShowTooltip(label)}
                onHoverEnd={() => setShowTooltip(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                <Icon size={20} />
              </motion.a>

              {/* Tooltip */}
              {showTooltip === label && (
                <motion.div
                  className="hero-tooltip"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {label}
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Hire Me Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <motion.button
            className="hero-hire-button"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(162, 89, 255, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="hero-hire-button-text">Hire Me</span>
            <div className="hero-hire-button-shine"></div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
