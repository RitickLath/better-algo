export const sorting = `Sorting means arrange in an order.

### BASIC SORTING ALGORITHMS

1. Bubble Sort
2. Selection Sort
3. Insertion Sort
4. Counting Sort`;

export const bubbleSort = `# BUBBLE SORT
## IDEA OF BUBBLE SORT

**Bubble Sort** is a simple comparison-based sorting algorithm. It works by **repeatedly swapping the adjacent elements if they are in the wrong order**.

### STEPS:

1. Compare the first and second elements.
2. If the first is greater than the second, swap them.
3. Move to the next pair and repeat.
4. After each full pass, the **largest unsorted element "bubbles up" to the end**.
5. Repeat this process for all elements.

![Bubble Sort](/img/Bubble%20Sort.png)


### TIME COMPLEXITY:

- Worst Case: O(n²)
- Best Case (already sorted): O(n)
- Space Complexity: O(1) (in-place)

## VISUALIZATION

Suppose we have the array:

\`[5, 3, 8, 4, 2]\`

Let’s visualize the steps:

### PASS-1:

- Compare 5 and 3 → swap → \`[3, 5, 8, 4, 2]\`
- Compare 5 and 8 → no swap
- Compare 8 and 4 → swap → \`[3, 5, 4, 8, 2]\`
- Compare 8 and 2 → swap → \`[3, 5, 4, 2, 8]\` ✅ 8 is in correct place

### PASS-2:

- Compare 3 and 5 → no swap
- Compare 5 and 4 → swap → \`[3, 4, 5, 2, 8]\`
- Compare 5 and 2 → swap → \`[3, 4, 2, 5, 8]\` ✅ 5 is in correct place

### ……

Final: \`[2, 3, 4, 5, 8]\`

### JAVA CODE

\`\`\`java
public class BubbleSortExample {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        boolean swapped;

        // Outer loop for each pass
        for (int i = 0; i < n - 1; i++) {
            swapped = false;

            // Inner loop for comparing adjacent elements
            for (int j = 0; j < n - i - 1; j++) {
                // Swap if elements are in wrong order
                if (arr[j] > arr[j + 1]) {
                    // Swapping using a temp variable
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    swapped = true;
                }
            }

            // If no two elements were swapped in inner loop, array is sorted
            if (!swapped) break;
        }
    }

    // Helper function to print array
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Main function
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 4, 2};

        System.out.println("Original array:");
        printArray(arr);

        bubbleSort(arr);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}
\`\`\`

### OUTPUT

\`\`\`
Original array:
5 3 8 4 2
Sorted array:
2 3 4 5 8
\`\`\`

### TIPS

- Efficient for small datasets.
- Not used in production due to O(n²) time.
- You can optimize by checking if no swaps were made — meaning the array is already sorted.
`;

export const selectionSort = `# SELECTION SORT
## IDEA OF SELECTION SORT

**Selection Sort** works by **repeatedly finding the minimum element** from the unsorted portion and putting it at the beginning.

### STEPS:

1. Divide the array into two parts: **sorted** and **unsorted**.
2. Start with the first element, assume it's the minimum.
3. Search the rest of the array to find the real minimum.
4. Swap it with the first element.
5. Move to the next index and repeat.

![Selection Sort](/img/Selection%20Sort.png)

### TIME COMPLEXITY:

- Worst Case: O(n²)
- Best Case: O(n²) (even if already sorted)
- Space Complexity: O(1) — in-place

## VISUALIZATION

Given array:

\`[5, 3, 8, 4, 2]\`

### PASS-1:

- Minimum in \`[5, 3, 8, 4, 2]\` is 2
- Swap 2 and 5 → \`[2, 3, 8, 4, 5]\`

### PASS-2:

- Minimum in \`[3, 8, 4, 5]\` is 3
- Already in correct place → no swap

### PASS-3:

- Minimum in \`[8, 4, 5]\` is 4
- Swap 4 and 8 → \`[2, 3, 4, 8, 5]\`

### PASS-4:

- Minimum in \`[8, 5]\` is 5
- Swap 5 and 8 → \`[2, 3, 4, 5, 8]\`

### JAVA CODE

\`\`\`java
public class SelectionSortExample {
    public static void selectionSort(int[] arr) {
        int n = arr.length;

        // One by one move the boundary of unsorted subarray
        for (int i = 0; i < n - 1; i++) {
            // Assume the current index has the minimum
            int minIndex = i;

            // Find the actual minimum in the unsorted part
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            // Swap the found minimum with the first unsorted element
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    // Helper function to print array
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Main function
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 4, 2};

        System.out.println("Original array:");
        printArray(arr);

        selectionSort(arr);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}

\`\`\`

### OUTPUT

\`\`\`
Original array:
5 3 8 4 2
Sorted array:
2 3 4 5 8
\`\`\`

## SUMMARY COMPARISON

| Feature        | Bubble Sort            | Selection Sort       |
| -------------- | ---------------------- | -------------------- |
| Logic          | Swap adjacent if wrong | Find min and swap    |
| Best Case Time | O(n)                   | O(n²)                |
| Worst Case     | O(n²)                  | O(n²)                |
| Stable         | Yes (basic)            | No (unless modified) |
| In-place       | Yes                    | Yes                  |
`;

