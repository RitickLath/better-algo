# FIND THE LARGEST/SMALLEST NUMBER IN A GIVEN ARRAY.

```java
public class ArrayMinMax {
    public static void main(String[] args) {
        int[] arr = {12, 45, 7, 89, 34};

        int max = getLargest(arr);
        int min = getSmallest(arr);

        System.out.println("Largest element: " + max);
        System.out.println("Smallest element: " + min);
    }

    static int getLargest(int[] arr) {
        int max = Integer.MIN_VALUE;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        return max;
    }

    static int getSmallest(int[] arr) {
        int min = Integer.MAX_VALUE;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        return min;
    }
}
```
