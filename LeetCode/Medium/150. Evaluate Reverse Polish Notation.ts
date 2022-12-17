{
  /**
   * Runtime 91 ms Beats 84.13%
   * Memory 45.8 MB Beats 50.79%
   */

  const calc = (
    num1: number,
    num2: number,
    operator: '+' | '-' | '*' | '/'
  ): number => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        const calcValue = num1 / num2;
        const result =
          calcValue < 0 ? Math.ceil(calcValue) : Math.floor(calcValue);
        return result === -0 ? 0 : result;
    }
  };

  const evalRPN = (tokens: string[]): number => {
    const operator = ['+', '-', '*', '/'];
    const stack: number[] = [];

    for (const token of tokens) {
      if (operator.includes(token)) {
        const num2 = stack.pop()!;
        const num1 = stack.pop()!;
        const newToken = calc(num1, num2, token as '+' | '-' | '*' | '/');
        stack.push(newToken);
      } else {
        stack.push(+token);
      }
    }

    return stack[0];
  };

  // prettier-ignore
  console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])); // 22
}
