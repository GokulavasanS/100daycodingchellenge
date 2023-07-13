/*Given a time in -hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.*/

function convertmilitiarytime (time){
    let [hours,minutes,seconds] = time.split(":")
    let period = seconds.slice(-2);
    seconds = seconds.slice(0,-2);

    if(period === "AM" && hours === '12'){
        hours = "00";
    }
    else if(period === "PM" && hours !== '12'){
        hours= Number(hours) + 12;
    }

    return `${hours}:${minutes}:${seconds}`
}
console.log(convertmilitiarytime("12:00:00AM"));
console.log(convertmilitiarytime("01:45:00PM"))