const { assertEquals } = require("./test-framework");
const { Basket } = require(`../src/basket`);

const newBasketStartsEmpty = () => {
  //identify
  console.log("newBasketStartsEmpty");
  // 1. arrange
  let input = new Basket();
  let expected = 0;

  // 2. act
  let actual = input.items.length;

  // 3. assert
  let result = assertEquals(actual, expected);
  //report
  console.log(`newBasketStartsEmpty: ${result}`);
};

module.exports = { newBasketStartsEmpty };
