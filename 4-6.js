function searchParamsUrl(params) {

    this.obj = {};
    if (params) {
        let paramsArr = params.split("&")
        for (let i = 0; i < paramsArr.length; i++) {
            const item = paramsArr[i];
            itemSplitList = item.split('=')
            this.obj[itemSplitList[0]] = itemSplitList[1]
        }
    }





}

// get key
searchParamsUrl.prototype.get = function (key) {
    return this.obj[key]
}

// searchParamsUrl.prototype.set = function (key) {
//     return this.obj[key]
// }


let searchParams = new searchParamsUrl('key1=value1&key2=value2');


let k = searchParams.get("key1")
console.log(k);