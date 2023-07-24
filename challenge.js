function calculator(num1, num2, operator) {
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      return num1 / num2;
    } else {
      return "Invalid operator";
    }
  }
  
  // Test cases
  console.log(calculator(5, 7, "+")); // Output: 8
  console.log(calculator(3, 6, "-")); // Output: 2
  console.log(calculator(2, 3, "*")); // Output: 15
  console.log(calculator(77, 3, "/")); // Output: 1.6666666666666667
  console.log(calculator(5, 3, "%")); // Output: Invalid operator
