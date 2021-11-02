function maximum(){
    var arr = new Array(32,40,27,92,8);
    var maxElement:number = Number.MIN_VALUE;
    for(var i in arr){
        if(arr[i]>maxElement){
            maxElement = arr[i];
        }
    }
    console.log(`The max element from ${arr} is ${maxElement}`);
}

maximum();