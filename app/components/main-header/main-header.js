import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Link from "next/link";
import Image from "next/image";
import MainHeaderBackground from "@/app/components/main-header/main-header-background";
import NavLink from "@/app/components/main-header/nav-link";

export default function MainHeader() {

  return (
    <>
      <MainHeaderBackground/>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority/>
          Nextjs Foodies
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink
                href="/meals"
              >
                Browse Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                href="/community"
              >
                Foodies Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}