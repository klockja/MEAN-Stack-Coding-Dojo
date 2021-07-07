function binarySearch(arr, value, partial = [])
{
    if(partial.length === 0)
    {
        partial = arr;
        console.log("Set partial to array.");
    }
    if(arr.length < 1)
    {
        return false;
    }
    console.log("Partial = " + partial);
    mid = Math.round(partial.length/2);
    console.log("Middle = " + mid);

    if(partial[partial.length-1] === value || partial[0] === value || partial[mid] === value)
    {
        console.log("Found the value.");
        return true;
    }
    else if(partial[mid] < value)
    {
        console.log("The value is greater than the middle.");
        partial = partial.slice(mid, partial.length - 1);
        return binarySearch(arr, value, partial);
    }
    else if(partial[mid] > value)
    {
        console.log("The value is less than the middle.");
        partial = partial.slice(0, mid);
        return binarySearch(arr, value, partial);
    }
}
newArr = [0,1,2,3,4,5,6,7,8,9,10]

console.log(binarySearch(newArr, 3));