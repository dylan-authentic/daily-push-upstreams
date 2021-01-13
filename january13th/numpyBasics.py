# NumPy Exercises
import numpy as np

# Q1: Create a 1D array of numbers from 0 to 9
q1 = np.arange(10)
print(q1)

# Q2: Create a 3 by 3 numpy array of all Trues
q2 = np.full((3, 3), True, dtype=bool)
print(q2)

# ** Q3: Extract all odd numbers from arr
arr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
arr2 = arr[arr % 2 == 1]
print(arr2)

# ** Q4: Replace all odd numbers in arr with -1
arr3 = arr
arr3[arr3 % 2 == 1] = -1
print(arr3)

# ** Q5: Replace all odd numbers in arr with -1 without changing arr
arr4 = np.arange(10)
out = np.where(arr4 % 2 == 1, -1, arr4)

# ** Q6: Convert a 1D array to a 2D array with 2 rows
arr5 = np.arange(10)
arr5.reshape(2, -1)  # Setting to -1 automatically decides the number of cols