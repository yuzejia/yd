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
    let n2 = num[1]
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



            n2 = num[id]
        }

    }
    console.log(arr);
    return arr;

};




let s = "abba",
    c = "b"

shortestToChar(s, c)


// Symbol 实现
// Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
function SymbolPolyfill(s) {

    var obj = {
        b: 111
    };

    Object.defineProperties(obj, {
        'p1': {
            value: 'a',
            writable: true,
            enumerable: false,
            configurable: true
        },
        'a2': {
            value: 'Hello',
            writable: false
        }
        // etc. etc.
    });

    return obj


}

let a = SymbolPolyfill();

console.log(a);

for (const key in a) {
    console.log(key);
}

var ss = function () {}
var _proto = ss.prototype;
var s1 = Object.create(_proto)
var s2 = Object.create(_proto)
// console.log(s1 == s2);