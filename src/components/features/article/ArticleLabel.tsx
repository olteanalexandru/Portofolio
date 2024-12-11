import { HTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ArticleLabelProps extends HTMLProps<HTMLSpanElement> {
  children: ReactNode;
}

export const ArticleLabel = ({ children, className, ...props }: ArticleLabelProps) => {
  return (
    <span
      className={twMerge(
        'rounded px-2 py-1 text-2xs font-semibold uppercase leading-none tracking-widest',
        'bg-purple-200 dark:bg-purple-900',
        'text-purple-600 dark:text-purple-200',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
