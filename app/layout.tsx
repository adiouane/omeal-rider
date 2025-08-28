import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Omeal Driver App',
  description: 'Progressive Web App for Omeal delivery drivers',
  themeColor: '#10b981',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Omeal Driver" />
        <link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' fill='%2310b981' viewBox='0 0 256 256'%3E%3Cpath d='M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a16,16,0,0,0-16-16H24A16,16,0,0,0,8,64V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32,32,0,0,0-62,0H103a32,32,0,0,0-62,0H24V64H168v8a16,16,0,0,0,16,16h48Z'/%3E%3C/svg%3E" />
      </head>
      <body className={inter.className} style={{ WebkitTouchCallout: 'none', WebkitUserSelect: 'none' }}>
        {children}
      </body>
    </html>
  );
}