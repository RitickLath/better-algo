# MAXIMUM SUBARRAY SUM — KADANE'S ALGORITHM (BEST PRACTICE)

### LOGIC:

- Maintain a `currentSum` that keeps track of the current subarray sum.
- If `currentSum` becomes negative, reset it to 0 — because continuing with a negative sum will reduce the total.
- Keep updating a `maxSum` whenever `currentSum` is greater than it.

![image.png](attachment:d3a8d88a-8a27-4ba3-b112-14ce85178e0a:image.png)

### JAVA CODE:

```java
public class KadaneAlgorithm {
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};

        int maxSum = Integer.MIN_VALUE;
        int currentSum = 0;

        for (int i = 0; i < arr.length; i++) {
            currentSum += arr[i];

            if (currentSum > maxSum) {
                maxSum = currentSum;
            }

            if (currentSum < 0) {
                currentSum = 0;
            }
        }

        System.out.println("Maximum Subarray Sum = " + maxSum);
    }
}
```

### TIME & SPACE COMPLEXITY:

- Time Complexity: O(n) — single pass
- Space Complexity: O(1) — constant space

### NOTE:

- `Kadane’s` works even with negative numbers.
- If the array contains `all negative numbers`, and you want to allow one of them as the answer, then again iterate to find the max in an array.
