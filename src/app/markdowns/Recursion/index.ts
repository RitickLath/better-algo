export const introToRecursion = `# MAKE A FUNCTION TO PRINT HELLO WORLD

\`\`\`java
class Start{
    public static void main(String[] args) {
        message();
    }

    static void message(){
        System.out.println("Hello World");
    }
}
\`\`\`

# MAKE A FUNCTION TO PRINT THE HELLO WORLD 5 TIMES

\`\`\`java
class Start{
    public static void main(String[] args) {
        message();
    }

    static void message(){
        System.out.println("Hello World");
        System.out.println("Hello World");
        System.out.println("Hello World");
        System.out.println("Hello World");
        System.out.println("Hello World");
    }
}
\`\`\`

Now lets say we are asked to do without modifying the function.

\`\`\`java
class Start{
    public static void main(String[] args) {
        message();
    }

    static void message(){
        System.out.println("Hello World");
        message1();
    }

    static void message1(){
        System.out.println("Hello World");
        message2();
    }

    static void message2(){
        System.out.println("Hello World");
        message3();
    }

    static void message3(){
        System.out.println("Hello World");
        message4()
    }

    static void message4(){
        System.out.println("Hello World");
    }
}
\`\`\`

\`\`\`java
Hello World
Hello World
Hello World
Hello World
Hello World
\`\`\`

You're currently observing a chain of function calls, where one function calls another, and each prints \`"Hello World"\` before moving to the next.

### STEP-BY-STEP FLOW EXPLANATION

\`\`\`java
class Start {
    public static void main(String[] args) {
        message();
    }

    static void message() {
        System.out.println("Hello World");
        message1();           // control passed to message1()
    }

    static void message1() {
        System.out.println("Hello World");
        message2();           // control passed to message2()
    }

    static void message2() {
        System.out.println("Hello World");
        message3();           // control passed to message3()
    }

    static void message3() {
        System.out.println("Hello World");
        message4();           // control passed to message4()
    }

    static void message4() {
        System.out.println("Hello World");
        // no more calls → function returns to caller (message3)
    }
}
\`\`\`

# ANOTHER EXAMPLE: PRINT 1 TO 5

\`\`\`java
class Start{
    public static void main(String[] args) {
        print1(1);
    }

    static void print1(int n){
        System.out.println(n);
        print2(2);
    }

    static void print2(int n){
        System.out.println(n);
        print3(3);
    }

    static void print3(int n){
        System.out.println(n);
        print4(4);
    }

    static void print4(int n){
        System.out.println(n);
        print5(5);
    }

    static void print5(int n){
        System.out.println(n);
    }
}
\`\`\`

Here what is happening is:

1. Function is calling function.
2. The common thing between these function is body and definition of function is same.

# HOW FUNCTION CALLS HAPPENS IN LANGUAGES

1. While the function is not finished executing it will remain in stack.
2. When a function finishes executing it is removed from stack and the \`flow of program is restored to where the function is called\`.

We can observe that we are repeating the same body in num1, num2, num3….

That’s not good.

So instead of calling another function, we can make it like we call ourself i.e. num1 calling num1 only with different parameter and the only difference/check is needed when n = 5.

\`\`\`java
class Start{
    public static void main(String[] args) {
        print(1);
    }

    static void print(int n){

        if(n==5){
            System.out.println(n);
            return;
        }

        System.out.println(n);
        print(n+1);
    }
}
\`\`\`

The above implemented code is only recursion nothing else.

## BASE CONDITION IN RECURSION.

Lets say in the above code we have.

\`\`\`java
class Start{
    public static void main(String[] args) {
        print(1);
    }

    static void print(int n){

        System.out.println(n);
        print(n+1);
    }
}
\`\`\`

This code will crash after sometime as it will always make the print function gets called with argument increment by 1 every time as we don’t have any check till what number it should go.

The error we will get is called \`Stack overflow error\`.

And the condition we apply i.e.

\`\`\`java
if(n==5){
   System.out.println(n);
   return;
}
\`\`\`

is called \`base condition\`.

No base condition → Function will keep on getting called again and again and hence we are filling the stack and the time will be reached when the stack memory will gets filled that point we will get stack overflow error.

# WHY RECURSION?

- It helps us in solving bigger and complex problems in a simple way.
- You can convert recursion solution into iteration and vice versa.
- Space complexity is not constant because of recursive calls.
- It helps us in breaking bigger problem in smaller problems.

> THEORY TILL: 53 MINUTES.

# MAKE A RECURSIVE FUNCTION FOR PRINTING NTH FIBONACCI NUMBER

1. Break it down into smaller problems.
2. The base condition is represented by answer we already have.

\`fibo(N) = fibo(N-1)  +  fibo(N-2)\`

\`if n == 1 || n == 0 return n;\`

\`\`\`java
class Start{
    public static void main(String[] args) {
        System.out.println(fibo(4));
    }

    static int fibo(int n){

        // Base condition
        if(n == 0 || n == 1){
            return n;
        }

        return fibo(n-1) + fibo(n-2);

    }
}
\`\`\`

## RECURSION TREE

![image.png](/img/re1.png)

## HOW TO UNDERSTAND AND APPROACH THE PROBLEM

1. Identify if you can break down the problem into smaller problems.
2. Write the recursion relation if needed.
3. Draw the recursion tree.
4. About the tree.
5. See how the values are returned at each steps.
6. See the flow of function how they are getting in stack.
7. Identify and focus on left tree calls and right tree calls.

# BINARY SEARCH WITH RECURSION

\`\`\`java
class Start{
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,6,9,10,14};
        System.out.println(binarySearch(arr, 10, 0, arr.length-1));
    }

    static boolean binarySearch(int arr[], int target, int start, int end){

        // Base Condition.
        if(start > end){
            return false;
        }

        int mid = start + (end - start)/2;

        if(arr[mid] > target){
            return binarySearch(arr, target, start, mid - 1); // end = mid -1
        }
        else if(arr[mid] < target){
            return binarySearch(arr, target, mid + 1, end); // start = mid + 1
        }
        else{
            return true; // target found
        }
    }
}
\`\`\`

## RECURSION TREE VISUALIZATION

![image.png](/img/re2.png)

# TYPES OF RECURENCE RELATION:

1. Linear Recurrence relation → Linearly (Example: Fibonacci)
2. Divide and Conquer relation → Divide by factor (Example: Binary Search)

Divide and Conquer is very fast and efficient.
`;
// Beginner
export const printNTo1 = `# PRINT NUMBER FROM N TO 1

\`\`\`java
class Start{
    public static void main(String[] args) {
        printNumber(5);
    }

    static void printNumber(int n){
        if(n == 1){
            System.out.println(n);
            return;
        }

        System.out.println(n);
        printNumber(n-1);
    }
}
\`\`\`

![image.png](/img/re3.png)

# PRINT NUMBER FROM 1 TO N

\`\`\`java
class Start{
    public static void main(String[] args) {
        printNumber(5);
    }

    static void printNumber(int n){
        if(n == 1){
            System.out.println(n);
            return;
        }

        printNumber(n-1);
        System.out.println(n);

    }
}
\`\`\`
`;

