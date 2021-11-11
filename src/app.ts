function orderError(error: string): never {
  throw new Error(error);
  //never going to return a value!
}

orderError('something wen wrong');