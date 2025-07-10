# MAX SUBARRAY SUM - I (NATIVE)

Given an array of integers (can include negative numbers), find the subarray with the maximum sum, and return that sum.

Example:

```java
int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
```

```java
Maximum Subarray Sum = 6
```

The subarray [4, -1, 2, 1] has the maximum sum: 4 + (-1) + 2 + 1 = 6

### LOGIC:

- Try every possible subarray using two nested loops.
- For each subarray, calculate its sum using a third loop.
- Track the maximum sum seen so far.

### CODE:

```java
public class MaxSubarraySumNaive {
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};

        int n = arr.length;
        int maxSum = Integer.MIN_VALUE; // Start with the smallest value

        // Try all subarrays
        for (int start = 0; start < n; start++) {
            for (int end = start; end < n; end++) {
                int currentSum = 0;

                // Calculate sum of subarray arr[start..end]
                for (int i = start; i <= end; i++) {
                    currentSum += arr[i];
                }

                // Update maxSum if currentSum is larger
                if (currentSum > maxSum) {
                    maxSum = currentSum;
                }
            }
        }

        System.out.println("Maximum Subarray Sum = " + maxSum);
    }
}
```

### TIME AND SPACE COMPLEXITY:

Time Complexity: O(n³) → 3 nested loops

Space Complexity: O(1) → no extra memory used