export const factorial = `# FACTORIAL OF A NUMBER

\`\`\`java
class Start{
    public static void main(String[] args) {
        System.out.println(factorial(5));
    }

    static int factorial(int n){
        // Base Case
        if(n == 1 || n == 0){
            return 1;
        }

        return n * factorial(n-1);
    }
}
\`\`\`

![image.png](/img/re4.png)
`;
export const sumOfDigits = `# FIND SUM OF DIGITS USING RECURSION

\`\`\`java
class Start{
    public static void main(String[] args) {
        System.out.println(digitSum(1001));
    }

    static int digitSum(int n){
        if(n == 0){
            return 0;
        }

        return n % 10 + digitSum(n/10);
    }
}
\`\`\`

![image.png](/img/re5.png)
`;
export const sumOfNNumbers = `# PRINT SUM OF N NATURAL NUMBERS USING RECURSION

### CODE

\`\`\`java
// METHOD TO FIND SUM OF FIRST N NATURAL NUMBERS USING RECURSION
public static int nsum(int n) {
    // Base case: sum of 1 is 1
    if (n == 1) {
        return 1;
    }

    // Recursive case: n + sum of (n - 1)
    return n + nsum(n - 1);
}

\`\`\`

## CALL STACK TRACE

![alt text](img/re6.png)

### FUNCTION CALLS (GOING DEEPER INTO RECURSION)

\`\`\`java
nsum(5)
 → calls nsum(4)

    nsum(4)
     → calls nsum(3)

        nsum(3)
         → calls nsum(2)

            nsum(2)
             → calls nsum(1)

                nsum(1)
                 → returns 1

\`\`\`

### UNWINDING THE STACK (STARTING TO RETURN AND ADD)

\`\`\`java
nsum(2) returns 2 + 1 = 3
nsum(3) returns 3 + 3 = 6
nsum(4) returns 4 + 6 = 10
nsum(5) returns 5 + 10 = 15
\`\`\`

### FINAL RESULT

\`\`\`jsx
nsum(5) = 15
\`\`\`
`;

