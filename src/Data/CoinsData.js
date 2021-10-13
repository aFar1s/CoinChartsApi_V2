const CoinsData = ({ apiArray }) => {

  const descendingPrice = () => {
    apiArray.sort((a, b) => b.current_price - a.current_price);
  }

  const ascendingPrice = () => {
    apiArray.sort((a, b) => a.current_price - b.current_price);
  }
  
  return null;
};

export default CoinsData;
