import { Switch } from 'antd';
import styles from './ModeToggle.module.scss';
import { useTheme } from 'next-themes';
import { useState } from 'react';

const ModeToggle = () => {
  // Extract theme values
  const { setTheme, theme } = useTheme();

  // Define hover state to change text color
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.mode_toggle}>
      <span
        style={{
          color:
            theme === 'light'
              ? 'var(--toggle)'
              : isHovered
              ? 'var(--foreground)'
              : 'var(--foreground-pale)',
        }}
      >
        Dark Mode
      </span>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Switch
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          defaultChecked={theme === 'dark' ? true : false}
        />
      </div>
    </div>
  );
};

export default ModeToggle;
