Array.prototype.myMap = function(cb) {
    const arr = [];
    for(let i=0; i < this.length; i++) {
        arr.push(cb(this[i], i, this))
    }
    return arr;
}

Array.prototype.myFilter = function(cb) {
    const arr = [];
    for(let i=0; i < this.length; i++) {
        if(cb(this[i], i, this)) arr.push(this[i])
    }
    return arr;
}

Array.prototype.myReduce = function(cb, iv) {
    let acc = iv ? iv : 0
    for(let i=0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i]
    }
    return acc;
}

const mp = [1, 2, 3, 4, 5].myMap(ele => ele * 2);
console.log(mp)
const ft = [1, 2, 3, 4, 5].myFilter(ele => ele % 2 === 0);
console.log(ft)
const rd = [1, 2, 3, 4, 5].myReduce((acc, ele) => (acc + ele), 0);
console.log(rd)
