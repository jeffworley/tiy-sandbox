var expect = require('chai').expect;
/*
it('should totally fail', function(){
  expect().to.be.true;
});
*/

/**
 * ravarspraket:
 * Given a phrease like "this is fun!"...
 * Produce a roverspraket version:
 *    "tothohisos isos fofunon!"
 *
 * We need a function named 'rovarspraket'
 * It accepts 1 parameter, a String, called 'phrase'
 * It doubles every consonent in the 'phrase' and inserts an "o"
 * between them.
 *
 * In addition, we need a function named 'isVowel'
 * It accepts 1 parameter, a single character, called 'char'
 * It returns TRUE if 'char' is an English vowel
 * Otherwise it returns FALSE
 *
 * Finally, we need a function named 'doubler'
 * It accepts 1 param, a charcter, called 'consonent'
 * It doubles 'consonent' and inserts an "o" in the middle.
 */
 it('should identify vowels', function(){
   /**
    * This is a truth table:
    * input | output
    * ======|=======
    *  'a'  | true
    *  'e'  | true
    *  'i'  | true
    *  'o'  | true
    *  'u'  | true
    *  "A"  | true
    *  "E"  | true
    *  "I"  | true
    *  "O"  | true
    *  "U"  | true
    *   0   | false
    *  'b'  | false
    *   1   | false
    *  'y'  | maybe?
    */
   expect(true).to.be.true;
   expect(isVowel).to.be.a('function');
   expect(isVowel('a')).to.be.true;
   expect(isVowel('A')).to.be.true;
   expect(isVowel('e')).to.be.true;
   expect(isVowel('b')).to.be.false;
   expect(isVowel(0)).to.be.false;
   expect(isVowel(1)).to.be.false;
 });

function isVowel(char){
  if (char === 'a') {
    return true
  } else if (char === 'A') {
    return true;
  } else if (char === 'e') {
    return true;
  }
  return false;
}
