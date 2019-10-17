//https://habr.com/ru/post/354930/

function factorial(n) {
  if (n == 1) {
    return 1;
  };
    return n * BigInt(factorial(n-1n));
};

function factorial_two(n) {
  if (n <= 1) {
    return 1;
  };
    return n * BigInt(factorial_two(n-2n));
};

function createArray(string){
  return array = string.split('*');
}

function formatArray(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index].indexOf('!!') == -1) {
      array[index] = BigInt(factorial(BigInt((parseInt(array[index])))));
    } else {
      array[index] = BigInt(factorial_two(BigInt((parseInt(array[index])))));
    }
  }
  return array;
}

function multiply(array){
  let result = 1n;
  for (let value of array) {
    result = result * value;
  }
  return result.toString();
}

module.exports = function zeros(expression) {
  let count = 0;
  result_str = multiply(formatArray(createArray(expression)));
  //result_str = result_str.slice(0, result_str.length);
  if (result_str[result_str.length - 1] == 0) {
    for (let index = result_str.length - 1; index != 0 ; index--) {
      if (result_str[index] != 0 ) {
        return count;
      }else{
        count++;
      }
    }
  }else{
    return 0;
  }
}

expression = '100!!*100!';

console.log(multiply(formatArray(createArray(expression))));