export type FizzBuzzResult = "Fizz" | "Buzz" | "FizzBuzz" | number;

/**
 * Returns "Fizz", "Buzz", "FizzBuzz", or the number itself.
 * - Multiples of both 3 and 5 return "FizzBuzz"
 * - Multiples of 3 return "Fizz"
 * - Multiples of 5 return "Buzz"
 * - All other numbers return the number
 */
export function fizzBuzz(n: number): FizzBuzzResult {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}

/**
 * Generates an array of FizzBuzz results from 1 to count.
 */
export function generateFizzBuzz(count: number = 100): FizzBuzzResult[] {
  return Array.from({ length: count }, (_, i) => fizzBuzz(i + 1));
}

// Demo run
function runDemo(): void {
  console.log("=== FizzBuzz Demo (1 to 30) ===\n");
  const results = generateFizzBuzz(30);

  results.forEach((val, idx) => {
    console.log(`${(idx + 1).toString().padStart(2, " ")}: ${val}`);
  });
}

runDemo();
