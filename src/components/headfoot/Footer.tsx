import React from "react";

interface FooterProps {
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  return (
    <footer className="flex flex-col items-center bg-neutral-200 text-center text-white dark:bg-neutral-600">
      {/* Copyright section */}
      <div className="w-full bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a
          className="text-neutral-800 dark:text-neutral-400"
          href="https://tailwind-elements.com/"
        >
          {companyName}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
