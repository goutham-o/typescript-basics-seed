/* let pizza: { name: string; price: number; foo: string };

pizza = {
  name: 'plan old',
  price: 20,
  foo: 'asdf',
}; */

let pizza: { name: string; price: number; foo: string; getName(): string } = {
  name: 'plan old',
  price: 20,
  foo: 'asdf',
  getName() {
    return this.name;
  },
};
