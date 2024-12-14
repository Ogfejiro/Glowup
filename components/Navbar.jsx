import Link from "next/link";

export default function Navbar() {
  return (
    <nav id="home" className="sticky top-0 bg-white shadow-md z-10">
      <div className="md:py-6 py-4 flex items-center justify-between padding-x 2xl:px-0 maxWidth">
        <div className="flex-shrink-0">
          <img
            src="/logo.svg"
            alt="Logo"
            width={227}
            height={38}
            className="md:w-[227px] md:h-[38px] h-[30px] w-[187px]"
          />
        </div>

        <ul className="2xl:justify-end lg:justify-center justify-end flex-grow lg:space-x-14 space-x-7 text-[#121212] hidden md:flex">
          <li>
            <Link href="#home" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-gray-900">
              Services
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
