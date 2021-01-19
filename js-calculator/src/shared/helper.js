export const getResult = (a, b, operator) => {
  let res;
  switch (operator) {
    case '+':
      res = a + b;
      break;
    case '-':
      res = a - b;
      break;
    case '*':
      res = a * b;
      break;
    case '/':
      res = a / b;
      break;
    default:
  }
  return res;
};
