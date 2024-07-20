import styles from './ChangeIndicator.module.scss';
import Image from 'next/image';

const ChangeIndicator = ({
  change,
  isPercentage = false,
}: {
  change: number;
  isPercentage?: boolean;
}) => {
  //// COMPONENT
  return (
    <div className={styles.change_indicator}>
      <Image
        src={`/icons/icon-${change >= 0 ? 'up' : 'down'}.svg`}
        alt={change >= 0 ? 'Up arrow' : 'Down arrow'}
        width={10}
        height={5}
      />
      <p style={{ color: change >= 0 ? 'var(--lime-green)' : 'var(--bright-red)' }}>{Math.abs(change)}{isPercentage ? '%' : ' Today'}</p>
    </div>
  );
};

export default ChangeIndicator;
