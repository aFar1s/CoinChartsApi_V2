let unixArray = [1618358400000, 1618444800000, 1618531200000, 1618617600000];

// const unixTimestamp = 1618358400000;

let priceYAxis = []


const unixConverterToShortDate = () => {

  for (let i = 0; i < unixArray.length; i++) {
    const dateObject = new Date(unixArray[i]);
    let dateStr = dateObject.toLocaleString("en-US", { month: "short" })
    let dayNum = dateObject.toLocaleString("en-US", { day: "numeric" })
    let dateArray = []
    dateArray.push(dayNum, dateStr);
    dateArray = dateArray.join("/");
    priceYAxis.push(dateArray)
  }

  return priceYAxis

}

console.log(unixConverterToShortDate())

