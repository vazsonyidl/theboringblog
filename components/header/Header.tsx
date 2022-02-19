import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavigationElements } from 'interfaces/navigation.interface';
import Logo from 'public/static/logo.svg';
import Twitter from 'public/logos/twitter-piano.svg';

import styles from './Header.module.scss';

export default function Header({
  navigationElements,
}: {
  navigationElements: Array<NavigationElements>;
}) {

  const router = useRouter();
  return (
    <header className={styles.header}>
      <section
        id="site-logo"
        aria-label="site logo"
        role="img"
        className={styles.logoContainer}
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
        className={styles.navigationContainer}
      >
        {navigationElements.map((navigationElement, index) => (
          <Link href={`${navigationElement.url}`} key={index} passHref>
            <a
              role="button"
              aria-label={navigationElement.displayName}
              tabIndex={0}
              className={navigationElement.url === router.pathname ? styles.activeLink : ''}
            >
              {navigationElement.displayName}
            </a>
          </Link>
        ))}
      </section>
      <section role="link" className={styles.utilityContainer}>
        <a href="https://twitter.com/longterminco_me" role='button' aria-label='Twitter link in new tab'>
          <Twitter />
        </a>
      </section>
    </header>
  );
}
