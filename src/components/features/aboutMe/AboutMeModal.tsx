'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { IoClose } from 'react-icons/io5'; // Add this import at the top

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
              <Dialog.Panel className="w-full max-w-2xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-800">
                <div className="mb-6 flex items-center justify-between">
                  <Dialog.Title className="text-2xl font-bold leading-6 text-gray-900 dark:text-white">
                    {t('aboutModal.title')}
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                  >
                    <IoClose size={24} />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* About Me Description */}
                  <div className="prose max-w-none dark:prose-invert">
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('aboutModal.description')}
                    </p>
                  </div>

                  {/* Work Experience Section */}
                  <div className="mt-8">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                      {t('banner.workExperience')}
                    </h3>
                    <div className="space-y-6">
                      {workExperience.map((work, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-gray-200 pl-4 pb-2 dark:border-gray-700"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                {work.title}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {work.company}
                              </p>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {work.startDate} - {work.endDate}
                            </span>
                          </div>
                          <p className="mt-2 text-gray-600 dark:text-gray-300">
                            {work.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Close button */}
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
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
