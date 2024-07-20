import styles from './StatCard.module.scss';
import { Stat } from '@/types';
import { formatNumber } from '@/utils/numberFormatter';
import Image from 'next/image';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';
import { useModalContext } from '@/context/modal.context';
import getFollowTerm from '@/utils/followTerm';

const StatCard = ({ stat }: { stat: Stat }) => {
  const { openModal } = useModalContext();

  //// COMPONENT
  return (
    <div className={styles.stat_card} onClick={() => openModal(stat.platform)}>
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
        <span>{getFollowTerm(stat.platform)}</span>
      </main>

      <footer>
        <ChangeIndicator change={stat.lastTenDays[9]} />
      </footer>
    </div>
  );
};

export default StatCard;
