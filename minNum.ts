function minimum(){
    var arr = new Array(32,40,27,92,8);
    var minElement:number = Number.MAX_VALUE;
    for(var i in arr){
        if(arr[i] < minElement){
            minElement = arr[i];
        }
    }
    console.log(`The min element from ${arr} is ${minElement}`);
}

minimum();