# SORT AN ARRAY OF 0’S, 1’S AND 2’S | DUTCH FLAG

Given an array consisting only of 0s, 1s, and 2s, sort it in-place without using any sorting library functions.

Example:

```java
arr = {2, 0, 1, 2, 0, 1}
Sorted → {0, 0, 1, 1, 2, 2}
```

## BRUTE FORCE APPROACH — USING BUILT-IN SORT

### INTUITION

Use the Java built-in `Arrays.sort()` method.

### JAVA CODE

```java
public static int[] sortAnArrayOfZeroOnesTwosBrute(int arr[]) {
    Arrays.sort(arr); // Time complexity: O(N log N)
    return arr;
}
```

### COMPLEXITY

- **Time**: O(N log N)
- **Space**: O(1)

> Not efficient when the array only has 0s, 1s, and 2s, we can do better in linear time!

## BETTER APPROACH - COUNTING FREQUENCIES

### INTUITION

Count the number of 0s, 1s, and 2s, then rewrite the array based on these counts.

### JAVA CODE

```java
public static int[] sortAnArrayOfZeroOnesTwosBetter(int arr[]) {
    int zeros = 0, ones = 0, twos = 0;

    for (int num : arr) {
        if (num == 0) zeros++;
        else if (num == 1) ones++;
        else twos++;
    }

    int k = 0;
    for (int i = 0; i < zeros; i++) arr[k++] = 0;
    for (int i = 0; i < ones; i++) arr[k++] = 1;
    for (int i = 0; i < twos; i++) arr[k++] = 2;

    return arr;
}
```

### COMPLEXITY

- **Time**: O(N)
- **Space**: O(1)

### PROS

- Simple logic
- Stable sort (elements retain relative order)

### CONS

- Requires **two passes** over the array
- Not in-place logically (conceptually counting → writing)

## OPTIMAL APPROACH - DUTCH NATIONAL FLAG ALGORITHM

### INTUITION

Use **three pointers** to **partition** the array into three sections in **a single pass**.

### POINTERS:

- `low` — boundary of last placed 0
- `mid` — current processing element
- `high` — boundary of first unprocessed 2

### JAVA CODE

```java
private static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

public static int[] sortAnArrayOfZeroOnesTwosOptimal(int arr[]) {
    int low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] == 0) {
            swap(arr, low, mid);
            low++;
            mid++;
        } else if (arr[mid] == 1) {
            mid++;
        } else {
            swap(arr, mid, high);
            high--;
        }
    }

    return arr;
}
```

## COMPLEXITY COMPARISON

| Approach    | Time Complexity | Space Complexity | Passes | Notes               |
| ----------- | --------------- | ---------------- | ------ | ------------------- |
| Brute Force | O(N log N)      | O(1)             | 1      | Uses library sort   |
| Better      | O(N)            | O(1)             | 2      | Count and overwrite |
| Optimal     | O(N)            | O(1)             | 1      | In-place, one-pass  |

## SO WHAT’S THE DIFFERENCE?

While **Better** and **Optimal** have the **same time and space complexity**, the **Optimal** approach:

- Completes in a **single pass** — less CPU cache traffic and lower constant factor
- Performs **in-place sorting** without conceptual separation between count/write
- More **adaptive to real-time streaming or linked structure variants**

> In interviews or competitive programming, Dutch National Flag is preferred for this problem.
