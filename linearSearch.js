var arr = new Array(23, 32, 40, 27, 676);
function search(key) {
    var index = -1;
    for (var i in arr) {
        if (arr[i] == key) {
            index = parseInt(i);
        }
    }
    return index;
}
var num = 40;
if (search(num) < 0) {
    console.log("Given number is not present in the array!");
}
else {
    console.log("Element " + num + " is found at " + search(num));
}
