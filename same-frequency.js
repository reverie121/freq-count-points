// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Time Complexity - O(N + M)
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
function sameFrequency(posInt1, posInt2) {

    if (posInt1.toString().length != posInt2.toString().length) return false;

    function freqCounter(num) {
        let freqCountObj = {};
        for (const n of num.toString()) {
            freqCountObj[n] = (freqCountObj[n] + 1) || 1;
        }
        return freqCountObj;
    }

    const firstCount = freqCounter(posInt1);

    for (const n of posInt2.toString()) {
        if (!firstCount[n] || firstCount[n] < 1) return false;
    }

    return true;
}

module.exports = { sameFrequency }