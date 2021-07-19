
function qbf(arr, num = 0, word = '', words=[]) {
    //escape
    if(num == arr.length)
    {
        words.push(word)
        return words
    }
    for(let next of arr[num])
    {
        qbf(arr, num+1, word+' '+next, words)
    }
    return words
}

arr = [
    ["quick", "fast"],
    ["brown", "slender"],
    ["fox", "dog"]
]

console.log(qbf(arr));