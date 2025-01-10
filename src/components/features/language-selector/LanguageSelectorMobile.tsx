'use client';

import { ChevronDownIcon, ChevronUpIcon } from '@contentful/f36-icons';
import { useCurrentLocale } from 'next-i18n-router/client';
import { useEffect, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

import i18nConfig, { locales } from '@src/i18n/config';

const useClickOutside = (ref, setIsOpen) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setIsOpen]);
};

export const LanguageSelectorMobile = ({ localeName, onChange, displayName }) => {
  const currentLocale = useCurrentLocale(i18nConfig);
  const { t } = useTranslation();
  const menuRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const localesToShow = locales.filter(locale => locale !== currentLocale);
  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(containerRef, setIsOpen);

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="menu-locale"
        className="flex items-center rounded-md p-2 text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
        onClick={() => setIsOpen(currentState => !currentState)}
      >
        {localeName(currentLocale)}
        {isOpen ? (
          <ChevronUpIcon variant="secondary" className="pl-1" />
        ) : (
          <ChevronDownIcon variant="secondary" className="pl-1" />
        )}
      </button>
      <FocusLock disabled={!isOpen} returnFocus={true}>
        <ul
          ref={menuRef}
          className={twMerge(
            'top-100 absolute right-0 z-10 w-32 translate-y-3 cursor-pointer rounded-md bg-colorWhite text-center text-base shadow dark:bg-gray-800',
            isOpen ? 'block' : 'hidden',
          )}
          id="menu-locale"
          role="menu"
        >
          {localesToShow?.map((availableLocale, index) => (
            <li key={availableLocale} role="none">
              <button
                role="menuitem"
                className="block w-full py-2 px-4 text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                onClick={event => {
                  const syntheticEvent = {
                    ...event,
                    target: { value: availableLocale },
                  };
                  onChange(syntheticEvent);
                  setIsOpen(false);
                }}
                value={availableLocale}
              >
                {displayName(availableLocale).of(localeName(availableLocale))}
              </button>
            </li>
          ))}
        </ul>
      </FocusLock>
    </div>
  );
};
