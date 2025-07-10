# WHY ARRAY INDEX STARTS FROM 0 AND NOT 1

## THINK LIKE A COMPUTER

A computer stores data in memory (RAM), where each location has a unique address.

An array is stored in contiguous (continuous) memory blocks, and each element takes a fixed amount of space depending on its data type.

### EXAMPLE: ARRAY OF INTEGERS

Let's say:

```java
int[] arr = new int[5];
```

Assume:

- Each `int` takes 4 bytes
- Array starts at memory address 1000

### MEMORY LAYOUT:

| Index | Value | Address |
| ----- | ----- | ------- |
| 0     | ?     | 1000    |
| 1     | ?     | 1004    |
| 2     | ?     | 1008    |
| 3     | ?     | 1012    |
| 4     | ?     | 1016    |

### HOW COMPUTERS ACCESS AN ELEMENT:

To get `arr[i]`, the CPU uses:

```
Address = Base_Address + (i × Size_of_Data_Type)
```

In our case:

```
Address = 1000 + (i × 4)
```

### NOW, IMAGINE IF INDEX STARTED FROM 1

To access the first element, you’d need:

```
Address = 1000 + (1 × 4) = 1004 ❌
```

But we want the first element to be at `1000`, not `1004`.

So this would skip the first memory slot, which is wasteful and confusing.

### WHY CAN’T WE MAKE FORMULA AS (I - 1) INSTED OF I AND USE 1 BASED INDEXING

We can make the 1 based indexing too if we in address does something like this:

```jsx
Address = Base_Address + ((i - 1) × Size_of_Data_Type)
```

But unnecessary introducing the subtraction will lead to more computation so we don’t consider it.

### BY STARTING AT 0:

For `i = 0`:

```
Address = 1000 + (0 × 4) = 1000
```

Perfect.

The first element is right at the base address.

# SIZE OF DIFFERENT DATATYPES

| Data Type | Size (in bytes)        | Default Value | Range                                                   |
| --------- | ---------------------- | ------------- | ------------------------------------------------------- |
| `byte`    | 1 byte (8 bits)        | `0`           | -128 to 127                                             |
| `short`   | 2 bytes (16 bits)      | `0`           | -32,768 to 32,767                                       |
| `int`     | 4 bytes (32 bits)      | `0`           | -2,147,483,648 to 2,147,483,647                         |
| `long`    | 8 bytes (64 bits)      | `0L`          | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| `float`   | 4 bytes (32 bits)      | `0.0f`        | Approx ±3.4e38 (7 decimal digits precision)             |
| `double`  | 8 bytes (64 bits)      | `0.0d`        | Approx ±1.8e308 (15 decimal digits precision)           |
| `char`    | 2 bytes (16 bits)      | `\u0000`      | Unicode characters (0 to 65,535)                        |
| `boolean` | ~1 bit (JVM-dependent) | `false`       | `true` or `false`                                       |
