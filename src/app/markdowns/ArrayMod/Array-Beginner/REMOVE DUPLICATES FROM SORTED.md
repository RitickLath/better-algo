# REMOVE DUPLICATES FROM SORTED

Remove the duplicate array from sorted array.

## TWO POINTER METHOD

```java
public static void RemoveDuplicateFromSortedOptimal(int arr[]) {

    int j = 0;
    for (int i = 1; i < arr.length; i++) {
        // If the current element is not equal to the element at position `j`
        if (arr[i] != arr[j]) {
            j++; // Move the `j` pointer to the next position
            arr[j] = arr[i]; // Update the array at position `j` with the unique element
        }
    }

    // `j + 1` represents the count of unique elements in the array
    System.out.println("Number of unique elements: " + (j + 1));
}
```
