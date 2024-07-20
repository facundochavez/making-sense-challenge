import OverviewCard from '@/components/OverviewCard/OverviewCard';
import styles from './OverviewSection.module.scss';
import overviewData from '@/data/overview.data.json';
import { OverviewStat } from '@/types';

const overview = overviewData as OverviewStat[];

const DailyOverviewSection = () => {
  //// COMPONENT
  return (
    <section className={styles.overview_section}>
      <h2>Overview - Today</h2>
      <div className={styles.overview_section__cards_container}>
        {overview.map((overview) => (
          <OverviewCard key={overview.id} overview={overview} />
        ))}
      </div>
    </section>
  );
};

export default DailyOverviewSection;
