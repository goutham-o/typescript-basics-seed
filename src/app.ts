interface Sizes {
  sizes: string[];
}

interface Pizza  extends Sizes {
  name: string;
  getAvailableSizes(): string[];
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

console.log(pizza);
