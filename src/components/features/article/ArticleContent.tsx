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

      default:
        return 'farm';
    }
  };

  return (
    <div
      {...inspectorProps({ fieldId: 'content' })}
      className="p-4 text-gray-900 dark:text-gray-200 md:p-6 lg:p-8"
    >
      {article.title &&
        [
          'Recipe Management Application - NextJs',
          'Next.js Farm Management System - Efficient Crop and Rotation Management',
        ].includes(article.title) && <Slider projectType={getProjectType()} />}
      <CtfRichText json={content?.json} links={content?.links} />
    </div>
  );
};
