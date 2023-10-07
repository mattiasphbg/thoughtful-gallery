import React from 'react';
import Header from './headfoot/Header';
import Footer from './headfoot/Footer';
import { ThemeProvider } from '../components/ui/theme-provider';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
       <div className="flex flex-col min-h-screen">
          <Header />
            <main className="flex-grow">{children}</main>
          <Footer companyName="Thoughtful Gallery" />
        </div>
      </ThemeProvider>      
    </>
  );
}
