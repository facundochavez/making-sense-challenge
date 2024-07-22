import { Platform } from '@/types';

/**
 * Returns the appropriate term for followers based on the given platform.
 *
 * @param {Platform} platform - The platform for which the term is needed.
 * @returns {string} - 'subscribers' if the platform is 'youtube', otherwise 'followers'.
 */
const getFollowersTerm = (platform: Platform): string => {
  const TERM = platform === 'youtube' ? 'subscribers' : 'followers';
  return TERM;
};

export default getFollowersTerm;
