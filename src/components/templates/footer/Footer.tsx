'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Container } from '@src/components/shared/container';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-color mt-10 border-t border-gray-200 bg-gray-50 dark:bg-gray-800/50">
      <Container className="py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <div className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
              <p>Alexandru Florin Oltean</p>
              <p>Email: oltean.alexandru11@gmail.com</p>
              <p>Phone: +40 755 494 691</p>
            </div>
          </div>
          <div>
            <div className="mt-4 space-y-2">
              <a
                href="https://www.linkedin.com/in/alexandru-florin-oltean-7b3b6922b/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-blue-500 dark:text-gray-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/olteanalexandru"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
          © {currentYear} Alexandru Florin Oltean.
        </div>
      </Container>
    </footer>
  );
};
