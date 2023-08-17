// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Time Complexity - O(N + M)
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
function isSubsequence(str1, str2) {
    let pointer = 0;
    for (const char of str2) {
        if (char == str1[pointer]) {
            pointer ++;
            if (pointer == str1.length) return true;
        }
    }
    return false;
}

module.exports = { isSubsequence }