export const formatNumber = (number: number | string) => {
    const strNumber = String(number);
    const formattedNumber = strNumber.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return formattedNumber;
  };
  