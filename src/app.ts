let sumOrder: (price: number, quantity: number) => number;

sumOrder = (x, y) => x * y;

const sum = sumOrder(234, 2);

console.log(`Total sum: ${sum}`);
