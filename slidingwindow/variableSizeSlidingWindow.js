/**
 * Find the largest subarray size whose sum is equal to k (all positive numbers)
 */
const largestSubarrSize = (arr, k) => {
    let sum = 0;
    let max = 0;
    let i = 0;
    let j = 0;
    while (j < arr.length) {
        sum += arr[j];
        if (sum < k) {
            j++
        }
        else if (sum === k) {
           return [i,j]
        }
        else if (sum > k) {
            while (sum > k) {
                sum = sum - Math.abs(arr[i]);
                i++;
            }
            j++;
        }
    }
    return -1
}

console.log(largestSubarrSize([10, 5, 2, 7, 1, 9], 14))