export const insertionSort = `# INSERTION SORT

## IDEA OF INSERTION SORT

Insertion Sort works like sorting playing cards in your hand. You pick one element at a time and insert it into its correct position in the already sorted portion.

### STEPS:

1. Start from index \`1\`, treat index \`0\` as sorted.
2. Pick the current element.
3. Compare it with elements to its left.
4. Shift larger elements to the right.
5. Insert the current element into the correct position.

### TIME COMPLEXITY:

- Best Case (sorted): O(n)
- Average/Worst Case: O(n²)
- Space Complexity: O(1) — in-place

## VISUALIZATION

Given array:

\`[5, 3, 8, 4, 2]\`

### PASS-1:

- Key = 3
- Compare with 5 → shift 5 → insert 3
  Result: \`[3, 5, 8, 4, 2]\`

### PASS-2:

- Key = 8
- No shift needed
  Result: \`[3, 5, 8, 4, 2]\`

### PASS-3:

- Key = 4
- Shift 8, then 5 → insert 4
  Result: \`[3, 4, 5, 8, 2]\`

### PASS-4:

- Key = 2
- Shift 8, 5, 4, 3 → insert 2
  Final: \`[2, 3, 4, 5, 8]\`

### JAVA CODE

\`\`\`java
public class InsertionSortExample {
    public static void insertionSort(int[] arr) {
        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;

            // Move elements greater than key to the right
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            // Insert key in correct position
            arr[j + 1] = key;
        }
    }

    // Helper function to print array
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Main function
    public static void main(String[] args) {
        int[] arr = {5, 3, 8, 4, 2};

        System.out.println("Original array:");
        printArray(arr);

        insertionSort(arr);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}
\`\`\`

### OUTPUT

\`\`\`
Original array:
5 3 8 4 2
Sorted array:
2 3 4 5 8
\`\`\`
`;

export const inbuilt = `# INBUILT SORTING METHODS

The \`Arrays.sort()\` method from the \`java.util.Arrays\` class is used to sort arrays in ascending order by default.

## 1. SORTING A PRIMITIVE ARRAY

\`\`\`java
import java.util.Arrays;

public class SortPrimitiveArray {
    public static void main(String[] args) {
        int[] arr = {4, 1, 3, 9, 2};

        Arrays.sort(arr);  // Ascending order

        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}
\`\`\`

OUTPUT:

\`\`\`
Sorted array: [1, 2, 3, 4, 9]
\`\`\`

## 2. SORTING AN OBJECT ARRAY (E.G., INTEGER[])

\`\`\`java
import java.util.Arrays;

public class SortObjectArray {
    public static void main(String[] args) {
        Integer[] arr = {4, 1, 3, 9, 2};

        Arrays.sort(arr);  // Ascending order

        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}
\`\`\`

## 3. SORTING IN DESCENDING ORDER (ONLY FOR OBJECT ARRAYS)

\`\`\`java
import java.util.Arrays;
import java.util.Collections;

public class SortDescending {
    public static void main(String[] args) {
        Integer[] arr = {4, 1, 3, 9, 2};

        Arrays.sort(arr, Collections.reverseOrder());

        System.out.println("Descending order: " + Arrays.toString(arr));
    }
}
\`\`\`

## IMPORTANT NOTES

- \`Arrays.sort()\` sorts in ascending order by default.
- To sort in descending order, use \`Collections.reverseOrder()\` with boxed types like \`Integer[]\`.
- For partial sorting: \`Arrays.sort(arr, fromIndex, toIndex);\`
  This sorts elements from \`fromIndex\` (inclusive) to \`toIndex\` (exclusive).
- \`Collections.reverseOrder()\` does not work with primitive arrays like \`int[]\`.
- Time Complexity: \`O(N x log N)\`
`;

export const bubbleSortWithRecursion = `# PRINT THE GIVEN BELOW PATTERN

\`\`\`java
* * * *
* * *
* *
*
\`\`\`

### CODE

\`\`\`java
class Start {

    static void Triangle(int row, int col){
        if(row == 0){
            return;
        }

        if(row > col){
            System.out.print("* ");
            Triangle(row, col+1);
        }else{
            System.out.println("");
            Triangle(row-1, 0);
        }
    }

    public static void main(String[] args) {
        Triangle(4, 0);
    }
}
\`\`\`

### RECURSIVE TREE

![Bubble Sort](/img/Bubble%20Sort%20Re.png)

Similar thing we do with bubble sort.

# BUBBLE SORT USING RECURSION

\`\`\`java
class Start {

    static void BubbleSort(int arr[], int index, int end){
        if(end == 0){
            return;
        }

        if(end > index){
            if(arr[index + 1] < arr[index]){
                // swap
                int temp = arr[index+1];
                arr[index+1] = arr[index];
                arr[index] = temp;
            }
            BubbleSort(arr, index+1, end);
        }
        else{
            BubbleSort(arr, index, end-1);
        }
    }

    public static void main(String[] args) {
        int arr[] = {1,4,2,56,8};
        BubbleSort(arr, 0, 4);
    }
}
\`\`\`

Very similar to above pattern problem.
`;

export const selectionSortWithRecursion = `# SELECTION SORT WITH RECURSION

Find the largest and swap it it with the last element and so on.

\`\`\`java
class Start {

    static int index = -1;

    static void SelectionSort(int arr[], int max, int start, int end){
        if(end == 0){
            return;
        }

        if(start <= end){
            if(arr[start] > max){
                max = arr[start];
                index = start;
            }
            SelectionSort(arr, max, start+1, end);
        }
        else{
            // swap if required
            if(index != -1){
                int temp = arr[end];
                arr[end] = arr[index];
                arr[index] = temp;
            }
            index = -1;
            SelectionSort(arr, arr[0], 0, end-1);
        }
    }

    public static void main(String[] args) {
        int arr[] = {1,4,2,56,8};
        SelectionSort(arr, arr[0], 0, 4);
    }
}
\`\`\`
`;
