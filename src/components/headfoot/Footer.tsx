import React from 'react';

type FooterProps = {
  companyName: string;
};

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  return (
    <>
    <footer className="bg-gray-200 py-4 bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>© {companyName}. All rights reserved.</p>
        {/* Add any other content or components for your footer */}
      </div>
    </footer>
    </>
  );
};

export default Footer;
