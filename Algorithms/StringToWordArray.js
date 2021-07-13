function StringToWordArray(str)
{
    var words = []
    var wordStart = 0;
    for (var i = 0; i < str.length; i++)
    {
        if( (str.charAt(i) === ' ' || str.charAt(i) === ',' || str.charAt(i) === '.' || str.charAt(i) === '!' || str.charAt(i) === '?'))
        {
            if(str.slice(wordStart, i).length > 0)
            {
                words.push(str.slice(wordStart, i));
            }
            wordStart = i+1;
        }
    }
    if(str.slice(wordStart, str.length).length > 0)
    {
        words.push(str.slice(wordStart, i));
    }

    return words;
}

console.log(StringToWordArray("Life is not a drill!"));

// function ReverseWordOrder(str)
// {
//     var words = StringToWordArray(str);
//     newOrder = [];
//     for(var i = words.length - 1; i >= 0; i--)
//     {
//         newOrder.push(words[i]);
//     }
//     return newOrder;
// }
// console.log(ReverseWordOrder("Life is not a drill!"));