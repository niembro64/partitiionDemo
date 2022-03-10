const partition0 = (a) => {
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
    for (var i = 0; i < a.length; i++) {
        for (var j = i; j < a.length; j++) {
            if (a[i] > a[j]) {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }

    return num_to_left;
    // return a;
};
// const partition = (a) => {
//     var piv_i = 0;
//     var temp;
//     for (var i = 0; i < a.length; i++) {
//         console.log("i:" + i);
//         if (a[i] < a[piv_i]) {
//             console.log(
//                 "i:" +
//                     i +
//                     " a[i]:" +
//                     a[i] +
//                     " | piv_i:" +
//                     piv_i +
//                     " a[piv_i]:" +
//                     a[piv_i]
//             );
//             for (var j = i; j > piv_i; j--) {
//                 temp = a[j];
//                 a[j] = a[j - 1];
//                 a[j - 1] = temp;
//                 piv_i += 1;
//             }
//             piv_i++;
//         }
//         return a;
//     }
// };
const partition = (arr) => {
    var pivot = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            var temp = arr[i];
            arr.splice(i, 1);
            arr.unshift(temp);
        }
    }
    console.log(arr.indexOf(pivot));
    return arr;
};
arr1 = [5, 4, 9, 2, 5, 3];
console.log(arr1);
console.log(partition(arr1));
