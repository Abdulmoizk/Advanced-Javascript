var datee = document.getElementById("date&time");

// var time = dateTime.getTime();
// console.log(`${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`);

const clockk= setInterval(clock, 1000);

function clock(){
    var dateTime = new Date();
    if (dateTime.getHours <= 12) {
        var ampm = "M"
    } else {
        var ampm = "AM"
    }
    datee.innerHTML = `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()} ${ampm}`
}