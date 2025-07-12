# CHECK SORTED OR NOT

Sorted can be in ascending or descending no problem here.

```java
 public static boolean SortedOrNot(int arr[]) {
    // Edge case: Single element array is always sorted
    if (arr.length == 1) {
        return true;
    }

    // Flags to check both ascending and descending order
    boolean isAscending = true;
    boolean isDescending = true;

    // Traverse the array to determine order
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            isAscending = false; // Not in ascending order
        }
        if (arr[i] > arr[i - 1]) {
            isDescending = false; // Not in descending order
        }
    }

    // Array is sorted if it is either ascending or descending
    return isAscending || isDescending;
}
```
