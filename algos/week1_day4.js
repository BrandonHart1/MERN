//create a helper function that takes 2 already sorted array, and combines them into one sorted array and returns that new sorted array

const combineSortedArrays = (arr1, arr2) => {
    //result array that will contain values from both the input arrays
    let result = []

    while (arr1.length > 0 && arr2.length > 0){
        if (arr1[0] <= arr2[0]){
            result.push(arr1[0])
            arr1.splice(0,1)
        } else {
            result.push(arr2[0])
            arr2.splice(0,1)
        }
    }
    if (arr1.length != 0){
        for (let i = 0; i < arr1.length; i++){
            result.push(arr1[i])
        }
    }else{
        for (let i = 0; i < arr2.length; i++){
            result.push(arr2[i])
        }
    }
        return result
}


console.log(combineSortedArrays([1,3,5,5,6], [2,3,4,9])) //[1,2,3,3,4,5,5,6,9]



//https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/