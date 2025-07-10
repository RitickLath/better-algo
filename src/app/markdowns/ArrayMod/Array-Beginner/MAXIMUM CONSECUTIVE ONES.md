# MAXIMUM CONSECUTIVE ONES

## PROBLEM STATEMENT

You are given a binary array of `0`s and `1`s:

```java
arr = {1, 1, 0, 1, 1, 1}
```

Your task is to find the maximum number of consecutive 1s in the array.

## OPTIMAL SOLUTION - LINEAR SCAN

### KEY IDEA

Use a single pass through the array while maintaining:

- A `count` to track the current number of consecutive 1s.
- A `max` to store the maximum count observed so far.

### JAVA CODE

```java
public static int MaximumConsecutiveOnesOptimize(int[] arr) {
    int max = 0;
    int count = 0;

    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++; // Increment count for consecutive 1s
            max = Math.max(max, count); // Update max if needed
        } else {
            count = 0; // Reset count when 0 is encountered
        }
    }

    return max;
}
```

## TIME AND SPACE COMPLEXITY

| METRIC           | VALUE |
| ---------------- | ----- |
| TIME COMPLEXITY  | O(N)  |
| SPACE COMPLEXITY | O(1)  |
