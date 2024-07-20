import OverviewCard from '@/components/OverviewCard/OverviewCard';
import styles from './OverviewSection.module.scss';
import dailyOverview from '@/data/daily-overview.data.json';

const DailyOverviewSection = () => {
  //// COMPONENT
  return (
    <section className={styles.overview_section}>
      <h2>Overview - Today</h2>
      <div className={styles.overview_section__cards}>
        {dailyOverview.map((overview) => (
          <OverviewCard key={overview.id} stat={overview} />
        ))}
      </div>
    </section>
  );
};

export default DailyOverviewSection;
