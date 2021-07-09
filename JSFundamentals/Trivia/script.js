$.get("https://opentdb.com/api.php?amount=5&category=23&difficulty=medium&type=boolean", getTrivia)
//data is the data we get from the trivia API.
function getTrivia(data) {
	var count = 0;
	for (let i = 0; i < data.results.length; i++) {
		question = data.results[i].question
		answer = data.results[i].correct_answer
		if (count % 5 == 0) {
			$("#triviaBox").append(`<div class="columns has-background-dark" id="${count}"></div>`);
			var lastelem = count;
		}
        console.log(question)
		$(`#${lastelem}`).append(
            `<div class="column is-one-fifth"><div class="box"><p>${question}</p><ul><li>True</li><li>False</li></ul><div class="box answer has-background-success" style="display: none;">${answer}</div></div></div>`);
		count++
	}
}

function showAnswers() {
	$(".answer").show();
}