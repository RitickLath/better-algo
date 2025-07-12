# ROTATE THE ARRAY BY K PLACE

BRUTE FORCE SOLUTION: USING TEMPORARY ARRAY OF K SIZE.

## OPTIMAL SOLUTION: USING REVERSE METHOD

Array:

```
{1, 2, 3, 4, 5, 6, 7}
```

Rotate by K = 3 positions to the left using the **reverse approach**.

```java
// REVERSE CHUNKS 0 TO K-1 AND K TO N
{3, 2, 1, 7, 6, 5, 4}
```

```java
// REVERSE ABOVE AS A WHOLE
{4, 5, 6, 7, 1, 2, 3}
```

### CODE:

```java
public static void leftRotateOptimal(int arr[], int k) {
    int n = arr.length; // Length of the array

    // Handle cases where k is greater than the array size
    k = k % n;

    // Step 1: Reverse the first k elements
    reverse(arr, 0, k - 1);

    // Step 2: Reverse the remaining elements
    reverse(arr, k, n - 1);

    // Step 3: Reverse the entire array
    reverse(arr, 0, n - 1);
}

// Utility function to reverse a portion of the array
private static void reverse(int arr[], int start, int end) {
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
```
