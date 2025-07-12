# FIND MISSING NUMBER IN ARRAY (NUMBERS FROM 0 TO N)

Given: An array of length n containing n distinct numbers in the range 0 to n.

Goal: Find the one number that is missing.

## METHOD 1: BRUTE-FORCE WAY (NESTED LOOP)

For each number from `0` to `n`, search if it exists in the array.

```java
public class MissingNumberBruteForce {
    public static void main(String[] args) {
        int[] nums = {3, 0, 1};
        int n = nums.length;

        for (int i = 0; i <= n; i++) {
            boolean found = false;
            for (int num : nums) {
                if (num == i) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                System.out.println("Missing Number: " + i);
                break;
            }
        }
    }
}
```

Time Complexity: O(n²)

Space Complexity: O(1)

Drawback: Very slow for large arrays due to nested loop. Not efficient.

## METHOD 2: USING EXTRA BOOLEAN ARRAY

Create a boolean array of size `n + 1` to mark presence of each number.

```java
public class MissingNumberExtraSpace {
    public static void main(String[] args) {
        int[] nums = {3, 0, 1};
        int n = nums.length;
        boolean[] seen = new boolean[n + 1];

        for (int num : nums) {
            seen[num] = true;
        }

        for (int i = 0; i <= n; i++) {
            if (!seen[i]) {
                System.out.println("Missing Number: " + i);
                break;
            }
        }
    }
}

```

Time Complexity: O(n)

Space Complexity: O(n)

Drawback: Requires extra space.

## METHOD 3: USING XOR (NO EXTRA SPACE)

Leverage XOR: All numbers 0 to n XORed with elements cancels everything but the missing one.

```java
public class MissingNumberXOR {
    public static void main(String[] args) {
        int[] nums = {3, 0, 1};
        int n = nums.length;
        int xor = 0;

        for (int i = 0; i <= n; i++) {
            xor ^= i;
        }

        for (int num : nums) {
            xor ^= num;
        }

        System.out.println("Missing Number: " + xor);
    }
}
```

Uses properties of XOR: `a ^ a = 0`, `a ^ 0 = a`.

Time Complexity: O(n)

Space Complexity: O(1)

Efficient: No extra space, works well, and fast.

## METHOD 4: MOST OPTIMIZED – SUM FORMULA

Use the formula for the sum of first `n` natural numbers.

```java
public class MissingNumberSum {
    public static void main(String[] args) {
        int[] nums = {3, 0, 1};
        int n = nums.length;

        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;

        for (int num : nums) {
            actualSum += num;
        }

        int missing = expectedSum - actualSum;
        System.out.println("Missing Number: " + missing);
    }
}

```

Time Complexity: O(n)

Space Complexity: O(1)

Most Optimal: Clean, fast, minimal memory usage.

## SUMMARY TABLE

| Method | Time | Space | Drawback |
| --- | --- | --- | --- |
| Brute-force (Nested Loops) | O(n²) | O(1) | Too slow for large arrays |
| Extra Array (Visited Flag) | O(n) | O(n) | Wastes memory |
| XOR Method | O(n) | O(1) | Slightly tricky to understand |
| Sum Formula | O(n) | O(1) | Best choice (simple + fast) |