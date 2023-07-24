function fibonacci(num) {
// your code here
    let a = 0; b = 1;
    for(let i=1;i<=num-2;i++){
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

module.exports = fibonacci;
