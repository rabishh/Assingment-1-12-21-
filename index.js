var calculator={
    'num1':parseInt(prompt("enter the first number")),
    'num2':parseInt(prompt("enter the first number")),
    'res':0,
    'sum':function(){
        this.res=this.num1+this.num2;
        return this.res;
    },
    'diff':function(){
        this.res=this.num1-this.num2;
        return this.res;
    },
    'mul':function(){
        this.res=this.num1*this.num2;
        return this.res;
    },
    'divide':function(){
        this.res=this.num1/this.num2;
        return this.res;
    },

}
// console.log(calculator.sum());
// console.log(calculator.diff());
console.log(calculator.mul());
// console.log(calculator.divide());