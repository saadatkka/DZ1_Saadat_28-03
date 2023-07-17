const month = +prompt('ведите день');
const day = +prompt('введите месяц');
if (month <= 12 && day >= 1 && day <= 31) {
    if ((month === 1 && day >= 20 && day <= 31) || (month === 2 && day >= 1 && day <= 18)) {
        console.log('водолей');
    } else if ((month === 2 && day >= 19 && day <= 28) || (month === 3 && day >= 1 && day <= 20)) {
        console.log('рыбы');
    } else if ((month === 3 && day >= 21 && day <= 31) || (month === 4 && day >= 1 && day <= 19)) {
        console.log('овен');
    } else if ((month === 4 && day >= 21 && day <= 30) || (month === 5 && day >= 1 && day <= 20)) {
        console.log('телец');
    } else if ((month === 5 && day >= 21 && day <= 31) || (month === 6 && day >= 1 && day <= 20)) {
        console.log('близнецы');
    } else if ((month === 6 && day >= 21 && day <= 30) || (month === 7 && day >= 1 && day <= 22)) {
        console.log('рак');
    } else if ((month === 7 && day >= 23 && day <= 31) || (month === 8 && day >= 1 && day <= 22)) {
        console.log('лев');
    } else if ((month === 8 && day >= 23 && day <= 31) || (month === 9 && day >= 1 && day <= 22)) {
        console.log('дева');
    } else if ((month === 9 && day >= 23 && day <= 30) || (month === 10 && day >= 1 && day <= 22)) {
        console.log('весы');
    } else if ((month === 10 && day >= 23 && day <= 31) || (month === 11 && day >= 1 && day <= 21)
    ) {
        console.log('скорпион');
    } else if ((month === 11 && day >= 22 && day <= 30) || (month === 12 && day >= 1 && day <= 21)
    ) {
        console.log('стрелец');
    } else if ((month === 12 && day >= 22 && day <= 31) || (month === 1 && day >= 1 && day <= 19)) {
        console.log('козерог');
    }
} else {
    alert('вы ввели неправильный месяц или день');
}
