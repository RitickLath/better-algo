// Beginner

export const arrayTheory = `# WHAT IS AN ARRAY?

An array is a collection of elements that are:

- Of the same data type (e.g., all integers, all strings, etc.)
- Stored in a single variable
- Indexed, meaning each item can be accessed using a number starting from 0

Think of an array as a row of boxes, where each box holds a value, and you can find or change the value using its position (index).

## WHY DO WE NEED ARRAYS?

Without arrays, we would have to create separate variables for every piece of similar data, like this:

- \`int student1, student2, student3, ...\`

This becomes inefficient and hard to manage, especially when dealing with large amounts of data.

Arrays help by:

- Organizing data efficiently
- Reducing the number of variables
- Making loops and logic easier, especially when performing repetitive tasks like sorting, searching, or calculations

## BASIC CONCEPTS OF ARRAYS IN JAVA

Here are the key theoretical ideas behind arrays in Java:

### 1. FIXED SIZE

- Once an array is created, its size cannot be changed.
- You must know or estimate how many elements you'll need.

### 2. HOMOGENEOUS ELEMENTS

- All elements in an array must be of the same data type (e.g., all \`int\`, all \`double\`, or all \`String\`).

### 3. INDEXING STARTS AT 0

- The first element is at index 0, second at index 1, and so on.

### 4. CONTIGUOUS MEMORY ALLOCATION

- Arrays store elements in a continuous block of memory, making access fast and efficient.

### 5. EFFICIENT ACCESS

- Accessing any element by index is very fast (constant time, O(1)).

## REAL-LIFE EXAMPLE

Imagine a classroom with 30 students. You want to store their scores. Rather than creating 30 separate variables, you can use an array of 30 elements, one for each student.

## COMMON OPERATIONS (CONCEPTUALLY)

- Accessing: Looking at the value at a specific position
- Updating: Changing a value at a given index
- Traversing: Going through all elements using a loop
- Searching/Sorting: Finding or ordering values within the array

# SUMMARY

Arrays are fundamental structures in Java that let us:

- Store multiple values efficiently
- Keep code organized and scalable
- Perform common data operations with ease
`;

export const arrayCreation = `# WHAT DOES "CREATING AN ARRAY" MEAN?

Array creation in Java involves:

1. Declaring an array variable.
2. Allocating memory to hold a fixed number of elements.
3. (Optional) Initializing the array elements with specific values.

In Java, arrays are objects stored in heap memory, and the variable holds a reference to the array.

## 1. DECLARING AN ARRAY

### SYNTAX:

\`\`\`java
dataType[] arrayName;
\`\`\`

or

\`\`\`java
dataType arrayName[];
\`\`\`

### EXAMPLES

\`\`\`java
int[] numbers;      // Preferred form
double[] prices;
String[] names;

int values[];       // Also valid but less preferred
\`\`\`

This only tells the compiler the type of array; no memory is allocated yet.

## 2. ALLOCATING MEMORY (CREATING ARRAY OBJECT)

To actually create the array (allocate memory), use the \`new\` keyword with the desired size.

### SYNTAX

\`\`\`java
arrayName = new dataType[size];
\`\`\`

### FULL DECLARATION + CREATION EXAMPLE

\`\`\`java
int[] numbers = new int[5];      // Creates an array of 5 integers
double[] prices = new double[3]; // Creates an array of 3 doubles
String[] names = new String[4];  // Creates an array of 4 Strings
\`\`\`

At this point:

- Memory is allocated.
- All elements are filled with default values:
  - \`0\` for numbers
  - \`false\` for boolean
  - \`null\` for objects (like \`String\`)

## 3. DECLARATION AND CREATION IN ONE LINE

### SYNTAX

\`\`\`java
dataType[] arrayName = new dataType[size];
\`\`\`

### EXAMPLE

\`\`\`java
char[] grades = new char[5];
boolean[] flags = new boolean[10];
\`\`\`

This combines the declaration and creation steps into one.

## 4. ARRAY CREATION WITH INITIAL VALUES

If you already know the values at creation time, use array initializer syntax (no \`new\` keyword needed).

### SYNTAX

\`\`\`java
dataType[] arrayName = {value1, value2, value3, ...};
\`\`\`

### EXAMPLES

\`\`\`java
int[] ages = {18, 21, 25, 30};
String[] colors = {"Red", "Green", "Blue"};
char[] vowels = {'A', 'E', 'I', 'O', 'U'};
\`\`\`

This both creates and initializes the array at once. The size is automatically determined based on the number of values.

# SUMMARY OF ARRAY CREATION

| Method                    | Description                              | Example                      |
| ------------------------- | ---------------------------------------- | ---------------------------- |
| Declaration only          | No memory allocated                      | \`int[] nums;\`                |
| Declaration + Creation    | Allocates fixed size with default values | \`int[] nums = new int[5];\`   |
| Declaration + Init values | Creates and fills with specific values   | \`int[] nums = {1, 2, 3, 4};\` |
`;

