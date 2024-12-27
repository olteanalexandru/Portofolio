'use client';

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from '@contentful/live-preview/react';

import Slider from '@src/components/Slider/Slider';

import { CtfRichText } from '@src/components/features/contentful';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';

interface ArticleContentProps {
  article: PageBlogPostFieldsFragment;
}
export const ArticleContent = ({ article }: ArticleContentProps) => {
  const { content } = useContentfulLiveUpdates(article);
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

  const getProjectType = () => {
    if (!article.title) return 'farm';

    switch (article.title) {
      case 'Recipe Management Application - NextJs':
        return 'recipe';
      case 'Next.js Farm Management System - Efficient Crop and Rotation Management':
        return 'farm';
      case 'Next.js E-commerce Store':
        return 'shop';
      default:
        return 'farm';
    }
  };

  return (
    <div
      {...inspectorProps({ fieldId: 'content' })}
      className="p-4 text-gray-900 dark:text-gray-200 md:p-6 lg:p-8 [&_ul]:ml-6 [&_ul]:list-disc [&_ul]:dark:text-gray-200 [&_ol]:ml-6 [&_ol]:list-decimal [&_ol]:dark:text-gray-200 [&_li]:my-1 [&_code]:rounded-md [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-gray-800 dark:[&_code]:bg-gray-800 dark:[&_code]:text-gray-200"
    >
      {article.title &&
        [
          'Recipe Management Application - NextJs',
          'Next.js Farm Management System - Efficient Crop and Rotation Management',
          'Next.js E-commerce Store',
        ].includes(article.title) && <Slider projectType={getProjectType()} />}
      <CtfRichText json={content?.json} links={content?.links} />
    </div>
  );
};
