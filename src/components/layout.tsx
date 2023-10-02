import React from 'react';
import Header from './headfoot/Header';
import Footer from './headfoot/Footer';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer companyName="Thoughtful Gallery" />
    </div>
    </>
  );
}