export const inputOutput = `## 1. ARRAY INPUT (USING SCANNER)

\`\`\`java
import java.util.Scanner;

public class ArrayInput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] numbers = new int[5];

        // Input values
        for (int i = 0; i < numbers.length; i++) {
            System.out.print("Enter number " + (i + 1) + ": ");
            numbers[i] = sc.nextInt();
        }
    }
}
\`\`\`

## 2. ARRAY OUTPUT (PRINTING ELEMENTS)

\`\`\`java
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
\`\`\`

## 3. ARRAY UPDATE (CHANGING VALUE AT SPECIFIC INDEX)

\`\`\`java
numbers[2] = 999;  // Updates the 3rd element (index 2)

System.out.println("Updated value at index 2: " + numbers[2]);
\`\`\`
`;

export const functionalArgument = `## KEY CONCEPT

- Java is pass-by-value for everything, including arrays.
- However, arrays are objects, so when you pass an array to a method, you're passing a copy of the reference to the array.
- This means: the method can modify the contents of the original array, but not reassign the reference itself.

## 1. PASSING ARRAY TO A METHOD (MODIFYING CONTENT)

\`\`\`java
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

\`\`\`

The array content is changed because the method has access to the same array in memory.

## 2. ATTEMPTING TO REASSIGN THE ARRAY INSIDE METHOD

\`\`\`java
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
\`\`\`

The original array is not affected by reassignment because Java passes a copy of the reference, not the actual reference itself.

## SUMMARY

| Aspect                   | Description                                     |
| ------------------------ | ----------------------------------------------- |
| Java is                  | Pass-by-value (always)                          |
| Arrays passed as         | Copy of reference                               |
| Array content changed?   | Yes, inside the method                          |
| Array reference changed? | No, reassignment inside method does not persist |
`;

export const linearSearch = `# LINEAR SEARCH IN JAVA

Search for a target value in an array by checking each element one by one.

### CODE EXAMPLE

\`\`\`java
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
\`\`\`

### HOW IT WORKS

1. Loop through the array.
2. Compare each element with the target.
3. If found, print the index and stop.
4. If not found, print "Not found".
`;

export const largestInAnArray = `
# LARGEST IN AN ARRAY

Find the largest/smallest number in a given array.

\`\`\`java
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
\`\`\`
`;

export const secondLargestInArraySingleLoop = `# SECOND LARGEST IN AN ARRAY (SINGLE LOOP)

## BETTER SOLUTION: USING 2 LOOPS

\`\`\`java
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
\`\`\`

Time Complexity: O(2n)

## OPTIMAL SOLUTION: SINGLE LOOP

\`\`\`java
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
\`\`\`
`;

export const reverseAnArray = `# REVERSE AN ARRAY
1. Normal (Brute-force) method using an extra array
2. Optimized (In-place) method using two-pointer swapping

## METHOD 1: NORMAL WAY (USING EXTRA ARRAY)

Create a new array and copy elements from the original in reverse order.

\`\`\`java
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
\`\`\`

Time Complexity: O(n)

Space Complexity: O(n) (due to extra array)

## METHOD 2: OPTIMIZED WAY (IN-PLACE SWAPPING)

Swap elements from start and end moving inward, no extra space used.

\`\`\`java
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
\`\`\`

Time Complexity: O(n)

Space Complexity: O(1) , no extra memory used
`;

export const checkSortedOrNot = `# CHECK SORTED OR NOT

Sorted can be in ascending or descending no problem here.

\`\`\`java
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
\`\`\`
`;

