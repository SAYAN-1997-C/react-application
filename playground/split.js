function split(array, cols) {
    if (cols==1) return array;
    var size = Math.ceil(array.length / cols);
    return array.slice(0, size).concat([null]).concat(split(array.slice(size), cols-1));
}

let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(split(arr,4))