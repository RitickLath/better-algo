# ROTATE THE ARRAY BY ONE PLACE

## LEFT ROTATE THE ARRAY BY ONE PLACE

### OPTIMAL SOLUTION: USING TEMP VARIABLE

1. Store `arr[0]` in a temporary variable `temp`.
2. Shift each element from index `1` to `n-1` one position to the left (i.e., `arr[i - 1] = arr[i]`).
3. Assign `temp` to `arr[n - 1]` (place the original first element at the end).

```java
public static void leftRotate(int arr[]) {

    // Store the first element in a temporary variable
    int temp = arr[0];

    // Shift all elements one position to the left
    for (int i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    // Place the first element at the last position
    arr[arr.length - 1] = temp;
}
```
