class VimLang {
	static parse(source, strictParsing = true) {
		/* just use semicolons lol */
		if(!strictParsing) {console.log("bitch you thought;");return false;};
		
		// create array of all substrings of source that are followed by a semicolon
		let lines = source.split(";");

		// create empty array "tree" to later return in correct format for the compiler 
		let tree = [];
		
		for (var i in lines) {
			tree.push(lines[i].trim().split(/* /[ +]/ */ /('.*?'|[^' ]+)+(?= *| *$)/));
		}
		return tree;
	}
	static interpret(tree) {
		for(var i = 0; i < tree.length; i ++) {
			var line = tree[i];
			for (var j = 0; j < line.length; j ++) {
				// Largest brain
				var token = line[j].toLowerCase();

				switch(token) {
					case "print":
						console.log(line[j + 1].startsWith("'" | '"', 1) ? (line[j + 1].endsWith("'" | '"', 1) ? line[j + 1] : false) : false);
						console.log(tree)
						break;
					default:
				}
			}
		}
	}
	static compile(tree) {
		/* compiles tree returned from VimLang.parse() into native NodeJS Code; It is not recommended to use compile and you should instead use VimLang.interpret() */

		// Refuse to compile anything other than an Array
		if (typeof tree !== Array) return new Error("Static method 'compile()' takes in a single required argument 'tree'. Expected Array, instead recieved " + typeof tree + ".");
	}
}


function main() {
	VimLang.interpret(VimLang.parse(`print 'test test';
	print 'test2'`));
};

main();
