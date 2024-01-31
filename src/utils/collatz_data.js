export function collatzSequenceForLine(n) {
   // Function to calculate Collatz sequence specifically for line Char

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

export function CollatzSequenceForScatter(n) {
  // Function to calculate Collatz sequence specifically for scatter Chart
  const sequence = [{ x: 1, y: n }];
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    sequence.push({ x: sequence.length + 1, y: n });
  }
  return sequence;
};

