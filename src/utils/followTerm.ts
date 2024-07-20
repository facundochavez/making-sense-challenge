import { Platform } from '@/types';

const getFollowTerm = (platform: Platform) => {
  const TERM = platform === 'youtube' ? 'subscribers' : 'followers';
  return TERM;
};

export default getFollowTerm;