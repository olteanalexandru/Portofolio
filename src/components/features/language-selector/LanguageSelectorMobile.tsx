'use client';

import { LanguageIcon, CloseIcon } from '@contentful/f36-icons';
import { useCurrentLocale } from 'next-i18n-router/client';
import { useEffect, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

import { Portal } from '@src/components/shared/portal';
import i18nConfig, { locales } from '@src/i18n/config';

export const LanguageSelectorMobile = ({ localeName, onChange, displayName }) => {
  const currentLocale = useCurrentLocale(i18nConfig);
  const { t } = useTranslation();
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    const close = e => {
      if (e.key === 'Escape') {
        setShowDrawer(false);
      }
    };

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  });

  return (
    <>
      <button
        title={t('common.languageDrawer')}
        onClick={() => setShowDrawer(currentState => !currentState)}
        aria-expanded={showDrawer}
        aria-controls="locale-drawer"
        className="rounded-md p-2 text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
      >
        {currentLocale ? displayName(currentLocale).of(localeName(currentLocale)) : 'EN'}
      </button>

      <Portal>
        <FocusLock disabled={!showDrawer} returnFocus={true}>
          <div
            role="presentation"
            tabIndex={-1}
            className={twMerge(
              'fixed top-0 left-0 h-full w-full bg-colorBlack/[0.4] transition-opacity duration-150',
              showDrawer ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
            )}
            onClick={() => setShowDrawer(false)}
          />
          <div
            id="locale-drawer"
            aria-modal="true"
            aria-hidden={!showDrawer}
            className={twMerge(
              'fixed top-0 right-0 z-40 h-full w-[80vw] bg-colorWhite py-8 px-5 transition-transform duration-300 ease-in-out dark:bg-gray-800',
              showDrawer ? 'translate-x-0' : 'translate-x-full',
            )}
          >
            <div className="flex items-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                {t('common.regionalSettings')}
              </h2>

              <button className="ml-auto pl-2" onClick={() => setShowDrawer(false)}>
                <CloseIcon width="18px" height="18px" variant="secondary" />
              </button>
            </div>

            <p className="mt-8 text-base font-semibold text-colorBlack dark:text-gray-400">
              {t('common.language')}
            </p>
            <select
              className="mt-2 block w-full rounded-md border border-gray300 bg-white py-2 px-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              defaultValue={currentLocale}
              onChange={onChange}
            >
              {locales?.map(availableLocale => (
                <option key={availableLocale} value={availableLocale}>
                  {displayName(availableLocale).of(localeName(availableLocale))}
                </option>
              ))}
            </select>
          </div>
        </FocusLock>
      </Portal>
    </>
  );
};
