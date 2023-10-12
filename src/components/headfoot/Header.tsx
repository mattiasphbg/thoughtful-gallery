import Link from "next/link";
import { ModeToggle } from "../ui/darkmodeToggle";
import { api } from "~/utils/api";
import { Layers } from "@prisma/client";

type urlType = {
  id: number;
  route: string;
  layer: Layers | null;
  title: string;
};

const Header: React.FC = () => {
  const { data: d } = api.url.getAll.useQuery<urlType[]>();

  return (
    <>
      <header className="flex items-center justify-center">
        {/* Navigation bar */}

        <nav
          className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-center"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-center px-3 text-center">
            <Link
              href="/"
              className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/logos-and-brands-3/512/84_Dev_logo_logos-512.png"
                alt="Logo"
                className=" h-20 w-20"
              />
            </Link>

            {/* Navigation links */}
            <div
              className="!visible hidden  basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContentX"
              data-te-collapse-item
            >
              <ul
                className="mr-auto flex flex-col justify-center lg:flex-row"
                data-te-navbar-nav-ref
              >
                {d?.map((route) => (
                  <li
                    className="mb-4 lg:mb-0 lg:pr-2"
                    data-te-nav-item-ref
                    key={route.id}
                  >
                    <Link
                      href={route.route}
                      className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                      data-te-nav-link-ref
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      {route.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ModeToggle />
        </nav>
      </header>
    </>
  );
};

export default Header;
