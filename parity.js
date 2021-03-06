/**
 * Returns true if each opening bracket in the given string contains a matching closing bracket
 *
 * @param {string} testString The string to be tested
 * @return {boolean} true if each opening bracket has a matching closing bracket, false otherwise
 */
function checkBracketParity(testString) {
  const CLOSING_BRACKET = '}'
  const OPENING_BRACKET = '{'
  let stack = []

  for (let char of testString) {
    if (char === OPENING_BRACKET) {
      stack.push(char)
    } else if (char === CLOSING_BRACKET) {
      if (!stack.pop()) {
        return false
      }
    }
  }

  // If stack length is 0, all opening brackets have matching closed brackets
  return (stack.length === 0)
}

module.exports = checkBracketParity
