//Combine Sort

arr1 = [1,4,6,7]
arr2 = [2,3,6,8]

function combineArrays(arr1, arr2)
{
    var x = 0;
    var y = 0;
    var arr3 = [];
    while(x < arr1.length && y < arr2.length)
    {
        if(arr1[x] < arr2[y])
        {
            arr3.push(arr1[x]);
            x++;
        }
        else
        {
            arr3.push(arr2[y]);
            y++;
        }
    }
    while(x < arr1.length)
    {
        arr3.push(arr1[x]);
        x++;
    }
    while(y < arr2.length)
    {
        arr3.push(arr2[y]);
        y++;
    }
        
    return arr3;
}

console.log(combineArrays(arr1, arr2))

//Merge Sort
//Break apart the values and bring them back together
function MergeSort(array) {
    if (array.length <= 1) 
    {
        return array
    }
    var left = array.slice(0, Math.floor(array.length / 2))
    var right = array.slice(Math.floor(array.length / 2))
    return combineArrays(MergeSort(left), MergeSort(right))
}

newArr = [90, 7, 32, 3, 80, 65]
console.log(MergeSort(newArr));