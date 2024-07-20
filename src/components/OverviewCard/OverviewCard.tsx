import styles from './OverviewCard.module.scss';
import { DailyOverviewStat } from '@/types';

const OverviewCard = ({ stat }: { stat: DailyOverviewStat }) => {
  //// COMPONENT
  return <div className={styles.overview_card}>OverviewCard</div>;
};

export default OverviewCard;
