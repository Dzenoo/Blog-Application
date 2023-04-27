import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <header>
      <Link href="/">
        <a href="">
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