export const countZeros = `# COUNT NUMBER OF ZEROS

\`\`\`java
public class Start {

    public static void main(String[] args) {
        int num = 10203040;
        int count = countZeros(num, 0);  // Start count with 0
        System.out.println("Number of zeros: " + count);
    }

    static int countZeros(int num, int count) {
        // Base case
        if (num == 0) {
            return count;
        }

        // If last digit is zero, increment count
        if (num % 10 == 0) {
            return countZeros(num / 10, count + 1);
        }

        // Else, move to next digit without incrementing count
        return countZeros(num / 10, count);
    }
}

\`\`\`

# NUMBER OF STEP TO REDUCE A NUMBER TO ZERO

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Input → 14

Output → 6

\`\`\`java
class Start{

    public static void main(String[] args) {
        System.out.println(steps(8, 0));
    }

    static int steps(int n, int count){
        if(n == 0){
            return count;
        }

        if(n%2==0){
            return steps(n/2, count+1);
        }
        else{
            return steps(n-1, count+1);
        }
    }
}
\`\`\`
`;
export const nthFibonacci = `# PRINT THE NTH FIBONACCI NUMBER USING RECURSION

### CODE

\`\`\`java
// METHOD TO FIND THE NTH FIBONACCI NUMBER USING RECURSION
public static int fibonacci(int n) {
    // Base cases
    if (n == 0) return 0;
    if (n == 1) return 1;

    // Recursive case: sum of previous two Fibonacci numbers
    return fibonacci(n - 1) + fibonacci(n - 2);
}
\`\`\`

## CALL STACK TRACE

![image.png](/img/re7.png)

### FUNCTION CALLS (EXPANDING RECURSION TREE)

\`\`\`java
fibonacci(5)
 → fibonacci(4) + fibonacci(3)

    fibonacci(4)
     → fibonacci(3) + fibonacci(2)

        fibonacci(3)
         → fibonacci(2) + fibonacci(1)

            fibonacci(2)
             → fibonacci(1) + fibonacci(0)
             → returns 1 + 0 = 1

            fibonacci(1) → returns 1
         → returns 1 + 1 = 2

        fibonacci(2)
         → fibonacci(1) + fibonacci(0)
         → returns 1 + 0 = 1
     → returns 2 + 1 = 3

    fibonacci(3)
     → fibonacci(2) + fibonacci(1)

        fibonacci(2)
         → fibonacci(1) + fibonacci(0)
         → returns 1 + 0 = 1

        fibonacci(1) → returns 1
     → returns 1 + 1 = 2

 → returns 3 + 2 = 5
\`\`\`

### FINAL RESULT

\`\`\`java
fibonacci(5) = 5
\`\`\`

### FIBONACCI SERIES INDEXING NOTE

- fibonacci(0) = 0
- fibonacci(1) = 1
- fibonacci(2) = 1
- fibonacci(3) = 2
- fibonacci(4) = 3
- fibonacci(5) = 5
`;
export const checkSorted = `# CHECK IF ARRAY IS SORTED

\`\`\`jsx
class Start{

    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5,6,7,8};

        System.out.println(isSorted(arr, 0));
    }

    static boolean isSorted(int arr[], int index){
        if(index == arr.length-1){
            return true;
        }
        return arr[index] < arr[index+1] && isSorted(arr, index+1);
    }

}
\`\`\`
`;

