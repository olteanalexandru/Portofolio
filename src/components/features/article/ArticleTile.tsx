'use client';

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from '@contentful/live-preview/react';
import Link from 'next/link';
import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { ArticleAuthor } from '@src/components/features/article/ArticleAuthor';
import { CtfImage } from '@src/components/features/contentful';
import { FormatDate } from '@src/components/shared/format-date';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';

interface ArticleTileProps extends HTMLProps<HTMLDivElement> {
  article: PageBlogPostFieldsFragment;
}

export const ArticleTile = ({ article, className }: ArticleTileProps) => {
  const { featuredImage, publishedDate, slug, title } = useContentfulLiveUpdates(article);
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

  const isMostPrizedProject = [
    'Recipe Management Application - NextJs',
    'Next.js Farm Management System - Efficient Crop and Rotation Management',
  ].includes(title ?? '');

  return (
    <Link className="flex flex-col" href={`/${slug}`}>
      <div
        className={twMerge(
          'flex flex-1 flex-col overflow-hidden rounded-2xl border',
          'border-gray-200 dark:border-gray-700',
          'bg-white p-4 dark:bg-gray-800 md:p-6 lg:p-8',
          'shadow-lg transition-shadow duration-200 hover:shadow-xl',
          className,
        )}
      >
        {featuredImage && (
          <div {...inspectorProps({ fieldId: 'featuredImage' })}>
            <CtfImage
              nextImageProps={{ className: 'object-cover aspect-[16/10] w-full' }}
              {...featuredImage}
            />
          </div>
        )}
        <div className="flex flex-1 flex-col py-3 px-4 md:px-5 md:py-4 lg:px-7 lg:py-5">
          {title && (
            <p
              className="h3 mb-2 text-gray-800 dark:text-gray-200 md:mb-3"
              {...inspectorProps({ fieldId: 'title' })}
            >
              {title}
            </p>
          )}
          <div className="mt-auto flex flex-col">
            {isMostPrizedProject && <p className="mb-2 text-xs text-green-600">Top project</p>}
            <div className="flex items-center">
              <ArticleAuthor article={article} />
              <div
                className={twMerge('ml-auto pl-2 text-xs text-gray-600 dark:text-gray-300')}
                {...inspectorProps({ fieldId: 'publishedDate' })}
              >
                <FormatDate date={publishedDate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
