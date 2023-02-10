function getMaxValue(arr) {
    let max = arr[0];
        for (let elem of arr){
            if (elem > max) max = elem;
        }
        return max;
}

function getMinValue(arr){
    let min = arr[0];
            for (let elem of arr){
                if (elem < min) min = elem;
            }
            return min;
}

function sumValue(arr){
    let sum = 0;
            for (let elem of arr) sum +=elem;
            return sum;
}