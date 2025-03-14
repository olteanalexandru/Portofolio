import { Container } from '@src/components/shared/container';
import Image from 'next/image';

interface BannerProps {
  language: 'en-US' | 'de-DE';
}

export const Banner = ({ language }: BannerProps) => {
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

  // Sections structure remains the same
  const sections = [
    {
      id: 'education',
      title: 'banner.education',
      content: [
        {
          title: 'banner.masters.title',
          subtitle: 'banner.masters.school',
          description: 'banner.masters.thesis',
        },
        {
          title: 'banner.bachelors.title',
          subtitle: 'banner.bachelors.school',
        },
      ],
    },
    {
      id: 'certs',
      title: 'banner.certifications',
      content: [
        {
          title: 'banner.certs.webDev.title',
          subtitle: 'banner.certs.webDev.issuer',
        },
        {
          title: 'banner.certs.webDesign.title',
          subtitle: 'banner.certs.webDesign.issuer',
        },
      ],
    },
    {
      id: 'work',
      title: 'banner.workExperience',
      content: [
        {
          title: 'banner.work.webDev.title',
          subtitle: 'banner.work.webDev.company',
        },
        {
          title: 'banner.work.qa.title',
          subtitle: 'banner.work.qa.company',
        },
        {
          title: 'banner.work.freelance.title',
          subtitle: 'banner.work.freelance.company',
        },
      ],
    },
  ];

  return (
    <div className="relative my-4 w-full overflow-hidden rounded-xl bg-white text-gray-900 shadow-lg transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-0 py-3 lg:flex-row lg:gap-6 lg:py-6">
          {/* Name above the profile image on mobile */}
          <div className="block w-full text-center text-lg font-semibold text-gray-900 dark:text-white lg:hidden lg:text-xl">
            Alexandru-Florin Oltean
          </div>
          {/* Profile Image - Centered with overlap */}
          <div className="relative z-10 w-full lg:-mr-12 lg:w-1/3">
            <div className="relative mx-auto -mb-12 h-[250px] w-[250px] lg:mb-0 lg:h-[280px] lg:w-[280px]">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 dark:bg-blue-500/5" />
              <Image
                src="/assets/me.png"
                alt="Profile"
                fill
                className="rounded-full object-cover object-center p-1"
                priority
                sizes="(max-width: 768px) 200px, 280px"
              />
            </div>
            {/* Name below the profile image on larger screens */}
            <div className="mt-4 hidden text-center text-lg font-semibold text-gray-900 dark:text-white lg:block lg:text-xl">
              Alexandru-Florin Oltean
            </div>
          </div>

          {/* Content - Adjusted for mobile */}
          <div className="relative z-20 mt-0 flex w-full flex-col items-start gap-3 space-y-3 rounded-xl bg-gray-50/50 p-3 pt-16 backdrop-blur-sm dark:bg-gray-800/50 lg:mt-0 lg:w-2/3 lg:gap-4 lg:space-y-4 lg:p-6 lg:pt-6">
            {sections.map(section => (
              <div key={section.id} className="group w-full">
                <h2 className="mb-2 border-b border-blue-200 pb-1 text-lg font-bold text-blue-600 transition-colors group-hover:text-blue-700 dark:border-blue-800/50 dark:text-blue-400 dark:group-hover:text-blue-300 lg:text-xl">
                  {t(section.title)}
                </h2>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {section.content.map((item, index) => (
                    <InfoCard
                      key={index}
                      title={t(item.title)}
                      subtitle={t(item.subtitle)}
                      description={item.description ? t(item.description) : undefined}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Enhanced decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20 mix-blend-overlay dark:from-blue-900/10 dark:to-purple-900/10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent dark:from-gray-900/10" />
      </div>
    </div>
  );
};

const InfoCard = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description?: string;
}) => (
  <div
    className={`transform rounded-lg bg-white/40 p-2.5 transition-all duration-300 hover:scale-[1.02] hover:bg-white/60 dark:bg-gray-800/40 dark:hover:bg-gray-800/60 ${
      title.includes('Missing translation') ? 'border-2 border-red-500/50' : ''
    }`}
  >
    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-0.5 text-xs text-blue-600 dark:text-blue-400">{subtitle}</p>
    {description && (
      <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">{description}</p>
    )}
  </div>
);
