import styles from './Header.module.scss';
import ModeToggle from '@/components/ModeToggle/ModeToggle';
import getTotalFollowers from '@/utils/TotalFollowers';

const Header = () => {
  //// COMPONENT
  return (
    <header className={styles.header}>
      <div className={styles.header__max_width}>
        <aside>
          <h1>Social Media Dashboard</h1>
          <span>Total followers: {getTotalFollowers().toLocaleString('en-US')}</span>
        </aside>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
