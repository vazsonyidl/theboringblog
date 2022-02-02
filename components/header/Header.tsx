import styles from './Header.module.scss';
import Link from 'next/link';

import Logo from 'public/static/logo.svg';
import { NavigationElements } from 'interfaces/navigation.interface';

export default function Header({
  navigationElements,
}: {
  navigationElements: Array<NavigationElements>;
}) {
  return (
    <header className={styles.header}>
      <section
        id="site-logo"
        aria-label="site logo"
        role="img"
        className={styles.logo}
      >
        <Link href="/">
          <a role='link' aria-label='Home navigation button'>
            <Logo />
          </a>
        </Link>
      </section>
      <section
        role="navigation"
        aria-label="navigation section"
        className={styles.linkContainer}
      >
        {navigationElements.map((navigationElement, index) => (
          <Link href={`/${navigationElement.url}`} key={index}>
            {navigationElement.displayName}
          </Link>
        ))}
      </section>
    </header>
  );
}
