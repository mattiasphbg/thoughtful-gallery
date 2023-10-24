import Link from "next/link";
// import { api } from "~/utils/api";
// import type { Layers } from "@prisma/client";
// import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

// type urlType = {
//   id: number;
//   route: string;
//   layer: Layers | null;
//   title: string;
// };

const Header: React.FC = () => {
  // const { data: d } = api.url.getAll.useQuery<urlType[]>();

  const navLinks = [
    { id: 1, href: "/adventure", title: "Adventures" },
    { id: 2, href: "/news", title: "News" },
    { id: 3, href: "/about", title: "About" },
    { id: 4, href: "/feedback", title: "Contact" },
  ];

  return (
    <>
      <header className="flex h-14 items-center justify-between px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="/">
          <svg
            className=" h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m16 6 4 14" />
            <path d="M12 6v14" />
            <path d="M8 8v12" />
            <path d="M4 4v16" />
          </svg>
          <span className="sr-only">Virtual Museum</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              className="text-sm font-medium underline-offset-4 hover:underline"
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
          <UserButton />
        </nav>
      </header>
    </>
  );
};

export default Header;
