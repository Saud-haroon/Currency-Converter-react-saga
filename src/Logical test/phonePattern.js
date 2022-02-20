let phone = [0, 2, 1, 6, 9, 4, 9, 5, 6, 7]

const phonePattern = (arr) => {
    let isFlag = arr.indexOf(3) === 3

    if (!isFlag) {
        arr.splice(3, 0, 3);
        if (arr.length > 11) {
            arr.length = 11
        }
    } else {
        arr.length = 11
    }

    let newArr = []
    if (arr.length === 11) {
        arr.pop()
        if (arr[3] !== "-" || arr[7] !== "-") {
            arr.splice(3, 0, "-");
            arr.splice(7, 0, "-");
        }

        arr.map((item) => {
            newArr.push(item.toString())
        })
        var arrangephone = newArr.join("")

    }

    return arrangephone
}

console.log(phonePattern(phone))