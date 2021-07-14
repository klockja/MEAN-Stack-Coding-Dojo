function RotateString(str, num = 1) 
{
    if( num > str.length)
    {
        return str;
    }
    
    startString = "";
    endString = "";

    for(var i = 0; i < str.length - num; i++)
    {
        startString += str[i];
    }
    for(var i = str.length - num; i < str.length; i++)
    {
        endString += str[i];
    }
    return newString = endString + startString;
}

function isRotation(str1, str2) 
{
    if(str1.length != str2.length)
    {
        return false;
    }
    for (let i = 0; i < str2.length; i++) 
    {
        if (str2[i] == str1[0]) 
        {
            var isMatch = true;
            for (var p = 1; p + i < str2.length; p++) 
            {
                if (str1[p] != str2[i+p]) 
                {
                    isMatch = false;
                    break;
                }
            }
            for (var k = 0; p + k < str1.length; k++) 
            {
                if (str1[p+k] != str2[k]) 
                {
                    isMatch = false;
                    break
                }
            }
            if(isMatch)
            {
                return true;
            }
        }
    }
    return false;
}

var string = "Boris Godunov"
console.log(RotateString(string, 5));
console.log(isRotation(string, RotateString(string, 5)))

