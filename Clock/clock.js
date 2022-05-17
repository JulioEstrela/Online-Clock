var timeText = document.getElementById("timeText");

function AddZero(number)
{
    if (number < 10)
    {
        number = "0" + number;
    }
    return number;
}

//variables
    var date;
    var hours;
    var minutes;
    var seconds;

function GetTime()
{
    date = new Date();

    day = date.getDay();

    hours = AddZero(date.getHours());
    minutes = AddZero(date.getMinutes());
    seconds = AddZero(date.getSeconds());

    timeText.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function ChangeLayout()
{   

    if(hours >= 18 || hours  < 5)
    {
        document.getElementById("welcome").innerHTML = "Good Evening";
        document.getElementById("html").style.backgroundColor = "#1F2041";
        document.getElementById("image").src = "night.jpg"
    }
    
    else if(hours >= 12)
    {
        document.getElementById("welcome").innerHTML = "Good Afternoon";
        document.getElementById("html").style.backgroundColor = "#FE621D";
        document.getElementById("image").src = "afternoon.jpg";
    }
    else if(hours >= 5)
    {
        document.getElementById("welcome").innerHTML = "Good Morning";
        document.getElementById("html").style.backgroundColor = "#F2B880";
        document.getElementById("image").src = "morning.jpg";
    }

    switch (day) {
        case 0:
            document.getElementById("day").innerHTML = "Sunday";
            break;
        case 1:
            document.getElementById("day").innerHTML = "Monday";
            break;
        case 2:
            document.getElementById("day").innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById("day").innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById("day").innerHTML = "Thursday";
            break;
        case 5:
            document.getElementById("day").innerHTML = "Friday";
            break;
        case 6:
            document.getElementById("day").innerHTML = "Saturday";
            break;
        default:
            break;
    }

    
}  

GetTime();
setInterval(GetTime, 1000);
ChangeLayout();
setInterval(ChangeLayout, 3.6e+6)