export const minIncrementKOpsToEqual = `# MINIMUM INCREMENT BY K OPERATIONS TO MAKE ALL EQUAL

Given an array \`arr[]\` and an integer \`k\`. You can perform an operation in which you can increment any of the number in the array by \`k\`. Find the \`minimum\` number of operations needed to make all the elements of array equal.

Note: If it is not possible to make all elements of array equal return -1.

### EXAMPLE

\`\`\`jsx
Input: arr[] = [4, 4, 4, 2], k = 2
Output: 1
Explanation: We can increment the element at last index of the array
by 2 to make all the elements equal to 4.
\`\`\`

\`\`\`jsx
Input: arr[] = [4, 2, 6, 8], k = 3
Output: -1
Explanation: It can be proven that these elements can't be made equal
by applying any number of operations.
\`\`\`

\`\`\`jsx
Input: arr[] = [4, 7, 19, 16], k = 3
Output: 10
\`\`\`

### INTUTION

1. Find the max element in the array, this is the target value.
2. For each element, compute the difference from \`max\`.
3. If the difference is not divisible by \`k\`, return \`1\` (can't reach max using \`+k\` steps).
4. If divisible, count how many \`+k\` steps are needed: \`diff / k\`.
5. Sum all steps → this is the minimum number of operations required.

### CODE

\`\`\`jsx
class Solution {

    static int minOps(int arr[], int k) {

        int max = arr[0];
        int ans = 0;
        for(int i = 0; i<arr.length; i++){
            max = Math.max(arr[i], max);
        }

        for(int i = 0; i<arr.length; i++){
            int diff = max - arr[i];

            if(diff % k == 0){
                ans += diff/k;
            }
            else{
                return -1;
            }
        }
        return ans;
    }
}
\`\`\`
`;

export const removeDuplicatesFromSorted = `# REMOVE DUPLICATES FROM SORTED

Remove the duplicate array from sorted array.

## TWO POINTER METHOD

\`\`\`java
public static void RemoveDuplicateFromSortedOptimal(int arr[]) {

    int j = 0;
    for (int i = 1; i < arr.length; i++) {
        // If the current element is not equal to the element at position \`j\`
        if (arr[i] != arr[j]) {
            j++; // Move the \`j\` pointer to the next position
            arr[j] = arr[i]; // Update the array at position \`j\` with the unique element
        }
    }

    // \`j + 1\` represents the count of unique elements in the array
    System.out.println("Number of unique elements: " + (j + 1));
}
\`\`\`

Remove the duplicate array from sorted array.

## TWO POINTER METHOD

\`\`\`java
public static void RemoveDuplicateFromSortedOptimal(int arr[]) {

    int j = 0;
    for (int i = 1; i < arr.length; i++) {
        // If the current element is not equal to the element at position \`j\`
        if (arr[i] != arr[j]) {
            j++; // Move the \`j\` pointer to the next position
            arr[j] = arr[i]; // Update the array at position \`j\` with the unique element
        }
    }

    // \`j + 1\` represents the count of unique elements in the array
    System.out.println("Number of unique elements: " + (j + 1));
}
\`\`\`
`;

export const rotateArrayByOne = `# LEFT ROTATE THE ARRAY BY ONE PLACE

## OPTIMAL SOLUTION: USING TEMP VARIABLE

1. Store \`arr[0]\` in a temporary variable \`temp\`.
2. Shift each element from index \`1\` to \`n-1\` one position to the left (i.e., \`arr[i - 1] = arr[i]\`).
3. Assign \`temp\` to \`arr[n - 1]\` (place the original first element at the end).

\`\`\`java
public static void leftRotate(int arr[]) {

    // Store the first element in a temporary variable
    int temp = arr[0];

    // Shift all elements one position to the left
    for (int i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }

    // Place the first element at the last position
    arr[arr.length - 1] = temp;
}
\`\`\`
`;

export const rotateArrayByK = `# ROTATE THE ARRAY BY K PLACE

> BRUTE FORCE SOLUTION: USING TEMPORARY ARRAY OF K SIZE.

## OPTIMAL SOLUTION: USING REVERSE METHOD

Array:

\`\`\`
{1, 2, 3, 4, 5, 6, 7}
\`\`\`

Rotate by K = 3 positions to the left using the **reverse approach**.

\`\`\`java
// REVERSE CHUNKS 0 TO K-1 AND K TO N
{3, 2, 1, 7, 6, 5, 4}
\`\`\`

\`\`\`java
// REVERSE ABOVE AS A WHOLE
{4, 5, 6, 7, 1, 2, 3}
\`\`\`

### CODE:

\`\`\`java
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
\`\`\`
`;

