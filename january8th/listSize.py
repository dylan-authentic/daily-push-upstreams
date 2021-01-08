# this example shows the extra capacity of a dynamic array
# even when the length of an array is 0, the underlying representation still holds 72 bytes for data to be appended
# when data is appended by 1, the overall size of the array increases to allow for more values to be added
import sys
try:
    n = int(sys.argv[1])
except:
    n = 100

data = []
for element in range(n):
    a = len(data) # number of elements in array
    b = sys.getsizeof(data) # actual size of array in bytes
    print('Length : {0:3d}; Size in bytes : {1:4d}'.format (a, b))
    data.append(None)


