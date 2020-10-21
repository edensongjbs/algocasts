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
    console.log(arr)
    if (arr.length<=1) {
        return arr
    }
    if (arr.length===2) {
        return arr[0]>arr[1] ? arr.reverse() : arr
    }
    console.log('hello')
    const halfway=Math.floor(arr.length/2)
    return merge(mergeSort(arr.slice(0, halfway)), mergeSort(arr.slice(halfway)))
}

function merge(left, right) {
    console.log(left, right)
    let merged=[]
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift())
        }
        else {
            merged.push(right.shift())
        }
    }
    if (left.length) {
        merged.push(...left)
    }
    else if (right.length) {
        merged.push(...right)
    }
    return merged
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
