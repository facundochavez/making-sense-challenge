import { formatNumber } from '@/utils/numberFormatter';
import styles from './ChangeIndicator.module.scss';
import Image from 'next/image';

const ChangeIndicator = ({
  change,
  isPercentage = false,
  isBig = false,
}: {
  change: number;
  isPercentage?: boolean;
  isBig?: boolean;
}) => {
  //// COMPONENT
  return (
    <div className={styles.change_indicator}>
      <Image
        src={`/icons/icon-${change >= 0 ? 'up' : 'down'}.svg`}
        alt={change >= 0 ? 'Up arrow' : 'Down arrow'}
        width={10}
        height={5}
        style={isBig ? { width: 12, height: 7, marginRight: 3 } : {}}
      />
      <p
        style={{
          color: change >= 0 ? 'var(--lime-green)' : 'var(--bright-red)',
          fontSize: isBig ? '40px' : '14px',
        }}
      >
        {formatNumber(Math.abs(change))}
        {isBig ? '' : isPercentage ? '%' : ' Today'}
      </p>
    </div>
  );
};

export default ChangeIndicator;
