"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Raleway } from "next/font/google";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./button";
import { motion } from "framer-motion";
import { IconType } from 'react-icons';

const raleway = Raleway({ subsets: ["latin"] });

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <Link 
      href={href} 
      className="text-white/90 hover:text-white transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
    </Link>
  </motion.div>
);

const SocialIcon = ({ href, icon: Icon }: { href: string; icon: IconType }) => (
  <motion.div
    whileHover={{ scale: 1.2, rotate: 5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/90 hover:text-white transition-colors relative group"
    >
      <Icon className="w-5 h-5 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
    </a>
  </motion.div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close menu on route change (optional, for SPA navigation)
  useEffect(() => {
    if (!menuOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-4 w-[60%] left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 rounded-full ${
        scrolled
          ? "bg-black/30 backdrop-blur-xl border border-white/30 shadow-2xl"
          : "bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Left - Portfolio Name */}
          <div className={`${raleway.className} text-xl font-bold text-white cursor-pointer pl-2 sm:pl-4 lg:pl-4`}>
              Sneha Gusain
          </div>

          {/* Middle - Navigation Links (Desktop only, lg and up) */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/experience">Skills</NavLink>
            <NavLink href="/experience">Experience</NavLink>
            <NavLink href="/projects">Projects</NavLink>
          </div>

          {/* Right - Social Links, Resume Button, Hamburger */}
          <div className="flex items-center space-x-4 sm:space-x-4 pr-2 sm:pr-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                href="/resume.pdf"
                className="hidden lg:flex"
              >
                Resume
              </Button>
            </motion.div>
            {/* Social Icons - show on desktop, hide on mobile/tablet */}
            <div className="hidden lg:flex items-center space-x-4">
              <SocialIcon href="mailto:snehag2864@gmail.com?subject=Hello" icon={FaEnvelope} />
              <SocialIcon href="https://github.com/yjhkdjsg" icon={FaGithub} />
              <SocialIcon href="https://linkedin.com/in/snehagusain7" icon={FaLinkedin} />
            </div>
            {/* Hamburger for mobile/tablet (shows below lg) */}
            <button
              className="lg:hidden text-white focus:outline-none z-[110] ml-2 p-1 text-lg cursor-pointer"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.18 }}
          className="lg:hidden absolute top-16 right-4 sm:right-6 bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-[105] px-4 py-4 flex flex-col gap-4 items-center min-w-[180px] max-w-[220px] text-center"
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/experience">Skills</NavLink>
          <NavLink href="/experience">Experience</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <Button href="/resume.pdf" className="w-full flex justify-center mt-2 text-center">Resume</Button>
          {/* Social Icons - only show in mobile/tablet dropdown */}
          <div className="flex gap-4 mt-2 lg:hidden">
            <SocialIcon href="mailto:snehag2864@gmail.com?subject=Hello" icon={FaEnvelope} />
            <SocialIcon href="https://github.com/yjhkdjsg" icon={FaGithub} />
            <SocialIcon href="https://linkedin.com/in/snehagusain7" icon={FaLinkedin} />
          </div>
        </motion.div>
      )}
    </nav>
  );
}
