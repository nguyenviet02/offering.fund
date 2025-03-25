// Function to format address with asterisks
export const formatAddress = (addr: string) => {
  if (addr.length <= 8) return addr;
  return `${addr.slice(0, 5)}****${addr.slice(-5)}`;
};
