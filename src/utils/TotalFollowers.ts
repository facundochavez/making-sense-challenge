import stats from '@/data/stats.data.json';

const getTotalFollowers = () => {
  return stats.reduce((total, stat) => total + stat.value, 0);
};

export default getTotalFollowers;
