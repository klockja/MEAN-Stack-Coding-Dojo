function selectionSort(arr) {
    var mini = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        var mini = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[mini]) {
            mini = j;
            }
        }
        [arr[mini], arr[i]] = [arr[i], arr[mini]];
    }
    return arr;
}

input = [6, 4, 3, 8, 2, 7, 1]
console.log(selectionSort(input))