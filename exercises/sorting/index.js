// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let temp
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length-1-i; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            console.log(arr)
        }
    }
    return arr
}

function selectionSort(arr) {
    for (i=0; i<arr.length-1; i++) {
        for (j=i+1; j<arr.length; j++) {
            if (arr[j]<arr[i]) {
                const temp=arr[j]
                arr[j]=arr[i]
                arr[i]=temp
            }
        }
    }
    return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
