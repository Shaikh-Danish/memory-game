export const evaluate = (card1: Cards, card2: Cards) => {
  return card1.name === card2.name;
};

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
