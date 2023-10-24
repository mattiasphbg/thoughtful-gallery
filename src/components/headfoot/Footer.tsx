import React from "react";
import Link from "next/link";
import { ModeToggle } from "~/components/ui/darkmodeToggle";

interface FooterProps {
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <div className="flex gap-4">
        <Link className="text-xs underline-offset-4 hover:underline" href="#">
          Facebook
        </Link>
        <Link className="text-xs underline-offset-4 hover:underline" href="#">
          Twitter
        </Link>
        <Link className="text-xs underline-offset-4 hover:underline" href="#">
          Instagram
        </Link>
      </div>
      <p className="text-xs text-zinc-500 dark:text-zinc-400 sm:ml-auto">
        © {companyName} All rights reserved.
      </p>
      <ModeToggle />
    </footer>
  );
};

export default Footer;
