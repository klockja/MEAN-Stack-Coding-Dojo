function partitionSort(arr, pivotIndex, leftCursor = 0, rightCursor = arr.length-1)
{
    console.log(arr[pivotIndex]);
    if(leftCursor == rightCursor){}
    
    if(rightCursor == pivotIndex)
    {
        rightCursor --;
        console.log(rightCursor);
    }
    if(arr[pivotIndex] < arr[rightCursor])
    {
        var temp = arr[rightCursor];
        arr.push(temp)
        for(var i = rightCursor; i < arr.length; i++)
        {

        }
        arr[rightCursor] = arr[pivotIndex];
        arr[pivotIndex] = temp;
        pivotIndex--;
        console.log("Pivot index = " + pivotIndex + " Value = " + arr[pivotIndex]);
    }
    return partitionSort(arr, pivotIndex, leftCursor, rightCursor)
}



arr1 = [6,4,3,7,5]

console.log(partitionSort(arr1, 4));
