var arr = new Array(21,2,34,54,5,3,7,9,123);

function partition(p:number,r:number): number{

    var x:number = arr[p];
    var i:number = p;

    for(var j=p+1;j<r;j++){
        if(arr[j]<=x){
            i++;
            //swapping arr[i] and arr[j]
            let temp:number = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    //swapping arr[p] and arr[i]
    let temp:number = arr[p];
    arr[p] = arr[i];
    arr[i] = temp;

    return i;
}


function quickSort(p:number,r:number){
    if(p<r){
        var q:number = partition(p,r);
        quickSort(p,q-1);
        quickSort(q+1,r);
    }
}

quickSort(0,9);
console.log(arr);