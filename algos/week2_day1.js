/*

create a function that accepts a string as an input and outputs an array with each word from the string


input: "  hello hey how   you   doing?   "
output: ["hello", "hey", "how", "you", "doing?"]

*/

const stringToWord = (str) => {
    let word = '';
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            word += str[i];
        } else {
            if (word.length > 0){
                arr.push(word);
                word = '';
            }
        }
    }
        return arr
}

console.log(stringToWord(' hello hey how   you  doing?'   ))