export const firstOccurrence = `# FIND THE FIRST OCCURRENCE OF AN ELEMENT IN AN ARRAY USING RECURSION

### CODE

\`\`\`java
// METHOD TO FIND FIRST OCCURRENCE OF A TARGET IN AN ARRAY
public static int firstOccurrence(int[] arr, int index, int target) {
    // Base case: if index reaches the end, return -1 (not found)
    if (index == arr.length) {
        return -1;
    }

    // If current element matches the target, return the index
    if (arr[index] == target) {
        return index;
    }

    // Recursive call to check the next index
    return firstOccurrence(arr, index + 1, target);
}
\`\`\`

### SAMPLE CALL

\`\`\`java
int[] arr = {5, 3, 7, 3, 9, 3};
int target = 3;
System.out.println(firstOccurrence(arr, 0, target));  // Output: 1
\`\`\`

### RECURSION TREE FOR \`({5, 3, 7, 3}, 0, 3)\`

\`\`\`java
firstOccurrence(0)
│
├── arr[0] == 5 ≠ 3
│   └── firstOccurrence(1)
│       ├── arr[1] == 3 → match found
│       └── return 1
\`\`\`

### OUTPUT

\`\`\`
1 (index of first occurrence of 3)
\`\`\`
`;
export const xToN = `## PRINT X TO THE POWER N USING RECURSION

### CODE

\`\`\`java
// METHOD TO CALCULATE x^n USING RECURSION
public static int power(int x, int n) {
    // Base case: x^0 = 1
    if (n == 0) {
        return 1;
    }

    // Recursive case: x^n = x * x^(n-1)
    return x * power(x, n - 1);
}
\`\`\`

### SAMPLE CALL

\`\`\`java
System.out.println(power(2, 4));  // Output: 16
\`\`\`

### RECURSION TREE FOR (2,4)

\`\`\`
power(2, 4)
│
├── return 2 * power(2, 3)
│       ├── return 2 * power(2, 2)
│               ├── return 2 * power(2, 1)
│                       ├── return 2 * power(2, 0)
│                               └── return 1
\`\`\`

### UNWINDING (RETURN VALUES)

\`\`\`
power(2, 0) = 1
power(2, 1) = 2 * 1 = 2
power(2, 2) = 2 * 2 = 4
power(2, 3) = 2 * 4 = 8
power(2, 4) = 2 * 8 = 16
\`\`\`

### FINAL RESULT

\`\`\`
16
\`\`\`
`;

