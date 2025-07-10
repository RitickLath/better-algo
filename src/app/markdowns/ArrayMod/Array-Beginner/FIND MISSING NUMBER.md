# FIND MISSING NUMBER

You are given an array:

```java
arr = {1, 2, 4, 5}
N = 5
```

The array contains N-1 distinct integers from the range 1 to N.

Your task is to find the only missing number from the range.

## OBSERVATION

- The numbers should ideally be: `1, 2, 3, 4, 5`
- But `3` is missing.

## OPTIMAL APPROACH — USING MATH FORMULA

### KEY IDEA

Use the sum of the first N natural numbers formula:

`Sum1 to N = N⋅(N+1)2`

Subtract all elements of the array from this sum.

What remains is the missing number.

### STEP-BY-STEP EXPLANATION

1. CALCULATE EXPECTED TOTAL

   Use the formula Total = `N*(N + 1) / 2`

2. SUBTRACT ARRAY ELEMENTS FROM TOTAL

   Loop through the array and subtract each number from `Total`

3. RETURN THE RESULT

   The remaining value is the missing number.

### JAVA CODE

```java
public static int MissingOptimal1(int[] arr, int n) {
    int sum = n * (n + 1) / 2; // Expected sum of numbers from 1 to n

    for (int i = 0; i < arr.length; i++) {
        sum -= arr[i]; // Subtract actual elements
    }

    return sum; // What remains is the missing number
}
```

## TIME AND SPACE COMPLEXITY

| METRIC           | VALUE |
| ---------------- | ----- |
| TIME COMPLEXITY  | O(N)  |
| SPACE COMPLEXITY | O(1)  |

## LIMITATION

This approach may not work correctly for very large values of N, where:

`N⋅(N+1)/2`

...can exceed the `int` range and lead to overflow.

## RECOMMENDATION FOR LARGE NUMBERS

Use XOR-based solution for constant space and no risk of overflow.
