// Exercise those logic muscles!
// Use data structures (arrays, objects) effectively to complete the challenge.

// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.

// HINT: Keep in mind that you may use arrays and objects to keep your information organized!

// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.

// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

var leftBraces="([{";
var rightBraces=")]}";

function BracesValid(braces)
{
    var valid = true;
    var stack = [];
    for(var i = 0; i < braces.length && valid; i++) 
    {
        var brace=braces[i];
        if(leftBraces.includes(brace)) 
            stack.push(brace);
        else 
        {
        var leftBrace = stack.pop();
        if(leftBrace == undefined) valid = false;
        else if(leftBraces.indexOf(leftBrace)!=rightBraces.indexOf(brace)) valid = false;
        }
    }
    if(stack.length) valid = false;
    return valid;
}

console.log(BracesValid("{()}"));
console.log(BracesValid("{(}"));
console.log(BracesValid("{{{}}}"));