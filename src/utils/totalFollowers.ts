import stats from '@/data/stats.data.json';

/**
 * Calculates the total number of followers from the stats data.
 *
 * @returns {number} - The total number of followers.
 */
const getTotalFollowers = (): number => {
  return stats.reduce((total, stat) => total + stat.value, 0);
};

export default getTotalFollowers;
