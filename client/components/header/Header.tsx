import Link from 'next/link';
import { useRouter } from 'next/router';
import { navigationElements as elements } from 'constants/navigation.const';
import { NavigationElements } from 'interfaces/navigation.interface';
import Logo from 'public/static/logo.svg';
import Discord from 'public/csv/discord.svg';

import styles from './Header.module.scss';

export default function Header({
  navigationElements = elements,
}: {
  navigationElements?: Array<NavigationElements>;
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
              className={
                navigationElement.url === router.pathname
                  ? styles.activeLink
                  : ''
              }
            >
              {navigationElement.displayName}
            </a>
          </Link>
        ))}
      </section>
      <section role="link" className={styles.utilityContainer}>
        <a
          className={styles.gradientButton}
          type="button"
          role="button"
          href="https://discord.gg/t4EspcHHdN"
        >
          <span className={styles.btnText}>
            Join Discord
          </span>
          <Discord />
        </a>
      </section>
    </header>
  );
}