export const moveAllZerosToEnd = `# MOVE ALL ZERO AT THE END OF THE ARRAY

Use two pointers:

- \`j\` → Tracks the position to place the next non-zero element.
- \`i\` → Iterates through the array.

1. Initialize \`j = 0\`.
2. Traverse the array with \`i\` from \`0\` to \`n-1\`.
3. If \`arr[i]\` is not zero:
   - Swap \`arr[i]\` and \`arr[j]\`.
   - Increment \`j\`.
4. Continue until the end of the array.

## **CODE:**

\`\`\`java
public static void moveZerosToEnd(int arr[]) {
    int j = 0; // Position for next non-zero element

    for (int i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            // Swap only if i and j are different
            if (i != j) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
}
\`\`\`

Time: \`O(N)\` — single pass

Space: \`O(1)\` — in-place, no extra space
`;

export const findMissingNumber = `# FIND MISSING NUMBER

You are given an array:

\`\`\`java
arr = {1, 2, 4, 5}
N = 5
\`\`\`

The array contains N-1 distinct integers from the range 1 to N.

Your task is to find the only missing number from the range.

## OBSERVATION

- The numbers should ideally be: \`1, 2, 3, 4, 5\`
- But \`3\` is missing.

## OPTIMAL APPROACH — USING MATH FORMULA

### KEY IDEA

Use the sum of the first N natural numbers formula:

\`Sum1 to N = N⋅(N+1)2\`

Subtract all elements of the array from this sum.

What remains is the missing number.

### STEP-BY-STEP EXPLANATION

1. CALCULATE EXPECTED TOTAL

   Use the formula Total = \`N*(N + 1) / 2\`

2. SUBTRACT ARRAY ELEMENTS FROM TOTAL

   Loop through the array and subtract each number from \`Total\`

3. RETURN THE RESULT

   The remaining value is the missing number.

### JAVA CODE

\`\`\`java
public static int MissingOptimal1(int[] arr, int n) {
    int sum = n * (n + 1) / 2; // Expected sum of numbers from 1 to n

    for (int i = 0; i < arr.length; i++) {
        sum -= arr[i]; // Subtract actual elements
    }

    return sum; // What remains is the missing number
}
\`\`\`

## TIME AND SPACE COMPLEXITY

| METRIC           | VALUE |
| ---------------- | ----- |
| TIME COMPLEXITY  | O(N)  |
| SPACE COMPLEXITY | O(1)  |

## LIMITATION

This approach may not work correctly for very large values of N, where:

\`N⋅(N+1)/2\`

...can exceed the \`int\` range and lead to overflow.

## RECOMMENDATION FOR LARGE NUMBERS

Use XOR-based solution for constant space and no risk of overflow.
`;

export const maxConsecutiveOnes = `# MAXIMUM CONSECUTIVE ONES

You are given a binary array of \`0\`s and \`1\`s:

\`\`\`java
arr = {1, 1, 0, 1, 1, 1}
\`\`\`

Your task is to find the maximum number of consecutive 1s in the array.

## OPTIMAL SOLUTION - LINEAR SCAN

### KEY IDEA

Use a single pass through the array while maintaining:

- A \`count\` to track the current number of consecutive 1s.
- A \`max\` to store the maximum count observed so far.

### JAVA CODE

\`\`\`java
public static int MaximumConsecutiveOnesOptimize(int[] arr) {
    int max = 0;
    int count = 0;

    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            count++; // Increment count for consecutive 1s
            max = Math.max(max, count); // Update max if needed
        } else {
            count = 0; // Reset count when 0 is encountered
        }
    }

    return max;
}
\`\`\`

## TIME AND SPACE COMPLEXITY

| METRIC           | VALUE |
| ---------------- | ----- |
| TIME COMPLEXITY  | O(N)  |
| SPACE COMPLEXITY | O(1)  |
`;

// Internediate

