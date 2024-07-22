import styles from './StatsSection.module.scss';
import statsData from '@/data/stats.data.json';
import StatCard from '@/components/StatCard/StatCard';
import { Stat } from '@/types';

const stats: Stat[] = statsData as Stat[];

const StatsSection = () => {
  return (
    <section className={styles.stats_section}>
      <ul>
        {stats.map((stat, index) => (
          <StatCard key={stat.id} index={index} stat={stat} />
        ))}
      </ul>
    </section>
  );
};

export default StatsSection;
