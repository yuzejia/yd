// 
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {

    let arr = []
    console.log(num, k);

    let num2 = String(k).split('');

    let l1 = num.length - 1;
    let l2 = num2.length - 1;
    let y = 0;

    // 循环 尾部相加 
    while (l1 >= 0 || l2 >= 0) {

        // 避免 成都不一样 出现空位即表示 当前位 为 0；
        let n2 = num2[l2] ? num2[l2] : 0;
        let n1 = num[l1] ? num[l1] : 0;

        // y 为进 1 两数和加上 进1 为当前位相加的和 
        let sum = (n1 + Number(n2)) + y;

        // 除以 10  取整 
        y = Math.floor(sum / 10)

        // 余数为当前数
        arr.push(sum % 10)
        l1--;
        l2--;
    }

    if (y) arr.push(y)

    return arr.reverse()

};


num = [1, 2, 0, 0], k = 3433333

let f = addToArrayForm(num, k)
console.log(f);