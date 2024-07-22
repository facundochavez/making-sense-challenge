import styles from './StatCard.module.scss';
import { Stat } from '@/types';
import { formatNumber } from '@/utils/numberFormatter';
import Image from 'next/image';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';
import { useModalContext } from '@/context/Modal.context';
import getFollowersTerm from '@/utils/followersTerm';

const StatCard = ({ index, stat }: { index: number; stat: Stat }) => {
  // Extract modal context values
  const { openModal } = useModalContext();

  return (
    <li className={styles.stat_card} onClick={() => openModal(stat.platform)} style={{ animationDelay: `${index * 0.1}s` }}>
      <div
        className={styles.stat_card__heading_line}
        style={{
          background: `var(--${stat.platform}-color${
            stat.platform === 'instagram' ? '-gradient' : ''
          }`,
        }}
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
        <span>{getFollowersTerm(stat.platform)}</span>
      </main>

      <footer>
        <ChangeIndicator change={stat.lastTenDays[9]} />
      </footer>
    </li>
  );
};

export default StatCard;
