import OverviewCard from '@/components/OverviewCard/OverviewCard';
import styles from './OverviewSection.module.scss';
import overviewData from '@/data/overview.data.json';
import { OverviewStat } from '@/types';
import { useTheme } from 'next-themes';

const overview = overviewData as OverviewStat[];

const DailyOverviewSection = () => {
  // Extract theme
  const { theme } = useTheme();

  return (
    <section className={styles.overview_section}>
      <h2
        style={{
          color:
            theme === 'light' ? 'var(--foreground-pale)' : 'var(--foreground)',
        }}
      >
        Overview - Today
      </h2>
      <ul>
        {overview.map((overview, index) => (
          <OverviewCard key={overview.id} index={index} overview={overview} />
        ))}
      </ul>
    </section>
  );
};

export default DailyOverviewSection;
