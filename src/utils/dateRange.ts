import { format, subDays } from 'date-fns';

/**
 * Generates a date range string for the past 10 days.
 *
 * @returns {string} - A string representing the date range from nine days ago to today, formatted as 'MMM d - MMM d'.
 */
const getDateRange = (): string => {
  const date = new Date();
  const today = format(date, 'MMM d');
  const nineDaysAgoDate = subDays(date, 9);
  const nineDaysAgo = format(nineDaysAgoDate, 'MMM d');
  const dateRange = `${nineDaysAgo} - ${today}`;

  return dateRange;
};

export default getDateRange;