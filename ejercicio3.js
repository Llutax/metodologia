// 1. **Ejercicio 03**


let nums = [8, 0, 9, 1]

let i = 0, j = 1;
let contar = nums.length

for (i; i < contar; i++) {
    console.log(".......");
    j = i + 1;
    if (i < contar) {
        for (j; j < contar; j++) {
            console.log(nums[i], nums[j]);
        }
    }
}
