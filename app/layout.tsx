// This remains a server component
import PrivyProvider from '@/app/Components/providers/PrivyProvider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <PrivyProvider>
          {children}
        </PrivyProvider>
      </body>
    </html>
  );
}