'use client';
import { Container } from '@src/components/shared/container';
import { useState } from 'react';
import { ContactMeModal } from '@src/components/features/contactMeModal/ContactMeModal';

interface BannerContentProps {
  language: 'en-US' | 'de-DE';
  onContactClick: () => void;
}

// Internal component with onContactClick prop
const BannerContent = ({ language, onContactClick }: BannerContentProps) => {
  // Helper function to get translation from common.json
  const t = (key: string) => {
    try {
      // Dynamic import of the correct language file
      const translations = require(`/public/locales/${language}/common.json`);
      const parts = key.split('.');
      let result = translations;
      for (const part of parts) {
        if (!result[part]) return `Missing: ${key}`;
        result = result[part];
      }
      return result;
    } catch (error) {
      return `Missing: ${key}`;
    }
  };

  return (
    <div className="relative my-4 w-full overflow-hidden rounded-xl bg-white text-gray-900 shadow-lg transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-6 py-6 lg:flex-row">
          {/* Profile Image section */}
          <div className="-mb-12 w-full lg:mb-0 lg:-mr-12 lg:w-1/3"></div>

          {/* Content section */}
          <div className="w-full space-y-4 rounded-xl bg-gray-50/50 p-4 backdrop-blur-sm dark:bg-gray-800/50 lg:w-2/3 lg:p-6">
            <h2 className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
              {t('banner.openForWork.title')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t('banner.openForWork.description')}
            </p>
            <button
              onClick={onContactClick}
              className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              {t('banner.openForWork.contactButton')}
            </button>
          </div>
        </div>
      </Container>
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20 mix-blend-overlay dark:from-blue-900/10 dark:to-purple-900/10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent dark:from-gray-900/10" />
      </div>
    </div>
  );
};

// Main exported component
export const OFWBanner = ({ language }: { language: 'en-US' | 'de-DE' }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <BannerContent language={language} onContactClick={() => setIsContactModalOpen(true)} />
      <ContactMeModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};
