// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Time Complexity: O(N)
// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false
function averagePair(sortedArr, targetAvg) {
    let left = sortedArr[0];
    let right = sortedArr[sortedArr.length - 1];
    while (left < right) {
        const currentAvg = (left + right) / 2;
        if (currentAvg == targetAvg) return true;
        else if (currentAvg < targetAvg) left ++;
        else if (currentAvg > targetAvg) right --;
    }
    return false;
}

module.exports = { averagePair }