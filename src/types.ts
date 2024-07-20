export type Platform = 'facebook' | 'twitter' | 'instagram' | 'youtube';

export type Stat = {
  id: number;
  platform: Platform;
  username: string;
  value: number;
  lastTenDays: number[]
};

export type OverviewStat = {
  id: number;
  stat: string;
  value: number;
  change: number;
  platform: Platform;
}
