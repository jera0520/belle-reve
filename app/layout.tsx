import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Belle Rêve - Premium K-Beauty Co-creation',
  description: 'Global localized K-beauty brand with cultural identity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
