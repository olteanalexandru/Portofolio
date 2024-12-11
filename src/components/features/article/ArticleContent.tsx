'use client';

import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from '@contentful/live-preview/react';

import { CtfRichText } from '@src/components/features/contentful';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';

interface ArticleContentProps {
  article: PageBlogPostFieldsFragment;
}
export const ArticleContent = ({ article }: ArticleContentProps) => {
  const { content } = useContentfulLiveUpdates(article);
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

  return (
    <div
      {...inspectorProps({ fieldId: 'content' })}
      className="p-4 text-gray-900 dark:text-gray-200 md:p-6 lg:p-8"
    >
      <CtfRichText json={content?.json} links={content?.links} />
    </div>
  );
};