export const unionOfTwoSortedArrays = `# UNION OF TWO SORTED ARRAY

### INPUT

\`\`\`java
arr1 = {1, 1, 2, 3, 4, 5};
arr2 = {2, 3, 4, 4, 5};
\`\`\`

Find the **union** of the two arrays (i.e., all distinct elements from both arrays) in **sorted order**.

### EXPECTED OUTPUT

\`\`\`java
union = {1, 2, 3, 4, 5}
\`\`\`

## OPTIMAL APPROACH: TWO POINTERS

### CORE IDEA

Use **two pointers** to traverse both sorted arrays, and build a result list while **skipping duplicates**. This ensures all unique elements are collected in a single pass.

## STEP-BY-STEP PLAN

### 1. INITIALIZE

- Two pointers: \`i = 0\` (for \`arr1\`), \`j = 0\` (for \`arr2\`)
- One result list: \`ArrList = []\` to store the union result

### 2. TRAVERSE BOTH ARRAYS

Use a \`while\` loop to compare and process elements:

| CASE                 | ACTION                                                       |
| -------------------- | ------------------------------------------------------------ |
| \`arr1[i] < arr2[j]\`  | Add \`arr1[i]\` to result if not duplicate, increment \`i\`      |
| \`arr2[j] < arr1[i]\`  | Add \`arr2[j]\` to result if not duplicate, increment \`j\`      |
| \`arr1[i] == arr2[j]\` | Add one of them if not duplicate, increment both \`i\` and \`j\` |

### 3. HANDLE REMAINING ELEMENTS

Once one array is fully traversed:

- Continue processing remaining elements in \`arr1\` (checking for duplicates)
- Continue processing remaining elements in \`arr2\` (checking for duplicates)

### 4. CONVERT RESULT TO ARRAY

Convert the \`ArrayList<Integer>\` to an \`int[]\` and return it as the final result.

## JAVA CODE

\`\`\`java
public static int[] unionOptimal(int[] arr1, int[] arr2) {
    int i = 0, j = 0;
    ArrayList<Integer> ArrList = new ArrayList<>();

    // Traverse both arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (ArrList.isEmpty() || ArrList.get(ArrList.size() - 1) != arr1[i]) {
                ArrList.add(arr1[i]);
            }
            i++;
        } else if (arr2[j] < arr1[i]) {
            if (ArrList.isEmpty() || ArrList.get(ArrList.size() - 1) != arr2[j]) {
                ArrList.add(arr2[j]);
            }
            j++;
        } else { // arr1[i] == arr2[j]
            if (ArrList.isEmpty() || ArrList.get(ArrList.size() - 1) != arr1[i]) {
                ArrList.add(arr1[i]);
            }
            i++;
            j++;
        }
    }

    // Handle remaining elements in arr1
    while (i < arr1.length) {
        if (ArrList.isEmpty() || ArrList.get(ArrList.size() - 1) != arr1[i]) {
            ArrList.add(arr1[i]);
        }
        i++;
    }

    // Handle remaining elements in arr2
    while (j < arr2.length) {
        if (ArrList.isEmpty() || ArrList.get(ArrList.size() - 1) != arr2[j]) {
            ArrList.add(arr2[j]);
        }
        j++;
    }

    // Convert ArrayList to array
    int[] result = new int[ArrList.size()];
    for (int k = 0; k < result.length; k++) {
        result[k] = ArrList.get(k);
    }

    return result;
}
\`\`\`

## TIME AND SPACE COMPLEXITY

| METRIC | COMPLEXITY |
| ------ | ---------- |
| TIME   | O(N + M)   |
| SPACE  | O(N + M)   |
`;

export const intersectionOfTwoSortedArrays = `# INTERSECTION OF TWO SORTED ARRAY

### INPUT

\`\`\`java
arr1 = {1, 1, 2, 3, 4, 4, 5};
arr2 = {2, 3, 4, 4, 5};
\`\`\`

Find the intersection of both arrays such that:

- Each element must have a corresponding match in the other array
- Include duplicates only as many times as they appear in both arrays

### EXPECTED OUTPUT

\`\`\`java
intersection = {2, 3, 4, 4, 5}
\`\`\`

## OPTIMAL SOLUTION: TWO POINTERS

### KEY IDEA

Since both arrays are sorted, use two pointers to traverse simultaneously and collect only common elements.

### STEP-BY-STEP APPROACH

1. **INITIALIZE VARIABLES**
   - Let \`i = 0\` and \`j = 0\` to traverse \`arr1\` and \`arr2\`
2. **CREATE RESULT LIST**
   - Use an \`ArrayList<Integer>\` to store the intersection
3. **TWO POINTER TRAVERSAL**
   - While \`i < n1\` and \`j < n2\`:
     - If \`arr1[i] == arr2[j]\`: Add to result, increment both \`i\` and \`j\`
     - If \`arr1[i] < arr2[j]\`: Increment \`i\`
     - If \`arr2[j] < arr1[i]\`: Increment \`j\`
4. **CONVERT TO PRIMITIVE ARRAY**
   - Copy values from the list to a new array

### JAVA CODE

\`\`\`java
public static int[] IntersectionOptimize(int[] arr1, int[] arr2) {
    int n1 = arr1.length;
    int n2 = arr2.length;

    ArrayList<Integer> result = new ArrayList<>();
    int i = 0, j = 0;

    while (i < n1 && j < n2) {
        if (arr1[i] == arr2[j]) {
            result.add(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    int[] intersection = new int[result.size()];
    for (int k = 0; k < result.size(); k++) {
        intersection[k] = result.get(k);
    }

    return intersection;
}
\`\`\`

### COMPLEXITY ANALYSIS

| METRIC           | VALUE      |
| ---------------- | ---------- |
| TIME COMPLEXITY  | O(N1 + N2) |
| SPACE COMPLEXITY | O(N1 + N2) |
`;

