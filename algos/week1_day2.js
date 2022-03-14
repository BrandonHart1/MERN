//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let j = i-1;
        let current = arr[i];
        while(j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}


console.log(insertionSort([5,23,0,12,8,6])) //[0,5,6,8,12,23]