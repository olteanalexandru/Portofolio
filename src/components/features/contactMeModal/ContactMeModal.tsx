'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ContactMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactMeModal = ({ isOpen, onClose }: ContactMeModalProps) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your email sending logic here
    console.log('Form submitted:', formData);
  };

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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-800">
                <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  {t('contactModal.title')}
                </Dialog.Title>
                <div className="mt-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder={t('contactModal.name')}
                        className="w-full rounded-md border p-2 dark:bg-gray-700 dark:text-white"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder={t('contactModal.email')}
                        className="w-full rounded-md border p-2 dark:bg-gray-700 dark:text-white"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder={t('contactModal.message')}
                        className="h-32 w-full rounded-md border p-2 dark:bg-gray-700 dark:text-white"
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                      {t('contactModal.send')}
                    </button>
                  </form>

                  <div className="mt-6 border-t pt-6 dark:border-gray-600">
                    <h3 className="mb-4 text-sm font-medium dark:text-white">
                      {t('contactModal.reachMe')}
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500 dark:text-gray-300"
                      >
                        <FaLinkedin size={24} />
                      </a>
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-600 hover:text-green-500 dark:text-gray-300"
                      >
                        <FaPhone size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
