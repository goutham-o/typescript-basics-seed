const pizzaCost: number = 10;
const pizzaTopping: number = 2;

const calculatePrice = (cost: number, topping: number): number => {
  return cost + 1.5 * topping;
}

const price = calculatePrice(pizzaCost, pizzaTopping);
console.log(price)