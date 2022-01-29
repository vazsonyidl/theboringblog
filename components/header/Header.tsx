import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationElements } from 'interfaces/navigation.interface';

export default function Header({
  navigationElements,
}: {
  navigationElements: Array<NavigationElements>;
}) {
  return (
    <header className={styles.header}>
      <section id="site-logo" aria-label="site logo" role="img" className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/static/logo.svg" width={30} height={30} />
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
