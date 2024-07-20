import styles from './StatsSection.module.scss';
import stats from '@/data/stats.data.json';
import StatCard from '@/components/StatCard/StatCard';

const StatsSection = () => {
  //// COMPONENT
  return (
    <section className={styles.stats_section}>
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </section>
  );
};

export default StatsSection;