// Intermeduate
export const xToNOptimized = `# PRINT X TO THE POWER N USING OPTIMIZED RECURSION (EXPONENTIATION BY SQUARING)

### CODE

\`\`\`java
// METHOD TO CALCULATE x^n IN O(log n) TIME USING RECURSION
public static int power(int x, int n) {
    // Base case: x^0 = 1
    if (n == 0) {
        return 1;
    }

    // Recursive call
    int halfPower = power(x, n / 2);

    // If n is even: x^n = (x^(n/2))^2
    if (n % 2 == 0) {
        return halfPower * halfPower;
    }
    // If n is odd: x^n = x * (x^(n/2))^2
    else {
        return x * halfPower * halfPower;
    }
}
\`\`\`

### SAMPLE CALL

\`\`\`java
System.out.println(power(2, 5));  // Output: 32
\`\`\`

### RECURSION TREE FOR (2,5)

\`\`\`java
power(2, 5)
│
├── n is odd → return 2 * power(2, 2)^2
│   └── power(2, 2)
│       ├── n is even → return power(2, 1)^2
│       │   └── power(2, 1)
│       │       ├── n is odd → return 2 * power(2, 0)^2
│       │       │   └── power(2, 0) → return 1
│       │       └── returns 2 * 1 * 1 = 2
│       └── returns 2 * 2 = 4
└── returns 2 * 4 * 4 = 32
\`\`\`

### FINAL RESULT

\`\`\`
2^5 = 32
\`\`\`
`;
export const reversePalindrome = `# REVERSE A NUMBER & PALINDROME (2 WAYS IMP.)

Sometimes you need an additional variable in the argument then for it:

1. Use static variable.
2. make helper functions

## METHOD-1: USING STATIC VARIABLE

\`\`\`java
class Start{

    static int sum = 0;

    public static void reverse(int n){
        if(n == 0){
            return;
        }

        sum = sum * 10 + n % 10;
        reverse(n/10);
    }

    public static void main(String[] args) {
       reverse(1011);
       System.out.println(sum);
    }
}
\`\`\`

## METHOD-2: USING HELPER FUNCTION

\`\`\`java
class Start{

    public static int reverse(int n,  int sum){
        if(n == 0){
            return sum;
        }

        sum = sum * 10 + n % 10;
        return reverse(n/10, sum);
    }

    public static int reverseNum(int n){

        return reverse(n, 0);
    }
    public static void main(String[] args) {
       System.out.println(reverseNum(1011));

    }
}
\`\`\`

# PALINDROME NUMBER

\`\`\`java
class Start{

    public static int reverse(int n,  int sum){
        if(n == 0){
            return sum;
        }

        sum = sum * 10 + n % 10;
        return reverse(n/10, sum);
    }

    public static int reverseNum(int n){

        return reverse(n, 0);
    }

    static boolean palindrome(int n){
        return n == reverseNum(n);
    }

    public static void main(String[] args) {
       System.out.println(palindrome(101));
    }
}
\`\`\`
`;
export const linearSearch = `# LINEAR SEARCH VARIOUS SUBPROBLEMS (IMP.)

\`\`\`jsx
class Start{

    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5,6,7,8};

        System.out.println(linearSearch(arr, 4, 0));
    }

    static boolean linearSearch(int arr[], int target, int index){
       if(index == arr.length){
        return false;
       }

       return arr[index] == target || linearSearch(arr, target, index + 1);
    }
}
\`\`\`

## NEED INDEX OF TARGET

\`\`\`java
class Start{

    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5,6,7,8};

        System.out.println(linearSearch2(arr, 4, 0));
    }

    static int linearSearch2(int arr[], int target, int index){
        if(index == arr.length){
            return -1;
        }

        if(arr[index] == target){
            return index;
        }
        return linearSearch2(arr, target, index+1);
    }
}
\`\`\`

# RECURSIVE FUNCTION TO RETURN THE ARRAYLIST OF ALL THE INDEXES OF TARGET

## METHOD-1: USING STATIC VARIABLE

\`\`\`java
import java.util.ArrayList;

class Start{

    static ArrayList<Integer> list = new ArrayList<>();

    static ArrayList<Integer> indexes(int arr[], int target, int index){

        if(index == arr.length){
            return list;
        }

        if(arr[index] == target){
            list.add(index);
        }

        return indexes(arr, target, index+1);
    }

    public static void main(String[] args) {
        int arr[] = {1,2,3,4,2,5,1,2,6,7,8};

        System.out.println(indexes(arr, 2, 0));

    }
}
\`\`\`

## METHOD-2: PASSING ARRAYLIST IN PARAMETER

\`\`\`java
import java.util.ArrayList;

class Start{

    static ArrayList<Integer> indexes(int arr[], int target, int index, ArrayList<Integer> list){

        if(index == arr.length){
            return list;
        }

        if(arr[index] == target){
            list.add(index);
        }

        return indexes(arr, target, index+1, list);
    }

    public static void main(String[] args) {
        int arr[] = {1,2,3,4,2,5,1,2,6,7,8};

        System.out.println(indexes(arr, 2, 0, new ArrayList<Integer>()));

    }
}
\`\`\`

## METHOD-3: MAKING ARRAYLIST INSIDE EVERY FUNCTION

\`\`\`java
import java.util.ArrayList;

class Start{

    static ArrayList<Integer> indexes(int arr[], int target, int index){

        ArrayList<Integer> list = new ArrayList<>();
        if(index == arr.length){
            return list;
        }

        if(arr[index] == target){
            list.add(index);
        }

        ArrayList<Integer> ansFromBelowCalls = indexes(arr, target, index+1);

        list.addAll(ansFromBelowCalls);

        return list;
    }

    public static void main(String[] args) {
        int arr[] = {1,2,3,4,2,5,1,2,6,7,8};

        System.out.println(indexes(arr, 2, 0));

    }
}
\`\`\`
`;

