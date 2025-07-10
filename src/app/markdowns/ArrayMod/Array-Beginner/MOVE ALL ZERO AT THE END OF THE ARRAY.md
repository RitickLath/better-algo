# MOVE ALL ZERO AT THE END OF THE ARRAY

Use two pointers:

- `j` → Tracks the position to place the next non-zero element.
- `i` → Iterates through the array.

1. Initialize `j = 0`.
2. Traverse the array with `i` from `0` to `n-1`.
3. If `arr[i]` is not zero:
   - Swap `arr[i]` and `arr[j]`.
   - Increment `j`.
4. Continue until the end of the array.

## **CODE:**

```java
public static void moveZerosToEnd(int arr[]) {
    int j = 0; // Position for next non-zero element

    for (int i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            // Swap only if i and j are different
            if (i != j) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
}
```

Time: `O(N)` — single pass

Space: `O(1)` — in-place, no extra space
