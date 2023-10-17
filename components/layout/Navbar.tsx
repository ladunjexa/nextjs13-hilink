import Link from "next/link";
import Image from "next/image";

import Button from "@/components/shared/Button";

import { navLinks } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/assets/images/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/assets/icons/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="/assets/icons/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
