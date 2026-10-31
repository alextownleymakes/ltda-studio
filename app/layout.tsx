import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Charis_SIL, Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import Content from "./components/shared/Content";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

// the secondary font: everything but the name and page titles
const charis = Charis_SIL({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-charis',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alex Ivy-Townley",
  description: "Full stack software engineer, musician, and theoretical physics researcher.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${roboto.variable} ${charis.variable} body dark:bg-dark-1 dark:color-light-1`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Content>
              {children}
            </Content>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
