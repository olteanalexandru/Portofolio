'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5'; // Add this import at the top
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

interface ContactMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactMeModal = ({ isOpen, onClose }: ContactMeModalProps) => {
  const { t } = useTranslation('common');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_ynv83op',
        'template_3oljtxo',
        {
          to_email: 'oltean.alexandru11@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '92Cb78cmp5MUyYktO',
      );

      toast.success(t('contactModal.success'));
      setFormData({ name: '', email: '', message: '' });
      onClose();
    } catch (error) {
      toast.error(t('contactModal.error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 font-urbanist" onClose={onClose}>
        <div className={urbanist.variable}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all dark:bg-gray-800">
                  <div className={`font-urbanist`}>
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="text-2xl font-bold leading-6 text-gray-900 dark:text-white">
                        {t('contactModal.title')}
                      </Dialog.Title>
                      <button
                        onClick={onClose}
                        className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                      >
                        <IoClose size={24} />
                      </button>
                    </div>
                    <div className="mt-6">
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            {t('contactModal.form.name')}
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full rounded-lg border border-gray-300 p-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            {t('contactModal.form.email')}
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full rounded-lg border border-gray-300 p-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
                            {t('contactModal.form.message')}
                          </label>
                          <textarea
                            required
                            className="h-32 w-full rounded-lg border border-gray-300 p-3 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 font-medium text-white transition-colors hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                        >
                          {isLoading ? t('contactModal.form.sending') : t('contactModal.form.send')}
                        </button>
                      </form>

                      <div className="mt-8 border-t pt-6 dark:border-gray-600">
                        <h3 className="mb-4 text-sm font-medium text-gray-900 dark:text-white">
                          {t('contactModal.alternateContact')}
                        </h3>
                        <div className="flex space-x-6">
                          <a
                            href="https://www.linkedin.com/in/alexandru-florin-oltean-7b3b6922b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform text-gray-600 transition-transform hover:scale-110 hover:text-blue-500 dark:text-gray-300"
                            title="LinkedIn Profile"
                          >
                            <FaLinkedin size={28} />
                          </a>
                          <a
                            href="https://github.com/olteanalexandru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transform text-gray-600 transition-transform hover:scale-110 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                            title="GitHub Profile"
                          >
                            <FaGithub size={28} />
                          </a>
                          <a
                            href="tel:+40755494691"
                            className="transform text-gray-600 transition-transform hover:scale-110 hover:text-green-500 dark:text-gray-300"
                            title="+40 755 494 691"
                          >
                            <FaPhone size={28} />
                          </a>
                        </div>
                        <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                          <p>Email: oltean.alexandru11@gmail.com</p>
                          <p>Phone: +40 755 494 691</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
