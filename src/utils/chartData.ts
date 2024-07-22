/**
 * Generates chart data for the last ten days.
 *
 * @param {number[]} lastTenDays - Array of follower counts for the last ten days.
 * @returns {Array<{ date: number, followers: number }>} - An array of objects, each containing a date and the corresponding followers count.
 */
const getChartData = (lastTenDays: number[]): Array<{ date: number, followers: number }> => {
  const date = new Date();
  const data = [];

  for (let i = 0; i < 10; i++) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 9 + i);
    const followers = lastTenDays[i];
    data.push({ date: newDate.getDate(), followers });
  }
  
  return data;
};

export default getChartData;
