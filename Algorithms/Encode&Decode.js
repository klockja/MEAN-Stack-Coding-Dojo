function encode(input) {
    var newstr = []
    var counter = 1
    for (i=0; i < input.length; i++) {
//        console.log(input[i])
        let counter = 1
        for (j=i+1; j < input.length; j++) {
            if (input[i] == input[j]) {
//                console.log("match", input[i], input[j])
                counter = counter + 1
                i = i + 1
//                console.log("counter",counter, input[i])
            }
            else {
//                console.log("else",input[i],input[j])
                break
            }
        }
        newstr += input[i] + counter
//        console.log("newstr",newstr)
    }
    return newstr
}

function decode(input) {
    var newstr = ""
    for (i=0; i < input.length; i++) {
            for (j = 0; j < parseInt(input[i]); j++)
            newstr += input[i-1]
    }
    return newstr
}

console.log("start")
input = "aaaabbcddd"
input2 = "a4b2c1d3"

console.log(decode(input2))

//console.log(encode(input))

function encode(input)
{
    let newStr = "";
    for (let i = 0; i < input.length; i++)
    {
        var count = 1;
        var j = i;
        while(input[i] == input[j+1]) {
			count++
			j++
		}
        newStr += `${input[i]}${count}`
		i = j;
	}
	return newStr;
}

var str = "aaabbbbbccccccc"

console.log(encode(str));

function strDecode(input) {
	let newStr = ""
	// Number we get next to character
	var num = 0;
	// count to handle sequential numbers
	var count = 0;
	for (let i = 0; i < input.length - 1; i+=2) {
		if (isNaN(parseInt(input[i+1]))) {
			console.log(`Not a number ${input[i+1]}`)
		// Check for sequential numbers
		} else if (!isNaN(parseInt(input[i+2]))) {
			let somestr = input[i+1] + input[i+2]
			// convert what we know to be a number from a string
			num = parseInt(somestr);
			count++
		// else we are working with a single number
		} else {
			num = parseInt(input[i+1]);
		}

		// add character num of times to end string
		if (num != 0) {
			newStr += input[i].repeat(num)
		}

		num = 0;
		// if incremented by sequential check
		i += count
	}
	return newStr;
}

console.log(strDecode(strEncode(str)))