class Pizza {
  name: string;
  toppings: string[] = [];
  constructor(name: string) {
    this.name = name;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }

}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('Pepperoni');
pizza.addTopping('Pepperoni2');
pizza.addTopping('Pepperoni23');

console.log(pizza)