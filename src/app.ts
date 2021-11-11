
abstract class Sizes {
  constructor(protected sizes: string[]) { }
  
  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }
  
  get availableSizes() {
    return this.sizes;
  }

}

// const sizes = new Sizes(['small', 'medium'])

// //invoke getter
// console.log(sizes.availableSizes)
// //invoke setter
// sizes.availableSizes = ['large', 'extra large'];
// console.log(sizes.availableSizes)


class Pizza extends Sizes {
  toppings: string[] = [];

  constructor(readonly name: string, public sizes: string[]) {
    super(sizes);
  }

  public updateSizes(sizes: string[]) {
    this.sizes.push(...sizes)
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }

}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);
//invoke getter
console.log(pizza.availableSizes);
//invoke setter
pizza.availableSizes = ['large', 'extra large'];
console.log(pizza.availableSizes)

pizza.updateSizes(['double extra', 'thrible extra large'])

pizza.addTopping('Pepperoni');
pizza.addTopping('Pepperoni2');
pizza.addTopping('Pepperoni23');

console.log(pizza)