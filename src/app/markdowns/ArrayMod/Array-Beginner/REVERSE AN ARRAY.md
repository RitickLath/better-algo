# REVERSE AN ARRAY

1. Normal (Brute-force) method using an extra array
2. Optimized (In-place) method using two-pointer swapping

## METHOD 1: NORMAL WAY (USING EXTRA ARRAY)

Create a new array and copy elements from the original in reverse order.

```java
public class ReverseArrayNormal {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int[] reversed = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            reversed[i] = arr[arr.length - 1 - i];
        }

        // Print reversed array
        for (int num : reversed) {
            System.out.print(num + " ");
        }
    }
}
```

Time Complexity: O(n)

Space Complexity: O(n) (due to extra array)

## METHOD 2: OPTIMIZED WAY (IN-PLACE SWAPPING)

Swap elements from start and end moving inward, no extra space used.

```java
public class ReverseArrayOptimized {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};

        int start = 0;
        int end = arr.length - 1;

        while (start < end) {
            // Swap arr[start] and arr[end]
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }

        // Print reversed array
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}
```

Time Complexity: O(n)

Space Complexity: O(1) , no extra memory used
