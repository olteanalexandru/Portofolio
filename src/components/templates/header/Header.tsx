'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import BlogLogo from '@icons/blog-logo.svg';
import { LanguageSelector } from '@src/components/features/language-selector';
import { ThemeToggle } from '@src/components/features/theme-toggle';
import { Container } from '@src/components/shared/container';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-white py-5 dark:bg-gray-900">
      <nav>
        <Container className="flex items-center justify-between">
          <Link href="/" title={t('common.homepage')}>
            <BlogLogo />
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </Container>
      </nav>
    </header>
  );
};
