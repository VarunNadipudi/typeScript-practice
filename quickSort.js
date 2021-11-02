var arr = new Array(21, 2, 34, 54, 5, 3, 7, 9, 123);
function partition(p, r) {
    var x = arr[p];
    var i = p;
    for (var j = p + 1; j < r; j++) {
        if (arr[j] <= x) {
            i++;
            //swapping arr[i] and arr[j]
            var temp_1 = arr[i];
            arr[i] = arr[j];
            arr[j] = temp_1;
        }
    }
    //swapping arr[p] and arr[i]
    var temp = arr[p];
    arr[p] = arr[i];
    arr[i] = temp;
    return i;
}
function quickSort(p, r) {
    if (p < r) {
        var q = partition(p, r);
        quickSort(p, q - 1);
        quickSort(q + 1, r);
    }
}
quickSort(0, 9);
console.log(arr);
