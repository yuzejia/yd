/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {

    let num = []
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            num.push(i)
        }

    }

    let n1 = num[0]
    let n2 = num[1] ? num[1] : [999]
    let id = 1
    for (let i = 0; i < s.length; i++) {


        // 当前 i 出现的区间范围 查值； 取开始值 和 结束值 最小值
        // [3, 5] [5, 6] [6,11]
        // Math.abs 绝对值
        let n = Math.abs(n1 - i) < (n2 - i) ? Math.abs(n1 - i) : n2 - i;

        arr.push(n)
        if (i == n2) {

            id++;
            n1 = n2;
            n2 = num[id] ? num[id] : [999]
        }

    }
    console.log(arr);
    return arr;

};




let s = "abba",
    c = "b"

shortestToChar(s, c)


// Symbol 实现

function SymbolPolyfill(s) {



}