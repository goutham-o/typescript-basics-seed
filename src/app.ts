type PizzaSize = 'xl' | 'ms' | 'lg';
type CallBack = (pizza: PizzaSize) => void

let pizzaSize: PizzaSize = 'xl';

const selectSize: CallBack = (x) => {
  pizzaSize = x;
};

selectSize('lg');
