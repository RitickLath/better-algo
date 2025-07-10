# MAX SUBARRAY SUM - II (PREFIX SUM)

### LOGIC:

- Create a prefix sum array where `prefix[i] = sum of arr[0] to arr[i]`
- Then for any subarray `arr[i..j]`, its sum is:
  ```java
  subarraySum = prefix[j] - prefix[i - 1]
  ```
  (and for `i == 0`, it’s just `prefix[j]`)

This avoids recomputing sums again and again.

### JAVA CODE:

```java
public class MaxSubarrayPrefix {
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        int n = arr.length;

        // Step 1: Build prefix sum array
        int[] prefix = new int[n];
        prefix[0] = arr[0];
        for (int i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] + arr[i];
        }

        // Step 2: Try all subarrays using prefix sums
        int maxSum = Integer.MIN_VALUE;

        for (int start = 0; start < n; start++) {
            for (int end = start; end < n; end++) {
                int currentSum;

                if (start == 0) {
                    currentSum = prefix[end];
                } else {
                    currentSum = prefix[end] - prefix[start - 1];
                }

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

- Time Complexity: O(n²)
- Space Complexity: O(n) → for the prefix array
