# LINEAR SEARCH IN JAVA

Search for a target value in an array by checking each element one by one.

### CODE EXAMPLE:

```java
public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = {10, 25, 30, 45, 50};
        int key = 30;

        boolean found = false;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == key) {
                System.out.println("Found at index: " + i);
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("Not found in the array.");
        }
    }
}
```

### HOW IT WORKS:

1. Loop through the array.
2. Compare each element with the target.
3. If found, print the index and stop.
4. If not found, print "Not found".
