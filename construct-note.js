// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters.
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true
function constructNote(message, letters) {
    function freqCounter(str) {
        let freqCountObj = {};
        for (const char of str) {
            freqCountObj[char] = (freqCountObj[char] + 1) || 1;
        }
        return freqCountObj;
    }

    let lettersCount = freqCounter(letters);

    for (const char of message) {
        if (!lettersCount[char] || lettersCount[char] < 1) return false
        else {
            lettersCount[char] --;
        }
    }

    return true;
}

module.exports = { constructNote };