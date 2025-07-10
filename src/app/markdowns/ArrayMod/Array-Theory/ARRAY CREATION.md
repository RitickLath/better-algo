# WHAT DOES "CREATING AN ARRAY" MEAN?

Array creation in Java involves:

1. Declaring an array variable.
2. Allocating memory to hold a fixed number of elements.
3. (Optional) Initializing the array elements with specific values.

In Java, arrays are objects stored in heap memory, and the variable holds a reference to the array.

## 1. DECLARING AN ARRAY

### SYNTAX:

```java
dataType[] arrayName;
```

or

```java
dataType arrayName[];
```

### EXAMPLES:

```java
int[] numbers;      // Preferred form
double[] prices;
String[] names;

int values[];       // Also valid but less preferred
```

This only tells the compiler the type of array; no memory is allocated yet.

## 2. ALLOCATING MEMORY (CREATING ARRAY OBJECT)

To actually create the array (allocate memory), use the `new` keyword with the desired size.

### SYNTAX:

```java
arrayName = new dataType[size];
```

### FULL DECLARATION + CREATION EXAMPLE:

```java
int[] numbers = new int[5];      // Creates an array of 5 integers
double[] prices = new double[3]; // Creates an array of 3 doubles
String[] names = new String[4];  // Creates an array of 4 Strings
```

At this point:

- Memory is allocated.
- All elements are filled with default values:
  - `0` for numbers
  - `false` for boolean
  - `null` for objects (like `String`)

## 3. DECLARATION AND CREATION IN ONE LINE

### SYNTAX:

```java
dataType[] arrayName = new dataType[size];
```

### EXAMPLE:

```java
char[] grades = new char[5];
boolean[] flags = new boolean[10];
```

This combines the declaration and creation steps into one.

## 4. ARRAY CREATION WITH INITIAL VALUES

If you already know the values at creation time, use array initializer syntax (no `new` keyword needed).

### SYNTAX:

```java
dataType[] arrayName = {value1, value2, value3, ...};
```

### EXAMPLES:

```java
int[] ages = {18, 21, 25, 30};
String[] colors = {"Red", "Green", "Blue"};
char[] vowels = {'A', 'E', 'I', 'O', 'U'};
```

This both creates and initializes the array at once. The size is automatically determined based on the number of values.

# SUMMARY OF ARRAY CREATION

| Method                    | Description                              | Example                      |
| ------------------------- | ---------------------------------------- | ---------------------------- |
| Declaration only          | No memory allocated                      | `int[] nums;`                |
| Declaration + Creation    | Allocates fixed size with default values | `int[] nums = new int[5];`   |
| Declaration + Init values | Creates and fills with specific values   | `int[] nums = {1, 2, 3, 4};` |

![image.png](attachment:d7abd6dd-ebc3-45db-95bf-faef4a905f5f:image.png)
