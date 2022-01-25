import styles from './Header.module.scss';
import Link from 'next/link';
import { NavigationElements } from 'interfaces/navigation.interface';
export default function Header({navigationElements}: {navigationElements: Array<NavigationElements>}) {
  return (
    <header className={styles.header}>
      <section id="site-logo" aria-label="site logo" role="img">
        Logo here.
      </section>
      <section role="navigation" aria-label="navigation section" className={styles.linkContainer}>
        {
            navigationElements.map(navigationElement => (
                <Link href={navigationElement.url} >
                    {navigationElement.displayName}
                </Link>
            ))
        }
      </section>
    </header>
  );
}
