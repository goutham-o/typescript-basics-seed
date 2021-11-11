const pizzas: number = 5

function officeDiscount(order: number): boolean {
  return order > 5;
}

if (officeDiscount(pizzas)) {
  console.log(true);
} else {
  console.log(false);
}