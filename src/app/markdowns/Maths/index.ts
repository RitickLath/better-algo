export const CountNumberOfDigits = `
> \`Math.floor(Math.log10(Math.abs(number)) + 1)\`

# ITERATIVE APPROACH

This method involves dividing the integer by 10 repeatedly until it reduces to zero. Each division reduces the number of digits by one, and the total number of divisions equals the number of digits.

\`\`\`java
public int countDigitsIterative(int number) {
    int count = 0;
    while (number != 0) {
        number /= 10;  // Remove the last digit
        count++;
    }
    return count;
}
\`\`\`

### EXPLANATION

- We initialize a counter to 0.  
- We repeatedly divide the number by 10 in a loop until the number becomes zero.  
- The counter keeps track of how many times the loop runs, which corresponds to the number of digits.

### TIME COMPLEXITY

- The time complexity is O(log₁₀(n)) because the number of iterations is proportional to the number of digits.

# MATHEMATICAL APPROACH (USING LOG)

This method leverages the mathematical property of logarithms to count the digits. Specifically, \`log₁₀(number) + 1\` gives the number of digits.

\`\`\`java
public int countDigitsLogarithmic(int number) {
    if (number == 0) return 1;
    return (int) Math.floor(Math.log10(Math.abs(number)) + 1);
}
\`\`\`

### EXPLANATION

- \`log₁₀(number)\` gives the power to which 10 must be raised to get the number.  
- Adding 1 to this value and taking the floor gives the number of digits.  
- Special case: If the number is 0, it has exactly one digit.

### TIME COMPLEXITY

- The time complexity is O(1), as logarithmic calculation is constant time.
`;

export const TimeComplexityInBaseConversion = `# UNDERSTANDING TIME COMPLEXITY IN BASE CONVERSIONS

> Repeatedly dividing by 2, \`O(log₂(n))\`

> Repeatedly dividing by 2, \`O(log₁₀(n))\`

## **DIVISION BY 2 (BINARY LOGARITHM)**

When repeatedly dividing a number by 2, the number of operations required to reduce it to 1 is proportional to the logarithm of the number in base 2.

### TIME COMPLEXITY

- The time complexity is O(log₂(n)).

## DIVISION BY 10 (DECIMAL LOGARITHM)

When repeatedly dividing a number by 10, the number of operations required to reduce it to 1 is proportional to the logarithm of the number in base 10.

### TIME COMPLEXITY

- The time complexity is O(log₁₀(n)).
`;

export const reverseNumber = `# REVERSING A NUMBER (IGNORING TRAILING ZEROS)

Reversing a number involves reversing the order of its digits. Trailing zeros are often ignored in the result because they don’t affect the number's value.

\`\`\`java
public int reverseNumber(int number) {
    int reversed = 0;
    while (number != 0) {
        int digit = number % 10;
        reversed = reversed * 10 + digit;
        number /= 10;
    }
    return reversed;
}
\`\`\`

### EXPLANATION

- Extract the last digit of the number using \`number % 10\`.
- Append this digit to the reversed number.
- Remove the last digit from the original number by dividing it by 10.
- Repeat until the number becomes zero.

### TIME COMPLEXITY

- The time complexity is O(log₁₀(n)), as the loop runs once for each digit.
`;

export const checkNumberIsPalindrome = `A palindrome number is one that reads the same forwards and backwards. We check this by reversing the number and comparing it to the original.

\`\`\`java
public boolean isPalindrome(int number) {
    int original = number;
    int reversed = 0;
    while (number != 0) {
        int digit = number % 10;
        reversed = reversed * 10 + digit;
        number /= 10;
    }
    return original == reversed;
}
\`\`\`

### EXPLANATION

- Reverse the number using the same method as described above.
- Compare the reversed number with the original.
- If they are the same, the number is a palindrome.

### TIME COMPLEXITY

- The time complexity is O(log₁₀(n)), as reversing the number requires processing each digit.
`;

export const armstrongNumber = `An Armstrong number (or Narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

\`\`\`java
public boolean isArmstrong(int number) {
    int sum = 0, temp = number;
    int digits = countDigitsIterative(number);  // Find the number of digits
    while (temp != 0) {
        int digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp /= 10;
    }
    return sum == number;
}
\`\`\`

### EXPLANATION

- Calculate the number of digits in the number.
- For each digit, raise it to the power of the total number of digits and sum these values.
- Compare the sum to the original number.

### TIME COMPLEXITY

- The time complexity is O(log₁₀(n)) for digit extraction and O(log₁₀(n)) for summation, making the overall complexity O(log₁₀(n)).
`;