export const pairsInArray = `# PAIRS IN ARRAY

Given an array of integers, print all possible pairs of elements in the array.

### INPUT

\`\`\`java
int[] arr = {1, 2, 3, 4};
\`\`\`

### EXPECTED OUTPUT

\`\`\`
(1, 2) (1, 3) (1, 4)
(2, 3) (2, 4)
(3, 4)
\`\`\`

Total Pairs = n \* (n - 1) / 2

### SOLUTION: USING NESTED LOOP

\`\`\`java
public class AllPairsBruteForce {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4};

        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                System.out.println("(" + arr[i] + ", " + arr[j] + ")");
            }
            System.out.println();
        }
    }
}
\`\`\`

Time Complexity: \`O(n²)\`

Space Complexity: \`O(1)\`

### FOLLOW-UP VARIATIONS YOU CAN TRY:

1. Count total number of pairs
2. Only print pairs whose sum is even/odd
3. Print pairs whose sum equals a target value
4. Avoid printing duplicate pairs
5. Print index-based pairs instead of values
`;

export const printAllSubarrays = `# PRINT SUBARRAYS (IMP.)

Given an array of integers, print all possible subarrays. A subarray is a \`continuous\` part of the array (not just any combination of elements).

### INPUT

\`\`\`java
int[] arr = {1, 2, 3};
\`\`\`

### EXPECTED OUTPUT

\`\`\`java
[1]
[1, 2]
[1, 2, 3]
[2]
[2, 3]
[3]
\`\`\`

### LOGIC:

- A subarray is defined by two indices: \`start\` and \`end\`
- Loop start from 0 to n-1
- For each start, loop end from start to n-1
- Print elements from start to end using a third loop

### CODE:

\`\`\`java
public class PrintSubarrays {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3}; // Example array

        int n = arr.length;

        // Loop for start index
        for (int start = 0; start < n; start++) {
            // Loop for end index
            for (int end = start; end < n; end++) {
                // Print current subarray
                for (int i = start; i <= end; i++) {
                    System.out.print(arr[i] + " ");
                }
                System.out.println(); // Move to next line after printing one subarray
            }
        }
    }
}
\`\`\`

Time: O(n³)

Space: O(1)

## OPTIMIZED APPROCH

\`\`\`jsx
// User function Template for Java
class Solution {

    public List<List<Integer>> getSubArrays(int[] arr) {

        List<List<Integer>> outer = new ArrayList<>();

        for(int start = 0 ; start<arr.length; start++){

            List<Integer> inner = new ArrayList<>();
            for(int end = start; end < arr.length; end++){
                inner.add(arr[end]);
                outer.add(new ArrayList<>(inner));
            }

        }
        return outer;
    }
}
\`\`\`
`;

export const maxSubarraySumNaive = `# MAX SUBARRAY SUM - I (NATIVE)

Given an array of integers (can include negative numbers), find the subarray with the maximum sum, and return that sum.

### EXAMPLE

\`\`\`java
int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
\`\`\`

\`\`\`java
Maximum Subarray Sum = 6
\`\`\`

The subarray [4, -1, 2, 1] has the maximum sum: 4 + (-1) + 2 + 1 = 6

### LOGIC:

- Try every possible subarray using two nested loops.
- For each subarray, calculate its sum using a third loop.
- Track the maximum sum seen so far.

### CODE:

\`\`\`java
public class MaxSubarraySumNaive {
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};

        int n = arr.length;
        int maxSum = Integer.MIN_VALUE; // Start with the smallest value

        // Try all subarrays
        for (int start = 0; start < n; start++) {
            for (int end = start; end < n; end++) {
                int currentSum = 0;

                // Calculate sum of subarray arr[start..end]
                for (int i = start; i <= end; i++) {
                    currentSum += arr[i];
                }

                // Update maxSum if currentSum is larger
                if (currentSum > maxSum) {
                    maxSum = currentSum;
                }
            }
        }

        System.out.println("Maximum Subarray Sum = " + maxSum);
    }
}
\`\`\`

### TIME AND SPACE COMPLEXITY:

Time Complexity: O(n³) → 3 nested loops

Space Complexity: O(1) → no extra memory used
`;

