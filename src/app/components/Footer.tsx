import Link from "next/link";
import React from "react";

const Footer = () => {
  // @TODO replace with valid links.
  return (
    <footer className="w-full flex flex-col items-center p-4">
      <div className="footer__links flex flex-col items-center md:flex-row md:gap-4">
        <Link href="#">FAQ</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Terms of Use</Link>
      </div>
      <div className="footer__copyright mt-4 md:mt-2">
        &copy; 2024 Whalepop Streaming
      </div>
    </footer>
  );
};

export default Footer;
