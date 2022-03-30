// https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/submissions/
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.list = [];
    this.maxSize = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */

CustomStack.prototype.push = function (x) {
    if (this.list.length < this.maxSize) {
        this.list.push(x)
    }
};

/**
 * @return {number}
 */

CustomStack.prototype.pop = function () {

    const item = this.list.pop()
    return item === undefined ? -1 : item

};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */

CustomStack.prototype.increment = function (k, val) {

    // 如果 长度 小于 k  所有元素都增加

    // 如果 长度 大于 k  只增加 k 个元素

    for (let i = 0; i <= k; i++) {

        // 由数组从 下标 0 开始 所以 数字 k - 1
        if (i <= k - 1 && this.list[i]) {
            this.list[i] += val
        }

    }

};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */


// 实现 Promise.allSettled

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promise3 = Promise.reject(4)
// const promiseL = [promise1, promise2, promise3];

Promise.allSettled('1', '2')
    .then((results) => {
        results.forEach((result) => console.log(result))
    });

// expected output:
// "fulfilled"
// "rejected"

// 该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果。

function allSettled(promises) {

    let len = promises.length;
    let promisesList = [...promises]
    let list = [];
    return new Promise((resolve, reject) => {

        for (let i = 0; i < len; i++) {

            promisesList[i] = promisesList[i].then ? promisesList[i] : Promise.resolve(promisesList[i])

            promisesList[i].then(res => {
                list[i] = {
                    status: 'fulfilled',
                    value: res
                }

            }, err => {
                list[i] = {
                    status: 'rejected',
                    reason: err
                }
            })

        }
        resolve(list)

    })

}



const p = allSettled([1, 2])
p.then(res => {
    res.forEach((result) => console.log('3333', result))
})