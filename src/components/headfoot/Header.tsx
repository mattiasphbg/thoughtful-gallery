import Link from "next/link";
import {ModeToggle} from '../ui/darkmodeToggle'

const Header: React.FC = () => {
  return (
    <>
    <header className="flex items-center justify-center">
      {/* Navigation bar */}
      <nav className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-center" data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-center px-3 text-center">
          <div className="flex items-center">
            {/* Hamburger menu button */}
            {/* Rest of the code */}
          </div>

          {/* Navigation links */}
          <div className="!visible hidden  basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContentX" data-te-collapse-item>
            <ul className="mr-auto flex flex-col lg:flex-row justify-center" data-te-navbar-nav-ref>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link href="/" className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                  Home
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link href="/adventure" className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                  Adventure
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link href="/feedback" className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                  Feedback
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link href="/about" className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                  About
                </Link>
              </li>
              <li className="mb-2 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                <Link href="/news" className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ModeToggle/>
      </nav>
    </header>
    </>
  );

};

export default Header;
