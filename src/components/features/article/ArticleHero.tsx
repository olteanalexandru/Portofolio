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
        'max-h-[50vh]', // Limit the height to 50% of the viewport height
        isReversedLayout ? 'lg:flex-row-reverse' : 'lg:flex-row',
      )}
    >
      <div className="flex-1 basis-1/2" {...inspectorProps({ fieldId: 'featuredImage' })}>
        {article.featuredImage && (
          <CtfImage
            nextImageProps={{ className: 'w-full', priority: true, sizes: undefined }}
            {...article.featuredImage}
          />
        )}
      </div>

      <div className="relative flex flex-1 basis-1/2 flex-col justify-center py-6 px-4 lg:px-16 lg:py-12 xl:px-24">
        <div className="mb-2 flex flex-wrap items-center">
          <ArticleAuthor article={article} />
          {isFeatured && (
            <ArticleLabel
              className={twMerge(
                'ml-auto pl-2 lg:absolute lg:top-8 xl:top-12',
                isReversedLayout ? 'lg:left-6 xl:left-12' : 'lg:right-6 xl:right-12',
              )}
            >
              {t('article.featured')}
            </ArticleLabel>
          )}
          {isMostPrizedProject && (
            <ArticleLabel
              className={twMerge(
                'ml-2 pl-2 text-xs text-green-600',
                isReversedLayout ? 'lg:left-6 xl:left-12' : 'lg:right-6 xl:right-12',
              )}
            >
              Most prized project
            </ArticleLabel>
          )}
          <div
            className={twMerge(
              'ml-auto hidden pl-2 text-xs text-gray600',
              isReversedLayout ? 'lg:block' : '',
            )}
            {...inspectorProps({ fieldId: 'publishedDate' })}
          >
            <FormatDate date={publishedDate} />
          </div>
        </div>
        <h1 {...inspectorProps({ fieldId: 'title' })}>{title}</h1>
        {shortDescription && (
          <p className="mt-2" {...inspectorProps({ fieldId: 'shortDescription' })}>
            {shortDescription}
          </p>
        )}
        <Link
          href="/"
          className="mt-4 mb-2 inline-block w-fit rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          {t('article.backToHome')}
        </Link>
        <div
          className={twMerge('mt-2 text-xs text-gray600', isReversedLayout ? 'lg:hidden' : '')}
          {...inspectorProps({ fieldId: 'publishedDate' })}
        >
          <FormatDate date={publishedDate} />
        </div>
      </div>
    </div>
  );
};
