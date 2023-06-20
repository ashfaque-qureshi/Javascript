
//Change the below date to see the changes in the web page

const endDate = "21 June 2023 21:34:00"


document.getElementById("end-date").innerHTML = endDate;
const input = document.querySelectorAll("input");



function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff < 0 ) return;

    //convert into days
    input[0].value = Math.floor(diff / 3600 / 24);
    input[1].value = Math.floor(diff / 3600)% 24;
    input[2].value = Math.floor(diff / 60) % 60;
    input[3].value = Math.floor(diff) % 60;

}

//initial call
clock();

/* 
    1 day = 24hours
    1 hr = 60 minutes
    60 min = 3600 sec

*/


setInterval(
    () => {
        clock();
    }
)