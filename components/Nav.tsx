'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Import logo
import PFLogo from '@/public/printforge-logo.svg';
import PFLogoDark from '@/public/printforge-logo-dark.svg';
import PFLogoIcon from '@/public/printforge-logo-icon.svg';
import PFLogoIconDark from '@/public/printforge-logo-icon-dark.svg';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      const isDark = localStorage.getItem('darkMode') === 'true';
      setDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    document.documentElement.classList.toggle('dark', newMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: '3D Models', href: '/3d-models' },
    { name: 'About', href: '/about' },
  ];

  if (!isMounted) {
    return null; // Render placeholder atau loading state
  }

  return (
    <header className="w-full bg-background border-b-4 border-border shadow-shadow">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="relative">
            <Image
              src={darkMode ? PFLogoDark : PFLogo}
              alt="PrintForge Logo"
              width={0}
              height={0}
              className="w-[200px] h-auto"
              priority
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-2 md:gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: 'neutral', size: 'sm' }),
                    'uppercase text-sm'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <Button
            variant="default"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="group"
          >
            {darkMode ? (
              <FiSun className="group-hover:rotate-12 transition-transform duration-300 text-main-foreground" />
            ) : (
              <FiMoon className="group-hover:rotate-12 transition-transform duration-300 text-main-foreground" />
            )}
          </Button>

          {/* GitHub Icon */}
          <Button variant="default" size="icon" asChild>
            <a
              href="https://github.com/himangmyid"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FiGithub className="group-hover:rotate-12 transition-transform duration-300 text-main-foreground" />
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex justify-between items-center px-4 py-3">
        {/* Mobile Logo */}
        <Link href="/" className="group">
          <Image
            src={darkMode ? PFLogoIconDark : PFLogoIcon}
            alt="PrintForge Logo"
            width={0}
            height={0}
            className="w-[40px] h-auto"
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <Button
            variant="default"
            size="icon"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="group"
          >
            {darkMode ? (
              <FiSun className="group-hover:rotate-12 transition-transform duration-300 text-main-foreground" />
            ) : (
              <FiMoon className="group-hover:rotate-12 transition-transform duration-300 text-main-foreground" />
            )}
          </Button>

          <Button
            variant="default"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <FiX className="text-main-foreground" />
            ) : (
              <FiMenu className="text-main-foreground" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t-2 border-border">
          <ul className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: 'neutral', size: 'sm' }),
                    'w-full justify-start uppercase text-sm'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Button
                variant="default"
                size="sm"
                className="w-full justify-start uppercase text-sm"
                asChild
              >
                <a
                  href="https://github.com/himangmyid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}