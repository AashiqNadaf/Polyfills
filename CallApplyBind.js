Function.prototype.myCall = function(context, ...args) {
    context.myFun = this;
    context.myFun(...args);
}

Function.prototype.myApply = function(context, args) {
    context.myFun = this;
    context.myFun(...args);
}

Function.prototype.myBind = function(context, ...args1) {
    var self = this
   return function(...args2) {
       return self.myCall(context, ...[...args1, ...args2])
   }
}
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (city, state) {
        console.log(this.name, city, state); 
    }
}
PrintName.sayHi.myCall(nameObj, "Bengaluru", 'KA');
PrintName.sayHi.myApply(nameObj, ["Bengaluru", 'KA']);
const retFun = PrintName.sayHi.myBind(nameObj, "Bengaluru", 'KA');
retFun()
