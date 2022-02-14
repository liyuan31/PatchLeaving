export function range(n) {
    let result = new Array(n);
    for (let i = 0; i < result.length; i++) {
        result[i] = i;
    }
    return result;
}

export function randi(min, max, inclusive = false) {
    if (inclusive == false) {
        return Math.floor(Math.random() * (max - min)) + min;
    } else {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export function shuffle(arr) {
    let j = undefined;
    let k = undefined;
    for (let i = arr.length - 1; i >= 0; i--) {
        j = randi(0, i, true);
        k = arr[j];
        arr[j] = arr[i];
        arr[i] = k;
    }
    return arr;
}
