// Your code here
function mapToNegativize(sourceArray) {
    let arr = [];
    sourceArray.forEach(n => arr.push(-n))
    return arr
}

function mapToNoChange(sourceArray) {
    const arr = sourceArray
    return arr
}

function mapToDouble(sourceArray) {
    let arr = [];
    sourceArray.forEach(n => arr.push(n*2))
    return arr
}

function mapToSquare(sourceArray) {
    let arr = [];
    sourceArray.forEach(n => arr.push(n**2))
    return arr
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    sourceArray.forEach(n => {startingPoint += n})
    return startingPoint
}

function reduceToAllTrue(sourceArray) {
    let outcome = true
    sourceArray.forEach(e => {
        if (!e) {outcome = false}
    })
    return outcome
}

function reduceToAnyTrue(sourceArray) {
    let outcome = false
    sourceArray.forEach(e => {
        if (!!e) {outcome = true}
    })
    return outcome
}

