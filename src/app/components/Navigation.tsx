import Link from "next/link";
import React from "react";

const Navigation = () => {
  // @TODO - loop over input menu list and create menu links.
  return (
    <nav className="navigation">
      <ul className="flex flex-col md:flex-row md:gap-4">
        <li>
          <Link href={"#"}>{"<Input menu item - 1>"}</Link>
        </li>
        <li>
          <Link href={"#"}>{"<Input menu item - 2>"}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
