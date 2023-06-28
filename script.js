
//Object Array to hold quotes, sources, citaitons and years
var quotes = [
	{
		quote: "Code is like humor. When you have to explain it, it's bad.",
		source: "Cory House"
	},
	{
		quote: "Programming isn't about what you know; it's about what you can figure out.",
		source: "Chris Pine"
	},
	{
		quote: "Software is a great combination of artistry and engineering.",
		source: "Bill Gates"
	},
	{
		quote: "The best way to predict the future is to invent it.",
		source: "Alan Kay"
	},
	{
		quote: "The function of good software is to make the complex appear to be simple.",
		source: "Grady Booch"
	},
	{
		quote: "Talk is cheap. Show me the code.",
		source: "Linus Torvalds"
	},
	{
		quote: "A language that doesn't affect the way you think about programming is not worth knowing.",
		source: "Alan Perlis"
	},
	{
		quote: "Code never lies; comments sometimes do.",
		source: "Ron Jeffries"
	},
	{
		quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		source: "Martin Fowler"
	},
	{
		quote: "The most disastrous thing that you can ever learn is your first programming language.",
		source: "Alan Kay"
	},
	{
		quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
		source: "Edsger Dijkstra"
	},
	{
		quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
		source: "Harold Abelson"
	},
	{
		quote: "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.",
		source: "Antoine de Saint-Exupery"
	},
	{
		quote: "Simplicity is the soul of efficiency.",
		source: "Austin Freeman"
	},
	{
		quote: "Premature optimization is the root of all evil.",
		source: "Donald Knuth"
	},
	{
		quote: "Programming is the art of telling another human what one wants the computer to do.",
		source: "Donald Knuth"
	},
	{
		quote: "The best code is no code at all.",
		source: "Jeff Atwood"
	},
	{
		quote: "Programming can be fun, so can cryptography; however, they should not be combined.",
		source: "Kreitzberg and Shneiderman"
	},
	{
		quote: "Java is to JavaScript what car is to Carpet.",
		source: "Chris Heilmann"
	},
	{
		quote: "In order to understand recursion, one must first understand recursion.",
		source: "Anonymous"
	},
	{
		quote: "Controlling complexity is the essence of computer programming.",
		source: "Brian Kernighan"
	},
	{
		quote: "The computer was born to solve problems that did not exist before.",
		source: "Bill Gates"
	},
	{
		quote: "One of the best programming skills you can have is knowing when to walk away for a while.",
		source: "Oscar Godson"
	},
	{
		quote: "Coding is not just code, that is a live thing to serve everyone!",
		source: "Mehmet Murat ildan"
	},
	{
		quote: "Software, in the end, is a human endeavor.",
		source: "Max Kanat-Alexander"
	},
	{
		quote: "It’s not a bug – it’s an undocumented feature.",
		source: "Anonymous"
	},
	{
		quote: "The Internet: where men are men, women are men, and children are FBI agents.",
		source: "Anonymous"
	},
	{
		quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
		source: "Anonymous"
	},
	{
		quote: "There are two ways to write error-free programs; only the third one works.",
		source: "Alan J. Perlis"
	},
	{
		quote: "It's not a bug, it's an undocumented feature!",
		source: "Anonymous"
	},
	{
		quote: "To iterate is human, to recurse divine.",
		source: "L. Peter Deutsch"
	},
	{
		quote: "There are only two hard things in computer science: cache invalidation and naming things.",
		source: "Phil Karlton"
	},
	{
		quote: "If you think your users are idiots, only idiots will use it.",
		source: "Linus Torvalds"
	},
	{
		quote: "Walking on water and developing software from a specification are easy if both are frozen.",
		source: "Edward V. Berard"
	},
	{
		quote: "First, solve the problem. Then, write the code.",
		source: "John Johnson"
	},
	{
		quote: "Don't comment bad code; rewrite it.",
		source: "Brian W. Kernighan"
	},
	{
		quote: "Good software, like good wine, takes time.",
		source: "Joel Spolsky"
	},
	{
		quote: "If you automate a mess, you get an automated mess.",
		source: "Rod Michael"
	},
	{
		quote: "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.",
		source: "Seymour Cray"
	},
	{
		quote: "The code is where the truth is.",
		source: "Anonymous"
	},
	{
		quote: "The only way to learn a new programming language is by writing programs in it.",
		source: "Dennis Ritchie"
	},
	{
		quote: "Code generation, like drinking alcohol, is good in moderation.",
		source: "Alex Lowe"
	},
	{
		quote: "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
		source: "Tom Cargill"
	},
	{
		quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
		source: "Anonymous"
	},
	{
		quote: "If you can't explain it simply, you don't understand it well enough.",
		source: "Albert Einstein"
	},
	{
		quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
		source: "Bill Gates"
	},
	{
		quote: "Hardware is easy to protect: lock it in a room, chain it to a desk, or buy a spare. Information poses more of a problem.",
		source: "Bruce Schneier"
	},
	{
		quote: "First, solve the problem. Then, write the code.",
		source: "John Johnson"
	},
	{
		quote: "Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function.",
		source: "John Carmack"
	},
	{
		quote: "A computer program does what you tell it to do, not what you want it to do.",
		source: "Anonymous"
	},
	{
		quote: "If you automate a mess, you get an automated mess.",
		source: "Rod Michael"
	},
	{
		quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
		source: "Patrick McKenzie"
	},
	{
		quote: "In programming, the hard part isn't solving problems, but deciding what problems to solve.",
		source: "Paul Graham"
	},
	{
		quote: "The best error message is the one that never shows up.",
		source: "Thomas Fuchs"
	},
	{
		quote: "The most important property of a program is whether it accomplishes the intention of its user.",
		source: "C.A.R. Hoare"
	},
	{
		quote: "The best code is no code at all.",
		source: "Jeff Atwood"
	},
	{
		quote: "It's not a bug, it's an undocumented feature!",
		source: "Anonymous"
	},
	{
		quote: "If it's a good idea, go ahead and do it. It is much easier to apologize than it is to get permission.",
		source: "Grace Hopper"
	},
	{
		quote: "One man's crappy software is another man's full-time job.",
		source: "Jessica Gaston"
	},
	{
		quote: "You can't have great software without a great team, and most software teams behave like dysfunctional families.",
		source: "Jim McCarthy"
	},
	{
		quote: "Without requirements or design, programming is the art of adding bugs to an empty text file.",
		source: "Louis Srygley"
	},
	{
		quote: "The computer was born to solve problems that did not exist before.",
		source: "Bill Gates"
	},
	{
		quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
		source: "Anonymous"
	},
	{
		quote: "A program that produces incorrect results twice as fast is infinitely slower.",
		source: "John Osterhout"
	},
	{
		quote: "The only way to learn a new programming language is by writing programs in it.",
		source: "Dennis Ritchie"
	},
	{
		quote: "The most important single aspect of software development is to be clear about what you are trying to build.",
		source: "Bjarne Stroustrup"
	},
	{
		quote: "There are only two kinds of programming languages: those people always bitch about and those nobody uses.",
		source: "Bjarne Stroustrup"
	},
	{
		quote: "It’s not a bug – it’s an undocumented feature.",
		source: "Anonymous"
	},
	{
		quote: "The best thing about a boolean is even if you are wrong, you are only off by a bit.",
		source: "Anonymous"
	},
	{
		quote: "The computer was born to solve problems that did not exist before.",
		source: "Bill Gates"
	},
	{
		quote: "One of my most productive days was throwing away 1,000 lines of code.",
		source: "Ken Thompson"
	},
	{
		quote: "When debugging, novices insert corrective code; experts remove defective code.",
		source: "Richard Pattis"
	},
	{
		quote: "You've baked a really lovely cake, but then you've used dog shit for frosting.",
		source: "Steve Jobs"
	},
	{
		quote: "The code you write makes you a programmer. The code you delete makes you a good one. The code you don't have to write makes you a great one.",
		source: "Mario Fusco"
	},
	{
		quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
		source: "Linus Torvalds"
	},
	{
		quote: "The art of programming is the art of organizing complexity, of mastering multitude and avoiding its bastard chaos as effectively as possible.",
		source: "Edsger Dijkstra"
	},
	{
		quote: "The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency.",
		source: "Bill Gates"
	},
	{
		quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
		source: "Edsger Dijkstra"
	},
	{
		quote: "Don't worry if it doesn't work right. If everything did, you'd be out of a job.",
		source: "Mosher's Law of Software Engineering"
	},
	{
		quote: "Testing can only prove the presence of bugs, not their absence.",
		source: "Edsger Dijkstra"
	},
	{
		quote: "Programming is not about typing, it's about thinking.",
		source: "Rich Hickey"
	},
	{
		quote: "A language that doesn't affect the way you think about programming is not worth knowing.",
		source: "Alan Perlis"
	},
	{
		quote: "Make it work, make it right, make it fast.",
		source: "Kent Beck"
	},
	{
		quote: "The sooner you start to code, the longer the program will take.",
		source: "Roy Carlson"
	},
	{
		quote: "Before software can be reusable it first has to be usable.",
		source: "Ralph Johnson"
	},
	{
		quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
		source: "Harold Abelson"
	},
	{
		quote: "The best way to predict the future is to invent it.",
		source: "Alan Kay"
	},
	{
		quote: "Programming is the art of telling another human what one wants the computer to do.",
		source: "Donald Knuth"
	},
	{
		quote: "There is no programming language—no matter how structured—that will prevent programmers from making bad programs.",
		source: "Larry Flon"
	},
	{
		quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		source: "Martin Fowler"
	},
	{
		quote: "If you can't write it down in English, you can't code it.",
		source: "Peter Halpern"
	},
	{
		quote: "The most important skill a programmer can have is the ability to read.",
		source: "Anonymous"
	},
	{
		quote: "Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry.",
		source: "Ted Nelson"
	},
	{
		quote: "You can't trust code that you did not totally create yourself.",
		source: "Ken Thompson"
	},
	{
		quote: "Good code is its own best documentation.",
		source: "Steve McConnell"
	},
	{
		quote: "The art of debugging is figuring out what you really told your program to do instead of what you thought you told it to do.",
		source: "Andrew Singer"
	},
	{
		quote: "Programs must be written for people to read, and only incidentally for machines to execute.",
		source: "Harold Abelson"
	},
	{
		quote: "The function of good software is to make the complex appear to be simple.",
		source: "Grady Booch"
	},
	{
		quote: "Premature optimization is the root of all evil.",
		source: "Donald Knuth"
	},
	{
		quote: "Simplicity is the soul of efficiency.",
		source: "Austin Freeman"
	},
	{
		quote: "The best code is no code at all.",
		source: "Jeff Atwood"
	},
	{
		quote: "Software is a great combination of artistry and engineering.",
		source: "Bill Gates"
	},
	{
		quote: "Talk is cheap. Show me the code.",
		source: "Linus Torvalds"
	},
	{
		quote: "Code never lies; comments sometimes do.",
		source: "Ron Jeffries"
	},
	{
		quote: "The most disastrous thing that you can ever learn is your first programming language.",
		source: "Alan Kay"
	}
];

const darkBlueShades = [
	'#121B26',
	'#15232D',
	'#1A2E39',
	'#1F3943',
	'#24444E',
	'#295058',
	'#2D5B63',
	'#32666D',
	'#377177',
	'#3C7C82'
];

function getRandomColor() {
	var randomNumber = Math.floor(Math.random() * (darkBlueShades.length));
	var randomColor = darkBlueShades[randomNumber];
	return randomColor;
}

function changeBackgroundColor(backgroundColor) {
	document.body.style.backgroundColor = backgroundColor;
}

function changeButtonColor(buttonColor) {
	document.getElementById("loadQuote").style.backgroundColor = buttonColor;
}

function getRandomQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}

function printQuote() {
	var randomColor = getRandomColor();
	changeBackgroundColor(randomColor);
	changeButtonColor(randomColor);
	var quotes = getRandomQuote();
	let quoteDiv = document.querySelector('.quote');
	let sourceDiv = document.querySelector('.source');
	quoteDiv.innerHTML = quotes.quote;
	sourceDiv.innerHTML = quotes.source;
}

window.setInterval(function () {
	printQuote();
}, 15000);

document.getElementById("loadQuote").addEventListener("click", printQuote, false);