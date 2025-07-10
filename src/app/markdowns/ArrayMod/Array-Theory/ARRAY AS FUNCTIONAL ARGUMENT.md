# ARRAY AS FUNCTIONAL ARGUMENT

- Java is pass-by-value for everything, including arrays.
- However, arrays are objects, so when you pass an array to a method, you're passing a copy of the reference to the array.
- This means: the method can modify the contents of the original array, but not reassign the reference itself.

## 1. PASSING ARRAY TO A METHOD (MODIFYING CONTENT)

```java
public class Example {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        modifyArray(nums);
        System.out.println(nums[0]); // Output: 100
    }

    static void modifyArray(int[] arr) {
        arr[0] = 100; // Modifies original array content
    }
}

```

The array content is changed because the method has access to the same array in memory.

## 2. ATTEMPTING TO REASSIGN THE ARRAY INSIDE METHOD

```java
public class Example {
    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        reassignArray(nums);
        System.out.println(nums[0]); // Output: 1
    }

    static void reassignArray(int[] arr) {
        arr = new int[]{10, 20, 30}; // Reassigns local copy of reference
        arr[0] = 999;
    }
}
```

The original array is not affected by reassignment because Java passes a copy of the reference, not the actual reference itself.

## SUMMARY

| Aspect                   | Description                                     |
| ------------------------ | ----------------------------------------------- |
| Java is                  | Pass-by-value (always)                          |
| Arrays passed as         | Copy of reference                               |
| Array content changed?   | Yes, inside the method                          |
| Array reference changed? | No, reassignment inside method does not persist |

![image.png](attachment:513a38d8-3f9e-419e-8f56-e9f27b820420:image.png)
