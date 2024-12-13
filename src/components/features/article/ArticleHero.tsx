'use client';

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from '@contentful/live-preview/react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

import { ArticleAuthor } from '@src/components/features/article/ArticleAuthor';
import { ArticleLabel } from '@src/components/features/article/ArticleLabel';
import { CtfImage } from '@src/components/features/contentful';
import { FormatDate } from '@src/components/shared/format-date';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';

interface ArticleHeroProps {
  article: PageBlogPostFieldsFragment;
  isFeatured?: boolean;
  isReversedLayout?: boolean;
  locale?: string;
}

export const ArticleHero = ({
  article,
  isFeatured,
  isReversedLayout = false,
}: ArticleHeroProps) => {
  const { t } = useTranslation('common'); // Ensure the correct namespace is used
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });
  const { title, shortDescription, publishedDate } = useContentfulLiveUpdates(article);

  const isMostPrizedProject = [
    'Recipe Management Application - NextJs',
    'Next.js Farm Management System - Efficient Crop and Rotation Management',
  ].includes(title ?? '');

  return (
    <div
      className={twMerge(
        'flex flex-col overflow-hidden rounded-2xl',
        'border border-gray-200 dark:border-gray-700',
        'bg-white dark:bg-gray-800',
        'shadow-lg',
        isReversedLayout ? 'lg:flex-row-reverse' : 'lg:flex-row',
      )}
    >
      <div
        className="relative h-[200px] flex-1 basis-1/2 lg:h-auto"
        {...inspectorProps({ fieldId: 'featuredImage' })}
      >
        {article.featuredImage && (
          <CtfImage
            nextImageProps={{
              className: 'w-full h-full object-cover',
              priority: true,
              sizes: '(max-width: 768px) 100vw, 50vw',
            }}
            {...article.featuredImage}
          />
        )}
      </div>

      <div className="relative flex flex-1 basis-1/2 flex-col justify-center p-4 lg:px-16 lg:py-12 xl:px-24">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <ArticleAuthor article={article} />
          {isFeatured && (
            <ArticleLabel
              className={twMerge(
                'ml-auto lg:absolute lg:top-8 xl:top-12',
                isReversedLayout ? 'lg:left-6 xl:left-12' : 'lg:right-6 xl:right-12',
              )}
            >
              {t('article.featured')}
            </ArticleLabel>
          )}
          {isMostPrizedProject && (
            <ArticleLabel
              className={twMerge(
                'text-xs text-green-600',
                isReversedLayout ? 'lg:left-6 xl:left-12' : 'lg:right-6 xl:right-12',
              )}
            >
              Top project
            </ArticleLabel>
          )}
          <div
            className={twMerge(
              'text-xs text-gray600 lg:ml-auto',
              isReversedLayout ? 'lg:block' : '',
            )}
            {...inspectorProps({ fieldId: 'publishedDate' })}
          >
            <FormatDate date={publishedDate} />
          </div>
        </div>
        <h1 className="text-xl font-bold lg:text-2xl" {...inspectorProps({ fieldId: 'title' })}>
          {title}
        </h1>
        {shortDescription && (
          <p
            className="mt-2 text-sm lg:text-base"
            {...inspectorProps({ fieldId: 'shortDescription' })}
          >
            {shortDescription}
          </p>
        )}
        <Link
          href="/"
          className="mt-4 inline-block w-fit rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          {t('article.backToHome')}
        </Link>
      </div>
    </div>
  );
};
