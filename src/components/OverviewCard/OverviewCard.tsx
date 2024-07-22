import Image from 'next/image';
import styles from './OverviewCard.module.scss';
import { OverviewStat } from '@/types';
import formatNumber from '@/utils/numberFormatter';
import ChangeIndicator from '../ChangeIndicator/ChangeIndicator';
import { useModalContext } from '@/context/Modal.context';

const OverviewCard = ({index, overview }: { index: number; overview: OverviewStat }) => {
  // Extract modal context values
  const { openModal } = useModalContext();

  return (
    <li
      className={styles.overview_card}
      onClick={() => openModal(overview.platform)}
      style={{ animationDelay: `${index * 0.05}s` }}
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
    </li>
  );
};

export default OverviewCard;
