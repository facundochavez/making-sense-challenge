import Image from 'next/image';
import styles from './OverviewCard.module.scss';
import { OverviewStat } from '@/types';
import { formatNumber } from '@/utils/numberFormatter';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';
import { useModalContext } from '@/context/modal.context';

const OverviewCard = ({ overview }: { overview: OverviewStat }) => {
  const { openModal } = useModalContext();

  //// COMPONENT
  return (
    <div
      className={styles.overview_card}
      onClick={() => openModal(overview.platform)}
    >
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
