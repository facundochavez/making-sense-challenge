/**
 * Formats a number into a more readable string representation.
 *
 * @param {number} num - The number to format.
 * @returns {string} - The formatted number as a string. If the number is 1 million or more, it appends 'M'.
 * If the number is 10 thousand or more, it appends 'k'. Otherwise, it returns the number as a string.
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${Math.floor(num / 1000000)}M`;
  } else if (num >= 10000) {
    return `${Math.floor(num / 1000)}k`;
  }
  return num.toString();
};
