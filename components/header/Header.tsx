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
          <a role="button" aria-label="Home navigation button" tabIndex={0}>
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
            <a role="button" aria-label={navigationElement.displayName} tabIndex={0}>
              {navigationElement.displayName}
            </a>
          </Link>
        ))}
        <Link href='/demo'>
          <a role='button'>Demo</a>
        </Link>
      </section>
    </header>
  );
}