export const maxSubarraySumPrefixSum = `# MAX SUBARRAY SUM - II (PREFIX SUM)

### LOGIC:

- Create a prefix sum array where \`prefix[i] = sum of arr[0] to arr[i]\`
- Then for any subarray \`arr[i..j]\`, its sum is:
  \`\`\`java
  subarraySum = prefix[j] - prefix[i - 1]
  \`\`\`
  (and for \`i == 0\`, it’s just \`prefix[j]\`)

This avoids recomputing sums again and again.

### JAVA CODE:

\`\`\`java
public class MaxSubarrayPrefix {
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        int n = arr.length;

        // Step 1: Build prefix sum array
        int[] prefix = new int[n];
        prefix[0] = arr[0];
        for (int i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] + arr[i];
        }

        // Step 2: Try all subarrays using prefix sums
        int maxSum = Integer.MIN_VALUE;

        for (int start = 0; start < n; start++) {
            for (int end = start; end < n; end++) {
                int currentSum;

                if (start == 0) {
                    currentSum = prefix[end];
                } else {
                    currentSum = prefix[end] - prefix[start - 1];
                }

                if (currentSum > maxSum) {
                    maxSum = currentSum;
                }
            }
        }

        System.out.println("Maximum Subarray Sum = " + maxSum);
    }
}
\`\`\`

### TIME AND SPACE COMPLEXITY:

- Time Complexity: O(n²)
- Space Complexity: O(n) → for the prefix array
`;

export const maxSubarraySumKadane = `# MAX SUBARRAY SUM - III (KADANE’S)

## MAXIMUM SUBARRAY SUM — KADANE'S ALGORITHM (BEST PRACTICE)

### LOGIC:

- Maintain a \`currentSum\` that keeps track of the current subarray sum.
- If \`currentSum\` becomes negative, reset it to 0 — because continuing with a negative sum will reduce the total.
- Keep updating a \`maxSum\` whenever \`currentSum\` is greater than it.

![Kanade](/img/Kanade%20Sum.png)

### JAVA CODE:

\`\`\`java
public class KadaneAlgorithm {
    public static void main(String[] args) {
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};

        int maxSum = Integer.MIN_VALUE;
        int currentSum = 0;

        for (int i = 0; i < arr.length; i++) {
            currentSum += arr[i];

            if (currentSum > maxSum) {
                maxSum = currentSum;
            }

            if (currentSum < 0) {
                currentSum = 0;
            }
        }

        System.out.println("Maximum Subarray Sum = " + maxSum);
    }
}
\`\`\`

### TIME & SPACE COMPLEXITY:

- Time Complexity: O(n) — single pass
- Space Complexity: O(1) — constant space

### NOTE:

- \`Kadane’s\` works even with negative numbers.
- If the array contains \`all negative numbers\`, and you want to allow one of them as the answer, then again iterate to find the max in an array.
`;

export const trappingRainwaterTheory = ``;

export const trappingRainwaterCode = ``;

export const dutchNationalFlagSort = `# SORT AN ARRAY OF 0’S, 1’S AND 2’S | DUTCH FLAG

Given an array consisting only of 0s, 1s, and 2s, sort it in-place without using any sorting library functions.

### EXAMPLE

\`\`\`java
arr = {2, 0, 1, 2, 0, 1}
Sorted → {0, 0, 1, 1, 2, 2}
\`\`\`

## BRUTE FORCE APPROACH — USING BUILT-IN SORT

### INTUITION

Use the Java built-in \`Arrays.sort()\` method.

### JAVA CODE

\`\`\`java
public static int[] sortAnArrayOfZeroOnesTwosBrute(int arr[]) {
    Arrays.sort(arr); // Time complexity: O(N log N)
    return arr;
}
\`\`\`

### COMPLEXITY

- **Time**: O(N log N)
- **Space**: O(1)

> Not efficient when the array only has 0s, 1s, and 2s, we can do better in linear time!

## BETTER APPROACH - COUNTING FREQUENCIES

### INTUITION

Count the number of 0s, 1s, and 2s, then rewrite the array based on these counts.

### JAVA CODE

\`\`\`java
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
\`\`\`

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

- \`low\` — boundary of last placed 0
- \`mid\` — current processing element
- \`high\` — boundary of first unprocessed 2

### JAVA CODE

\`\`\`java
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
\`\`\`

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
`;

