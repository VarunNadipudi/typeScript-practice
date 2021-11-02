function fibonacci(n) {
    var num1 = 0;
    var num2 = 1;
    for (var i = 1; i <= n; i++) {
        console.log(num1);
        var num3 = num1 + num2;
        //swap
        num1 = num2;
        num2 = num3;
    }
}
fibonacci(10);