export const binarySearchRotated = `# BINARY SEARCH IN ROTATE SORTED ARRAY (IMP.)

## SORTED ROTATED ARRAY BINARY SEARCH

A rotated sorted array is a sorted array that has been rotated (shifted) around a pivot. For example:

- Original sorted array: \`[0, 1, 2, 4, 5, 6, 7]\`
- Rotated at index 3: \`[4, 5, 6, 7, 0, 1, 2]\`

When you pick the midpoint of the array and compare \`nums[low]\`, \`nums[mid]\`, and \`nums[high]\`, one side (left or right) must be sorted. This is because:

- The array was originally sorted.
- Rotation doesn't disturb the internal order of the two resulting segments — it just reorders them.

\`\`\`java
class Start {

    static int searchInRotatedSorted(int arr[], int target, int start, int end) {

        if (start > end) {
            return -1;
        }

        int mid = start + (end - start) / 2;

        // Case 1: target found at mid
        if (arr[mid] == target) {
            return mid;
        }

        // Case 2: Left half is sorted
        if (arr[start] <= arr[mid]) {
            // If target lies within the left sorted half
            if (arr[start] <= target && target < arr[mid]) {
                // Search in the left half
                return searchInRotatedSorted(arr, target, start, mid - 1);
            } else {
                // Else, search in the right half
                return searchInRotatedSorted(arr, target, mid + 1, end);
            }
        }
        // Case 3: Right half is sorted
        else {
            // If target lies within the right sorted half
            if (arr[mid] < target && target <= arr[end]) {
                // Search in the right half
                return searchInRotatedSorted(arr, target, mid + 1, end);
            } else {
                // Else, search in the left half
                return searchInRotatedSorted(arr, target, start, mid - 1);
            }
        }
    }

    public static void main(String[] args) {
        int arr[] = {4, 5, 6, 7, 0, 1, 2};
        int target = 0;

        int result = searchInRotatedSorted(arr, target, 0, arr.length - 1);

        if (result != -1) {
            System.out.println("Target found at index: " + result);
        } else {
            System.out.println("Target not found in array.");
        }
    }
}
\`\`\`
`;
export const tilingProblem = `Given a floor of size \`2 × n\`, and tiles of size \`2 × 1\`, count the number of ways to tile the floor using these tiles.

Tiles can be placed either vertically or horizontally.

## HOW TO APPROACH SUCH PROBLEMS

### STEP-BY-STEP APPROACH TO RECURSION PROBLEMS:

1. Identify the input (parameters)

   → In this case: \`n\` (length of the floor)

2. Define the base cases clearly
   - \`n == 0\`: No space to fill → 1 way (do nothing)
   - \`n == 1\`: Only 1 vertical tile can fit → 1 way
3. Break the problem into smaller subproblems (recursive relation)

   Ask: \`What choices do I have at any step?\`

   - Place 1 vertical tile → reduces problem to \`n-1\`
   - Place 2 horizontal tiles side-by-side → reduces problem to \`n-2\`

4. Write recurrence relation

   \`\`\`
   ways(n) = ways(n - 1) + ways(n - 2)
   \`\`\`

5. Write the recursive code

### CODE

\`\`\`java
// METHOD TO COUNT NUMBER OF WAYS TO TILE 2xN FLOOR WITH 2x1 TILES
public static int tiling(int n) {
    // BASE CASES
    if (n == 0 || n == 1) {
        return 1;
    }

    // RECURSIVE CASE
    return tiling(n - 1) + tiling(n - 2);
}
\`\`\`

### SAMPLE CALL

\`\`\`java
System.out.println(tiling(4));  // Output: 5
\`\`\`

### TIP FOR SIMILAR RECURSION PROBLEMS

- ASK: What choices do I have at every step?
- RECURSION = Try all choices + move to subproblem
- USE BASE CASES to stop recursion.
- IF OVERLAPPING SUBPROBLEMS OCCUR, think about using memoization (DP).
`;

// Sorting
export const patternsBubbleSelection = ``;
export const mergeSort = ``;
// Subset Patterns
export const subsetSubsequence = ``;
export const sumK = ``;
export const combinationalSum1 = ``;
export const permutations = ``;
export const recursionTrees = ``;
