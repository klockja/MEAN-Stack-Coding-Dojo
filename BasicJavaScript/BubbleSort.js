function bubbleSort(arr)
{
    if(arr.length < 1)
        return arr;
    
    var temp;

    for (var i = 0; i < arr.length - 1; i++)
    {
        for (var j = 0; j < arr.length - 1; j++)
        {
            if(arr[j] > arr[j+1])
            {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

newArr = [6, 5, 4, 3, 2, 1]

console.log(newArr);
console.log(bubbleSort(newArr));