import styles from './StatsSection.module.scss';
import statsData from '@/data/stats.data.json';
import StatCard from '@/components/StatCard/StatCard';
import { Stat } from '@/types';

const stats: Stat[] = statsData as Stat[];

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
