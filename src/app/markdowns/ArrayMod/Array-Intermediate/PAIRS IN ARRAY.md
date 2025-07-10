# PAIRS IN ARRAY

Given an array of integers, print all possible pairs of elements in the array.

Example Input:

```java
int[] arr = {1, 2, 3, 4};
```

Expected Output:

```
(1, 2) (1, 3) (1, 4)
(2, 3) (2, 4)
(3, 4)
```

Total Pairs = n \* (n - 1) / 2

### SOLUTION: USING NESTED LOOP

```java
public class AllPairsBruteForce {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4};

        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                System.out.println("(" + arr[i] + ", " + arr[j] + ")");
            }
            System.out.println();
        }
    }
}
```

Time Complexity: `O(n²)`

Space Complexity: `O(1)`

### FOLLOW-UP VARIATIONS YOU CAN TRY:

1. Count total number of pairs
2. Only print pairs whose sum is even/odd
3. Print pairs whose sum equals a target value
4. Avoid printing duplicate pairs
5. Print index-based pairs instead of values
