export const rate = rate => {
    const rateArray = String(rate).split(".");

    let starFill = +rateArray[0];

    let starHalf = 0;

    if (+rateArray[1] && (+rateArray[1] > 9)) {
        starFill = starFill + 1
    } else if (+rateArray[1] && (+rateArray[1] <= 9)) {
        starHalf = 1
    }
    const starTemp = 5 - (starFill + starHalf);



    let star1 = []
    let star3 = []

    for (let i = 0; i < starFill; i++) {
        star1.push("item")
    }
    for (let i = 0; i < starTemp; i++) {
        star3.push("item")

    }



    return [star1, starHalf, star3]

}