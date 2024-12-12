'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { useState } from 'react';

import BlogLogo from '@icons/blog-logo.svg';
import { LanguageSelector } from '@src/components/features/language-selector';
import { ThemeToggle } from '@src/components/features/theme-toggle';
import { Container } from '@src/components/shared/container';
import { ContactMeModal } from '@src/components/features/contactMeModal/ContactMeModal';
import { AboutMeModal } from '@src/components/features/aboutMe/AboutMeModal';

export const Header = () => {
  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/10 backdrop-blur-sm dark:border-gray-700/30">
      <nav className="px-4 py-3">
        <Container className="flex items-center justify-between">
          <Link
            href="/"
            title={t('common.homepage')}
            className="text-gray-900 transition-colors duration-200 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
          >
            {/* <BlogLogo /> */}
          </Link>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsAboutModalOpen(true)}
              className="text-gray-700 transition-colors duration-200 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {t('common.aboutMe')}
            </button>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-gray-700 transition-colors duration-200 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              {t('common.contact')}
            </button>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-700 transition-colors duration-200 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-700 transition-colors duration-200 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="/assets/CV.pdf"
              download
              aria-label="Download CV"
              className="flex flex-col items-center text-gray-700 transition-colors duration-200 hover:text-green-500 dark:text-gray-300 dark:hover:text-green-400"
            >
              <FaFileDownload size={24} />
              <span className="mt-0.5 text-[10px] font-medium">cv</span>
            </Link>
            <div className="flex items-center gap-3 border-l border-gray-200 pl-3 dark:border-gray-700">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          </div>
        </Container>
      </nav>

      <ContactMeModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <AboutMeModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </header>
  );
};
