let date = new Date();
let stringDate = date.toDateString();
let time = date.toLocaleTimeString();
let currentHour = date.getHours();

const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// create an array for local storage
const hoursContent = JSON.parse(localStorage.getItem("hoursContent") || `["", "", "", "", "", "", "", "", ""]`);

// select the div for inserting hour blocks
let container = document.querySelector('.container');

for (let i = 0; i < hours.length; i++) {
    let outerDiv = document.createElement('div');
    outerDiv.classList.add('row', 'time-block');
    outerDiv.innerHTML = `<div class="col-md-1 hour">${getTimeLabel(hours[i])}</div>
    <textarea class="col-md-10 description ${getColorClass(hours[i])}">${hoursContent[i]}</textarea>
    <button class="col-md-1 saveBtn btns" data-index="${i}">
        <li class="fas fa-save"></li>
    </button>`;
    container.append(outerDiv);
}

$( ".container" ).on( "click", "button", function() {
    //console.log(this.dataset.index);
    //console.log($(this).siblings("textarea")[0].value);
    hoursContent[this.dataset.index] = $(this).siblings("textarea")[0].value;
    localStorage.setItem("hoursContent", JSON.stringify(hoursContent));
  });

function getColorClass(hour) {
    if (hour < currentHour) {
        return "past";
    } else if (hour == currentHour) {
        return "present";
    } else {
        return "future"
;    }
}

function getTimeLabel(hour) {
    console.log(hour);
    switch (hour) {
        case 9:
            return '9 AM';
            break;
        case 10:
            return '10 AM';
            break;
        case 11:
            return '11 AM';
            break;
        case 12:
            return '12 PM';
            break;
        case 13:
            return '1 PM';
            break;
        case 14:
            return '2 PM';
            break;
        case 15:
            return '3 PM';
            break;
        case 16:
            return '4 PM';
            break;
        case 17:
            return '5 PM';
            break;
    }
}