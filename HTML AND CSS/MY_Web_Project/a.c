#include <stdio.h>

// Function to multiply two matrices
void multiplyMatrices(int firstMatrix[][10], int secondMatrix[][10], int result[][10], int rowFirst, int columnFirst, int rowSecond, int columnSecond) {
    // Initializing elements of matrix mult to 0
    for(int i = 0; i < rowFirst; ++i) {
        for(int j = 0; j < columnSecond; ++j) {
            result[i][j] = 0;
        }
    }

    // Multiplying firstMatrix and secondMatrix and storing in result
    for(int i = 0; i < rowFirst; ++i) {
        for(int j = 0; j < columnSecond; ++j) {
            for(int k = 0; k < columnFirst; ++k) {
                result[i][j] += firstMatrix[i][k] * secondMatrix[k][j];
            }
        }
    }
}

// Function to display a matrix
void displayMatrix(int matrix[][10], int row, int column) {
    for(int i = 0; i < row; ++i) {
        for(int j = 0; j < column; ++j) {
            printf("%d\t", matrix[i][j]);
        }
        printf("\n");
    }
}

int main() {
    int firstMatrix[10][10], secondMatrix[10][10], result[10][10], rowFirst, columnFirst, rowSecond, columnSecond;

    printf("Enter rows and columns for the first matrix: ");
    scanf("%d %d", &rowFirst, &columnFirst);

    printf("Enter elements of matrix 1:\n");
    for(int i = 0; i < rowFirst; ++i) {
        for(int j = 0; j < columnFirst; ++j) {
            scanf("%d", &firstMatrix[i][j]);
        }
    }

    printf("Enter rows and columns for the second matrix: ");
    scanf("%d %d", &rowSecond, &columnSecond);

    // Taking input until valid dimensions are entered
    while (columnFirst != rowSecond) {
        printf("Error! column of the first matrix not equal to row of the second.\n");

        printf("Enter rows and columns for the second matrix: ");
        scanf("%d %d", &rowSecond, &columnSecond);
    }

    printf("Enter elements of matrix 2:\n");
    for(int i = 0; i < rowSecond; ++i) {
        for(int j = 0; j < columnSecond; ++j) {
            scanf("%d", &secondMatrix[i][j]);
        }
    }

    multiplyMatrices(firstMatrix, secondMatrix, result, rowFirst, columnFirst, rowSecond, columnSecond);

    // Displaying the multiplication of two matrix
    printf("\nOutput Matrix:\n");
    displayMatrix(result, rowFirst, columnSecond);

    return 0;
}
