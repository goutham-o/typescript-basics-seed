interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  getAvailableSizes(): string[];
  [key: number]: string
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]) {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  } as Pizza;
}

pizza = createPizza('Pepperoni', ['small', 'large', 'medium']);
pizza[1] = 'xyz'

pizza.toppings = 1
console.log(pizza);
