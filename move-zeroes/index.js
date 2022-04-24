/* Dado um array inteiro nums, mova todos os 0's para o final dele, mantendo a ordem relativa dos elementos diferentes de zero.

Observe que você deve fazer isso no local sem fazer uma cópia da matriz. */

var moveZeroes = function(nums) {
    let lastZero = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const aux = nums[lastZero]
            nums[lastZero] = nums[i]
            nums[i] = aux
            lastZero++
        }
    }
    return nums
};