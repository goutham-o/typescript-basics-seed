
class Sizes {
  constructor(public sizes: string[]) { }
  
  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }
  
  get availableSizes() {
    return this.sizes;
  }

}

const sizes = new Sizes(['small', 'medium'])

//invoke getter
console.log(sizes.availableSizes)
//invoke setter
sizes.availableSizes = ['large', 'extra large'];
console.log(sizes.availableSizes)


class Pizza {
  toppings: string[] = [];

  // constructor(public name: string) {}
  constructor(readonly name: string) {}

  addTopping(topping: string) {
    this.toppings.push(topping);
  }

}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('Pepperoni');
pizza.addTopping('Pepperoni2');
pizza.addTopping('Pepperoni23');

console.log(pizza)