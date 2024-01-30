export const collatzSequence = (n) => {
    const sequence = [n];

    while (n !== 1) {
      // If even, divide by 2
      if (n % 2 === 0) {
        n /= 2;
      }
      // If odd, multiply by 3 and add 1
       else {
        n = 3 * n + 1;
      }
      sequence.push(n);
    }

    return sequence;
  };