export const mooresVotingMajorityElement = `# MAJORITY ELEMENT | MOORE’S VOTING ALGORITHM

Given an array \`arr[]\`, find the majority element — the element that appears more than \`n / 2\` times. If no such element exists, return \`-1\`.

## INTUITION

A majority element dominates the array — it **must occur more than half** the time. For any valid array of size \`n\`, there can **only be one majority element** at most.

## BRUTE FORCE SOLUTION: NESTED LOOP

Use two nested loops to count the occurrences of each element.

\`\`\`java
public static int findMajorityElementBrute(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n; i++) {
        int count = 0;
        for (int j = 0; j < n; j++) {
            if (arr[j] == arr[i]) {
                count++;
            }
        }
        if (count > n / 2) {
            return arr[i];
        }
    }
    return -1; // No majority element found
}
\`\`\`

### COMPLEXITY

- Time: O(n²)
- Space: O(1)

> Inefficient for large arrays; use only for learning basics or in constrained environments.

## OPTIMAL SOLUTION: MOORE’S VOTING ALGORITHM

The Moore’s Voting Algorithm is used to find a majority element in an array. A majority element is an element that appears more than \`n/2\` times in the array, where \`n\` is the size of the array.

The algorithm works in two phases:

1. Candidate selection
2. Candidate verification.

### CANDIDATE SELECTION PHASE:

- Use a \`candidate\` variable to store a potential majority element.
- Use a \`count\` variable to track the balance of the candidate.
- Traverse the array:
  - If \`count\` is 0, set the current element as the \`candidate\` and initialize \`count\` to 1.
  - Otherwise, increment \`count\` if the current element matches the \`candidate\`, or decrement \`count\` otherwise.

### CANDIDATE VERIFICATION PHASE:

- Verify if the \`candidate\` is truly the majority element by counting its occurrences in the array.
- If the count of the \`candidate\` is greater than \`n/2\`, it is the majority element; otherwise, there is no majority element.

### EXAMPLE ILLUSTRATION:

Consider the array: \`[3, 1, 3, 3, 2, 3, 3]\`

Step 1: Candidate Selection

- Traverse the array while maintaining \`candidate\` and \`count\`:

| Index | Element | \`candidate\` | \`count\` | Explanation                                                               |
| ----- | ------- | ----------- | ------- | ------------------------------------------------------------------------- |
| 0     | 3       | 3           | 1       | First element is selected as the candidate with count initialized to 1.   |
| 1     | 1       | 3           | 0       | Element \`1\` is different; decrement count. When \`count\` becomes 0, reset. |
| 2     | 3       | 3 (NEW)     | 1       | Count is 0, so pick \`3\` as the new candidate and reset count to 1.        |
| 3     | 3       | 3           | 2       | Element matches \`candidate\`; increment count.                             |
| 4     | 2       | 3           | 1       | Element \`2\` is different; decrement count.                                |
| 5     | 3       | 3           | 2       | Element matches \`candidate\`; increment count.                             |
| 6     | 3       | 3           | 3       | Element matches \`candidate\`; increment count.                             |

Step 2: Candidate Verification

- Count occurrences of the candidate (\`3\`) in the array:
  - Occurrences of \`3\`: 5
- Compare with \`n/2\`:
  - \`n = 7\`, so \`n/2 = 3.5\`.
  - \`5 > 3.5\`, so \`3\` is the majority element.

\`\`\`java
public static int findMajorityElementOptimize(int[] arr) {
    int element = arr[0]; // Candidate for majority element
    int count = 1;       // Balance counter

    // Phase 1: Find a candidate for the majority element
    for (int i = 1; i < arr.length; i++) {
        if (count == 0) {
            element = arr[i]; // Reset candidate
        }

        if (arr[i] == element) {
            count++;
        } else {
            count--;
        }
    }

    // Phase 2: Validate the candidate
    count = 0;
    for (int num : arr) {
        if (num == element) {
            count++;
        }
    }

    // Return the candidate if it is a valid majority element
    return count > arr.length / 2 ? element : -1;
}
\`\`\`

Time Complexity: O(N)

Space Complexity: O(1)
`;
