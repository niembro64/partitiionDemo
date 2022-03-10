const partition = (a) => {
    if (a.length === 0) {
        return -1;
    }
    var num_to_left = 0;

    // count num to left
    for (var i = 0; i < a.length; i++) {
        if (a[i] < a[0]) {
            num_to_left += 1;
        }
    }

    var temp;
    for (var i = 0; i < a.length; i++){
        for (var j = i; j < a.length; j++){
            if (a[i] > a[j]){
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    return num_to_left;
    // return a;
};

arr1 = [5, 4, 9, 2, 5, 3];
console.log(partition(arr1));
