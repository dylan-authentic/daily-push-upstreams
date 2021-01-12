// This program answers the hour glass sum challenge from hackerrank in which you are given a matrix
// and must calculate the maximum sum that meets the following format within the matrix:
/* a b c
     d
   e f g
*/
// Link to problem: https://www.hackerrank.com/challenges/2d-array/problem

// Solution
static int hourglassSum(int[][] arr) {
        int maxSum = -70;
        int currentSum = 0;
        for(int i = 0; i < 4; i++) {
            for(int j = 0; j < 4; j++){
                int topNum = arr[i][j] + arr[i][j+1] + arr[i][j+2];
                int middleNum = arr[i+1][j+1];
                int bottomNum = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
                currentSum = topNum + middleNum + bottomNum;
                if(currentSum > maxSum) {
                    maxSum = currentSum;
                }
            }
        }  
        return maxSum;
    }

