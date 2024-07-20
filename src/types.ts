export type Stat = {
  id: number;
  platform: string;
  username: string;
  value: number;
  change: number;
};

export type DailyOverviewStat = {
  id: number;
  stat: string;
  value: number;
  change: number;
  platform: string;
}