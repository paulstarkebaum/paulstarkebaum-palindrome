module.exports = Phrase;

String.prototype.reverse = function () {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object,
function Phrase(content) {	
	this.content = content;

	// returns lowercase letters, filters nonletters
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	this.letters = function letters() {
		const lettersRegEx = /[a-z]/gi;
		return (this.content.match(lettersRegEx) || []).join("");
	}

	// // this.palindrome = function palindrome() {
	// 	const empty = "";
	// 	if (this.content === empty) {
	// 		this.content = "hello";
	// 		return false;
	// 	} else {
	// 	return this.processedContent() === this.processedContent().reverse();		
	// 	}
	}


