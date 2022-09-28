  //Here the price list of Gold in upcoming days. I have to buy and resell it with best profit. 
//Find best day to buy and best day to sell?

///Input: 
let prices = [7,1,5,3,6,4,1,2,3,5];
/// Explanation: You can't sell on first day, because you have no gold in your hand.
///              You can buy on day 2 (ArrayIndex = 1, price = 1) and sell on day 5 (ArrayIndex = 4, price = 6), profit = 6-1 = 5.
/// Output {buy:2,sell:5,profit:5}
/// Or Output using index {buyIndex:1,sellIndex:4,profit:5}


const buyAndSellGold = (prices)  =>{
  let profit = 0;
  let buy = prices[0];
  let sell 
  for(let i = 1; i < prices.length; i++) {
  buy = Math.min(prices[i], buy);
  profit = Math.max(profit, prices[i] - buy);
  sell = Math.max( prices[i] - buy)
  }
  return ` buyingIndex: ${buy} sellingIndex: ${sell} Profit: ${profit} `;
}


console.log(buyAndSellGold(prices));





// Let's create a promise that will return/print a given number to the caller after 2 seconds.


const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
wait(2*1000).then(() => {
  console.log("Prints after 2 seconds");
});


  