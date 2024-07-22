import styles from './FollowersChart.module.scss';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Stat } from '@/types';
import getChartData from '@/utils/chartData';

const FollowersChart = ({
  stat,
  followersTerm,
}: {
  stat: Stat;
  followersTerm: string;
}) => {
  // Get data for chart
  const data = getChartData(stat.lastTenDays);

  // Return null if data is not found
  if (!data) return null;

  return (
    <ResponsiveContainer className={styles.followers_chart}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: -25,
        }}
      >
        <CartesianGrid
          strokeDasharray='3 3'
          stroke='var(--foreground-pale)'
          strokeOpacity={0.5}
        />
        <XAxis
          dataKey='date'
          padding={{ left: 50 }}
          tick={{ fill: 'var(--foreground-pale)' }}
        />
        <YAxis tick={{ fill: 'var(--foreground-pale)' }} />
        <Tooltip
          content={
            // @ts-ignore
            <CustomTooltip followersTerm={followersTerm} />
          }
        />
        <Line
          type='monotone'
          dataKey='followers'
          stroke='var(--chart)'
          activeDot={{ r: 8 }}
          dot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({
  payload,
  active,
  followersTerm,
}: {
  payload: any;
  active: boolean;
  followersTerm: string;
}) => {

  if (active) {
    return (
      <div
        className={styles.custom_tooltip}
        style={{
          borderColor: 'var(--chart)',
          color: 'var(--chart)',
        }}
      >
        <p>{`${payload[0].value} new ${followersTerm}`}</p>
      </div>
    );
  }

  return null;
};

export default FollowersChart;
