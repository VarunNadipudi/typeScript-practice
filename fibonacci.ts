
function fibonacci(n:number){
    var num1:number = 0;
    var num2:number = 1;
    
    for(var i=1;i<=n;i++){
        console.log(num1);
        var num3:number = num1 + num2;

        //swap
        num1 = num2;
        num2 = num3;
    }
}

fibonacci(10);