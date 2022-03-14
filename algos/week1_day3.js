//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

const selectionSort = (arr)=>{
    for (let i = 0; i < arr.length - 1; i++) {
        let num = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[num]) {
                num = j;
            }
        }
        [arr[i], arr[num]] = [arr[num], arr[i]];
    }
    return arr;
}


console.log(selectionSort([4,8,5,2,1,0,9,7]))
