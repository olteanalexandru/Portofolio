'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { IoClose } from 'react-icons/io5';

interface AboutMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutMeModal = ({ isOpen, onClose }: AboutMeModalProps) => {
  const { t } = useTranslation('common');

  const workExperience = t('aboutModal.workExperience', { returnObjects: true }) as Array<{
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-8 text-left shadow-xl transition-all dark:bg-gray-800">
                <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
                  <Dialog.Title className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {t('aboutModal.title')}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    aria-label="Close modal"
                  >
                    <IoClose size={24} />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* About Me Description */}
                  <div className="prose max-w-none dark:prose-invert">
                    <p className="whitespace-pre-line text-lg leading-relaxed tracking-wide text-gray-600 dark:text-gray-300">
                      {t('aboutModal.description')}
                    </p>
                  </div>

                  {/* Work Experience Section */}
                  <div>
                    <h3 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {t('banner.workExperience')}
                    </h3>
                    <div className="space-y-8">
                      {workExperience.map((work, index) => (
                        <div
                          key={index}
                          className="relative border-l-2 border-gray-200 pl-6 dark:border-gray-700"
                        >
                          <div className="absolute -left-[5px] top-[14px] h-2 w-2 rounded-full bg-gray-200 dark:bg-gray-700" />
                          <div className="flex flex-col space-y-2 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
                            <div>
                              <h4 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                                {work.title}
                              </h4>
                              <p className="text-base font-medium text-gray-500 dark:text-gray-400">
                                {work.company}
                              </p>
                            </div>
                            <span className="whitespace-nowrap text-sm font-medium text-gray-500 dark:text-gray-400">
                              {work.startDate} - {work.endDate}
                            </span>
                          </div>
                          <p className="mt-3 text-base leading-relaxed tracking-wide text-gray-600 dark:text-gray-300">
                            {work.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Close button */}
                <div className="mt-8 flex justify-end border-t border-gray-200 pt-6 dark:border-gray-700">
                  <button
                    type="button"
                    className="rounded-lg bg-gray-100 px-6 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
