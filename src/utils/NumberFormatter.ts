// Formatea un número para abreviarlo con 'K' para miles y 'M' para millones.
// @param {number} num - El número a formatear.
// @returns {string} - El número formateado con 'K' o 'M' según corresponda.

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${Math.floor(num / 1000000)}M`;
  } else if (num >= 9999) {
    return `${Math.floor(num / 1000)}K`;
  }
  return num.toString();
};

