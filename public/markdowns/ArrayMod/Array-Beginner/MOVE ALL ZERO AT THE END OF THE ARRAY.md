# MOVE ALL ZERO AT THE END OF THE ARRAY

Goal: Rearrange elements in the array such that all zeros are moved to the end, while maintaining the order of non-zero elements.

### **SAMPLE INPUT**

```java
int[] arr = {0, 1, 0, 3, 12};
```

### **EXPECTED OUTPUT**

```java
[1, 3, 12, 0, 0]
```

## METHOD 1: BRUTE-FORCE USING EXTRA ARRAY

- Create a temporary array.
- Copy all non-zero elements first.
- Then fill the rest with 0s.

```java
public static void moveZerosExtraArray(int[] arr) {
    int[] temp = new int[arr.length];
    int index = 0;

    // Copy non-zero elements
    for (int num : arr) {
        if (num != 0) {
            temp[index++] = num;
        }
    }

    // Copy back to original array
    for (int i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }
}
```

Time: `O(n)`

Space: `O(n)` — uses extra array

Drawback: Not in-place (extra space), unnecessary memory used.

## METHOD 2: BRUTE-FORCE BY SHIFTING ZEROS

- Traverse array.
- When 0 is found, shift all elements to the left and push 0 at end.

```java
public static void moveZerosShift(int[] arr) {
    int n = arr.length;

    for (int i = 0; i < n; i++) {
        if (arr[i] == 0) {
            for (int j = i; j < n - 1; j++) {
                arr[j] = arr[j + 1];
            }
            arr[n - 1] = 0;
            i--; // Re-check current index
            n--; // Reduce size as last part is sorted
        }
    }
}
```

Time: `O(n²)` (nested shifting)

Space: `O(1)`

Drawback: Very inefficient due to repeated shifting.

## METHOD 3: OPTIMIZED (USING TEMP INDEX TO PLACE NON-ZEROS)

- Count/index non-zero elements from the front.
- Then fill remaining with zeros.

```java
public static void moveZerosCountMethod(int[] arr) {
    int index = 0;

    // First pass: move non-zero elements forward
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[index++] = arr[i];
        }
    }

    // Fill remaining with 0s
    while (index < arr.length) {
        arr[index++] = 0;
    }
}
```

Time: `O(n)`

Space: `O(1)`

Efficient, but still does 2 passes over the array.

## METHOD 4: MOST OPTIMIZED - TWO POINTERS (SWAPPING)

Use two pointers:

- `j` → Tracks the position to place the next non-zero element.
- `i` → Iterates through the array.

1. Initialize `j = 0`.
2. Traverse the array with `i` from `0` to `n-1`.
3. If `arr[i]` is not zero:
   - Swap `arr[i]` and `arr[j]`.
   - Increment `j`.
4. Continue until the end of the array.

### CODE:

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

## SUMMARY TABLE

| Method                          | Time  | Space | Notes                    |
| ------------------------------- | ----- | ----- | ------------------------ |
| Extra Array                     | O(n)  | O(n)  | Simple, but wastes space |
| Shift Zeros (Nested Loop)       | O(n²) | O(1)  | Too slow, inefficient    |
| Non-Zero First, Then Fill Zeros | O(n)  | O(1)  | Good, but 2 passes       |
| Two Pointers (Swap in-place)    | O(n)  | O(1)  | Best and most optimal    |