export const divisorOfANumber = `> Check till sq root of number.

# NAIVE APPROACH

This approach involves checking all numbers from 1 to the given number to see if they divide evenly.

\`\`\`java
public void printDivisorsNaive(int number) {
    for (int i = 1; i <= number; i++) {
        if (number % i == 0) {
            System.out.print(i + " ");
        }
    }
}
\`\`\`

### EXPLANATION

- Loop from 1 to the number.
- Print the divisor whenever the number modulo \`i\` equals zero.

### TIME COMPLEXITY

- The time complexity is O(n).

# OPTIMIZED APPROACH (LOOP TILL SQUARE ROOT)

The idea here is that divisors come in pairs. If \`i\` is a divisor of \`n\`, then \`n/i\` is also a divisor. Thus, we only need to loop until the square root of the number.

\`\`\`java
public void printDivisorsOptimized(int number) {
    for (int i = 1; i * i <= number; i++) {
        if (number % i == 0) {
            System.out.print(i + " ");
            if (i != number / i) {
                System.out.print((number / i) + " ");
            }
        }
    }
}
\`\`\`

### EXPLANATION

- Loop from 1 to the square root of the number.
- For each divisor \`i\`, also print \`n/i\` unless \`i\` equals \`n/i\` (to avoid duplicates).

### TIME COMPLEXITY

- The time complexity is O(√n).`;

export const numberIsPrime = `# **OPTIMIZED APPROACH (LOOP TILL SQUARE ROOT)**

Instead of checking divisibility up to \`n\`, we only check up to the square root of \`n\`.

\`\`\`java
public boolean isPrime(int number) {
    if (number <= 1) return false;
    for (int i = 2; i * i <= number; i++) {
        if (number % i == 0) return false;
    }
    return true;
}
\`\`\`

### EXPLANATION

- A number is not prime if it can be divided by any number other than 1 and itself.
- By checking up to the square root, we reduce unnecessary checks.

### TIME COMPLEXITY

- The time complexity is O(√n).`;

export const gcdUsingEuclideanAlgo = `# **CONCEPT**

The Euclidean algorithm efficiently finds the GCD by repeatedly applying the formula \`GCD(a, b) = GCD(b, a % b)\` until \`b\` becomes zero. At that point, \`a\` contains the GCD.

\`\`\`java
public int gcdEu

Euclidean(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
\`\`\`

### EXPLANATION

- Swap \`a\` and \`b\` such that \`a\` becomes \`b\` and \`b\` becomes \`a % b\`.
- Continue this process until \`b\` becomes zero, and \`a\` will be the GCD.

### TIME COMPLEXITY

- The time complexity is O(log(min(a, b))).

### DRY RUN EXAMPLE:

For \`a = 48\` and \`b = 18\`:

1. \`GCD(48, 18) → GCD(18, 48 % 18) → GCD(18, 12)\`
2. \`GCD(18, 12) → GCD(12, 18 % 12) → GCD(12, 6)\`
3. \`GCD(12, 6) → GCD(6, 12 % 6) → GCD(6, 0)\`

GCD is 6.

# USING RECURSION

This is the same as the standard Euclidean algorithm but directly uses the modulus operation for finding the GCD.

\`\`\`java
public int gcdOptimized(int a, int b) {
    if (b == 0) {
        return a;
    }
    return gcdOptimized(b, a % b);
}
\`\`\`

### EXPLANATION

- This is a recursive implementation of the Euclidean algorithm.
- If \`b\` is zero, return \`a\` as the GCD.
- Otherwise, recursively call the function with \`b\` and \`a % b\`.

### TIME COMPLEXITY

- The time complexity is O(log(min(a, b))). This method is very efficient and commonly used for large numbers.`;

export const findingGCDNative = `# CONCEPT

The greatest common divisor (GCD) of two numbers is the largest number that divides both of them without leaving a remainder.

\`\`\`java
public int gcdNaive(int a, int b) {
    int gcd = 1;
    for (int i = 1; i <= Math.min(a, b); i++) {
        if (a % i == 0 && b % i == 0) {
            gcd = i;
        }
    }
    return gcd;
}
\`\`\`

### EXPLANATION

- Loop from 1 to the smaller of the two numbers.
- Track the largest number that divides both \`a\` and \`b\`.

### TIME COMPLEXITY

- The time complexity is O(min(a, b)).

### OBSERVATION:

The time complexity remains the same regardless of whether we loop from 1 to \`min(a, b)\` or from \`min(a, b)\` down to 1 because in the worst case, when \`a\` and \`b\` are prime, we still perform the same number of operations.`;
