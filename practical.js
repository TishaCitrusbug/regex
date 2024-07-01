// 1. Pattern Matching: Regex allows you to define patterns to match against text.

const text = "hello world! 123";

// 2. Literal Characters: Literal characters in a regex pattern match themselves in the text.

const literalPattern = /hello/;
console.log(text.match(literalPattern)); // Output: [ 'hello', index: 0, input: 'hello world! 123', groups: undefined ]

// 3. Metacharacters: Metacharacters are special characters in regex that have a predefined meaning.

const metacharPattern = /h.llo/;
console.log(text.match(metacharPattern)); // Output: [ 'hello', index: 0, input: 'hello world! 123', groups: undefined ]

// 4. Character Classes: Character classes allow you to specify a set of characters that can match at a certain position in the text.

const charClassPattern = /[hw]orld/;
console.log(text.match(charClassPattern)); // Output: [ 'world', index: 6, input: 'hello world! 123', groups: undefined ]

// 5. Quantifiers: Quantifiers specify how many times a character or a group of characters can occur.

const quantifierPattern = /\d+/; // Matches one or more digits
console.log(text.match(quantifierPattern)); // Output: [ '123', index: 12, input: 'hello world! 123', groups: undefined ]

// 6. Anchors: Anchors are used to specify the position of a match within the text.

const anchorPattern = /^hello/;
console.log(text.match(anchorPattern)); // Output: [ 'hello', index: 0, input: 'hello world! 123', groups: undefined ]

// 7. Grouping and Capturing: Parentheses `()` are used for grouping characters or subexpressions in a regex pattern.

const groupPattern = /(hello) (world)/;
const match = text.match(groupPattern);
console.log(match); // Output: [ 'hello world', 'hello', 'world', index: 0, input: 'hello world! 123', groups: undefined ]
console.log("Captured Groups:", match[1], match[2]); // Output: Captured Groups: hello world

// 8. Alternation: Alternation allows you to specify multiple alternatives for a match using the `|` (pipe) symbol.

const alternationPattern = /hello|world/;
console.log(text.match(alternationPattern)); // Output: [ 'hello', index: 0, input: 'hello world! 123', groups: undefined ]

// 9. Modifiers: Modifiers are used to specify options or flags that affect the behavior of the regex engine.

const modifierPattern = /HELLO/i; // Case-insensitive match
console.log(text.match(modifierPattern)); // Output: [ 'hello', index: 0, input: 'hello world! 123', groups: undefined ]

// 10. Escape Characters: Escape characters allow you to use metacharacters as literals.

const escapePattern = /\./; // Matches a literal dot
console.log("hello.world".match(escapePattern)); // Output: [ '.', index: 5, input: 'hello.world', groups: undefined ]
