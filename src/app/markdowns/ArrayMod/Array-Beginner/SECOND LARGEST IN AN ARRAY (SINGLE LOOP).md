# SECOND LARGEST IN AN ARRAY

## BETTER SOLUTION: USING 2 LOOPS

```java
public static int SecondlargestOptimal(int arr[]){
        int large = arr[0];
        for(int i = 0 ; i<arr.length; i++){
            large = Math.max(arr[i], large);
        }

        int secondlarge = arr[0];
        for(int i = 0 ; i<arr.length; i++){
            if(arr[i] > secondlarge && arr[i] != large){
                secondlarge = arr[i];
            }

        }
        return secondlarge;
}
```

Time Complexity: O(2n)

## OPTIMAL SOLUTION: SINGLE LOOP

### INTUTION

1. Keep track of the largest and the second largest as you scan the array.
2. If you find a number greater than the current largest, update both:

   `secondLargest = largest`, then `largest = arr[i]`.

3. Else if it's smaller than the largest but bigger than secondLargest, update only `secondLargest`.

### CODE

```java
public static int SecondlargestOptimal(int arr[]){
    int largest = arr[0];
    int secondLargest = Integer.MIN_VALUE;
    for(int i = 0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(a[i] < largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}
```
