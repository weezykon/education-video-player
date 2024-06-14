export const limitString = (str?: string, limit?: number, dots = true) => {
  if (!str) return '';
  if (str && limit && str.length > limit) {
    return dots ? `${str.slice(0, limit)}...` : str.slice(0, limit);
  }
  return str;
};