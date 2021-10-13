const CoinsData = ({ apiArray }) => {
  console.log(apiArray);

  apiArray.sort((a, b) => b.current_price - a.current_price);
  console.log(apiArray)

  return null;
};

export default CoinsData;
