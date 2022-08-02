import { ActiveLink } from "../ActiveLink";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { slide as Menu } from 'react-burger-menu'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbar_navigation_mobile}>
        <Menu disableAutoFocus >
            <ActiveLink text="Tu cama ideal" href="/camaideal" />
            <ActiveLink text="Consulta a un experto" href="/contacto" />
            <ActiveLink text="Laboratorio del descanso" href="/" />
            <ActiveLink text="Morning club" href="/club" />
        </Menu>
      </div>
      <div className={styles.navbar_logo}>
        <Link href="/" >
          <Image
            className={styles.navbar_logo_image}
            src="/desk-logo.png"
            alt="Colchonpedia"
            height="80"
            width="150"
          />
        </Link>
      </div>
      <div className={styles.navbar_navigation}>
        <ActiveLink text="Tu cama ideal" href="/camaideal" />
        <ActiveLink text="Consulta a un experto" href="/contacto" />
        <ActiveLink text="Laboratorio del descanso" href="/" />
        <ActiveLink text="Morning club" href="/club" />
      </div>
      
    </nav>
  );
};
