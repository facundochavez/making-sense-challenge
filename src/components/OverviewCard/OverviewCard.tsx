import Image from 'next/image';
import styles from './OverviewCard.module.scss';
import { DailyOverviewStat } from '@/types';
import { formatNumber } from '@/utils/NumberFormatter';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';

const OverviewCard = ({ overview }: { overview: DailyOverviewStat }) => {
  //// COMPONENT
  return (
    <div className={styles.overview_card}>
      <header>
        <span>{overview.stat}</span>
        <Image
          src={`/icons/icon-${overview.platform}.svg`}
          alt={overview.platform}
          width={20}
          height={20}
        />
      </header>
      <footer>
        <p>{formatNumber(overview.value)}</p>
        <ChangeIndicator change={overview.change} isPercentage />
      </footer>
    </div>
  );
};

export default OverviewCard;
