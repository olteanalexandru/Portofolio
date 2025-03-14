import { dir } from 'i18next';
import type { Metadata, Viewport } from 'next';
import { Urbanist } from 'next/font/google';
import { draftMode } from 'next/headers';

import { ContentfulPreviewProvider } from '@src/components/features/contentful';
import { WhatsAppChatWrapper } from '@src/components/features/whatsappChat';
import TranslationsProvider from '@src/components/shared/i18n/TranslationProvider';
import { Footer } from '@src/components/templates/footer';
import { Header } from '@src/components/templates/header';
import initTranslations from '@src/i18n';
import { locales } from '@src/i18n/config';
import { ThemeProvider } from '@src/components/shared/theme-context';

export async function generateMetadata() {
  const metatadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  } as Metadata;

  return metatadata;
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export async function generateStaticParams(): Promise<LayoutProps['params'][]> {
  return locales.map(locale => ({ locale }));
}

const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

const allowedOriginList = ['https://app.contentful.com', 'https://app.eu.contentful.com'];

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function PageLayout({ children, params }: LayoutProps) {
  const { isEnabled: preview } = draftMode();
  const { locale } = params;
  const { resources } = await initTranslations({ locale });
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <html lang={locale} dir={dir(locale)}>
      <head>
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
      </head>

      <body className={urbanist.variable}>
        <TranslationsProvider locale={locale} resources={resources}>
          <ContentfulPreviewProvider
            locale={locale}
            enableInspectorMode={preview}
            enableLiveUpdates={preview}
            targetOrigin={allowedOriginList}
          >
            <ThemeProvider>
              <main className="bg-white font-sans transition-colors dark:bg-gray-900 dark:text-white">
                <Header />
                {children}
                <Footer />
              </main>
              <div id="portal" className="font-sans" />
              {whatsappNumber && <WhatsAppChatWrapper phoneNumber={whatsappNumber} />}
            </ThemeProvider>
          </ContentfulPreviewProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
