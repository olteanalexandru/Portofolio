import { Container } from '@src/components/shared/container';
import Image from 'next/image';

export const Banner = () => {
  return (
    <div className="relative my-4 w-full overflow-hidden rounded-xl bg-white text-gray-900 shadow-lg transition-colors duration-300 dark:bg-gray-900 dark:text-white">
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-6 py-6 lg:flex-row">
          {/* Profile Image - Centered and overlapping */}
          <div className="-mb-12 w-full lg:mb-0 lg:-mr-12 lg:w-1/3">
            <div className="relative mx-auto h-[280px] w-[280px]">
              <div className="absolute inset-0 rounded-full bg-blue-500/10 dark:bg-blue-500/5" />
              <Image
                src="/assets/me.png"
                alt="Profile"
                fill
                className="rounded-full object-cover object-center p-1"
                priority
                sizes="280px"
              />
            </div>
          </div>

          {/* Content - More compact and integrated */}
          <div className="w-full space-y-4 rounded-xl bg-gray-50/50 p-4 backdrop-blur-sm dark:bg-gray-800/50 lg:w-2/3 lg:p-6">
            {['Education', 'Work Experience', 'Certifications'].map(section => (
              <div key={section} className="group">
                <h2 className="mb-2 border-b border-blue-200 pb-1 text-xl font-bold text-blue-600 transition-colors group-hover:text-blue-700 dark:border-blue-800/50 dark:text-blue-400 dark:group-hover:text-blue-300">
                  {section}
                </h2>
                <div className="grid gap-2 sm:grid-cols-2">
                  {section === 'Education' && (
                    <>
                      <InfoCard
                        title="Master's in Computer Science"
                        subtitle="Universitatea Tehnica Cluj-Napoca"
                        description="Advanced Crop Management System"
                      />
                      <InfoCard
                        title="Bachelor's in Agricultural Engineering"
                        subtitle="Universitatea Lucian Blaga Sibiu"
                      />
                    </>
                  )}
                  {section === 'Work Experience' && (
                    <>
                      <InfoCard title="Web Developer" subtitle="Automatify AG" />
                      <InfoCard title="QA Analyst" subtitle="Quantic Lab" />
                      <InfoCard
                        title="Personal work and Freelancing"
                        subtitle="Outlier Reviewing AI models"
                      />
                    </>
                  )}
                  {section === 'Certifications' && (
                    <>
                      <InfoCard
                        title="Web Developer and Back-end Developer"
                        subtitle="Haute Ecole Arc Ingénierie, Swiss WebAcademy"
                      />
                      <InfoCard
                        title="Web Designer"
                        subtitle="Ministry of Labor and Ministry of Education"
                      />
                    </>
                  )}
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
  <div className="transform rounded-lg bg-white/40 p-2.5 transition-all duration-300 hover:scale-[1.02] hover:bg-white/60 dark:bg-gray-800/40 dark:hover:bg-gray-800/60">
    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="mt-0.5 text-xs text-blue-600 dark:text-blue-400">{subtitle}</p>
    {description && (
      <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">{description}</p>
    )}
  </div>
);
