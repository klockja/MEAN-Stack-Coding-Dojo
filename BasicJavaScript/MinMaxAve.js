// Objectives:

//     Iterate over an array
//     Construct a string
//     Use the return statement

// Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.

// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function Iterate(arr)
{
    for (var i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
    }
}

function findMin(arr)
{
    minNum = arr[0];
    for (var i = 0; i < arr.length; i++)
    {
        if(arr[i] < minNum)
        {
            minNum = arr[i];
        }
    }
    return minNum;
}

function findMax(arr)
{
    maxNum = arr[0];
    for (var i = 0; i < arr.length; i++)
    {
        if(arr[i] > maxNum)
        {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

function findAverage(arr)
{
    average = 0;
    for (var i = 0; i < arr.length; i++)
    {
        average += arr[i];
    }
    return (average / arr.length);
}

function maxMinAvg(arr)
{
    console.log("The minimum is " + findMin(arr) + ", the maximum is " + findMax(arr) + ", and the average is " + findAverage(arr) + ".")
}

var arr1 = [1, 2, 3, 4];
maxMinAvg(arr1);
