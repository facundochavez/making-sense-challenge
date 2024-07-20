import styles from './StatCard.module.scss';
import { Stat } from '@/types';
import { formatNumber } from '@/utils/NumberFormatter';
import Image from 'next/image';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';

const StatCard = ({ stat }: { stat: Stat }) => {
  //// COMPONENT
  return (
    <div className={styles.stat_card}>
      <div
        className={styles.stat_card__heading_line}
        style={{ background: `var(--${stat.platform}-color` }}
      />

      <header>
        <Image
          src={`/icons/icon-${stat.platform}.svg`}
          alt={stat.platform}
          width={20}
          height={20}
        />
        <p>{stat.username}</p>
      </header>

      <main>
        <p>{formatNumber(stat.value)}</p>
        <span>{stat.platform === 'youtube' ? 'Subscribers' : 'Followers'}</span>
      </main>

      <footer>
        <ChangeIndicator change={stat.change} />
      </footer>
    </div>
  );
};

export default StatCard;
