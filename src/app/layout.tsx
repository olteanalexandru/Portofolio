import '@src/app/globals.css';
import { ThemeProvider } from '@src/components/shared/theme-context';

interface LayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-900">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
