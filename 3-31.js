/**
 * @param {string} s
 * @return {string}
 */

let s = "2[e2[de]]"
var decodeString = function (s) {

    let stack = [];

    // 入栈
    function add(k) {

        stack.push(k)

    }

    function pop() {
        return stack.pop()
    }

    let sum = "";
    let num = 0;
    let str = '';
    let l = [0]
    let f = ""
    for (let i = 0; i < s.length; i++) {
        const e = s[i];

        num = i;

        if (!isNaN(e)) {
            l[0] = l[0] * 10 + Number(e);

        } else if (e == '[') {

            l[1] = str
            add(l)
            l = [0]
            str = ""

        } else if (e == ']') {

            let p = pop();
            console.log(str, '-----------', p);

            str = p[1] + str.repeat(p[0])
            console.log('\\\\\\', str);
        } else {
            str += e
        }



    }

    // return sum + str;
    console.log(str);




};

decodeString(s)


function ObjectIs(x, y) {
    // SameValue algorithm
    if (x === y) { // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
    } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
    }
};


// function ObjectIs2(x, y) {
//     // SameValue algorithm
//     if (x === y) { // Steps 1-5, 7-10
//         // Steps 6.b-6.e: +0 != -0
//         return x !== 0 || 1 / x === 1 / y;
//     } else {
//         // Step 6.a: NaN == NaN
//         return x !== x && y !== y;
//     }
// };
// console.log(ObjectIs2(-2, 2));

var twoSum = function (nums, target) {
    let len = nums.length - 1
    let l1 = 0
    let l2 = 1;

    while (l1 <= len && l2 <= len) {
        console.log(l1, "==========", l2, "=========", len);
        if (nums[l1] + nums[l2] != target) {

            if (l2 < len) {
                l2++;
            } else if (l2 == len) {
                l1++
            }

        } else {
            // l1 = 9999
            // l2 = 9999
            return [l1, l2]
        }

    }
};

console.log(twoSum([3, 2, 4], 6));