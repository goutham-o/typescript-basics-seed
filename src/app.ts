type Pizza = { name: string; topping: number };

const pizza: Pizza = { name: 'Blazzing', topping: 5 };

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
  return (JSON.parse(obj) as Pizza).topping;
}

getNameFromJSON(serialized)
