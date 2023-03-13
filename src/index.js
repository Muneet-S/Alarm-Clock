/* using let keyword and putting all the code inside
    curly brackets to manage the scope of the code. */

{
let alarms = []; // array to contain all the list items
let hours = document.getElementById("hour") // hour section for current time.  
let minutes = document.getElementById('minute') // minute section for current time. 
let seconds = document.getElementById('second') // second section for current time.
let amPm = document.getElementById('am-pm') // am-pm section for current time.
let amButton = document.getElementById('am') // am-pm toggle button.
let inputTime = document.querySelectorAll('input') //declaring all the input tags used for setting the alarm.
let setAlarmButton = document.getElementById('set-alarm') //button to set the alarm.
let alarmList = document.getElementById("alarm-list") // unodered list element.
let amPmValue; // to set the am-pm value.
let amPmvalueCurrent; //to set the real-time am-pm value
let inputHour1; // first digit of hour input.
let inputHour2; // second digit of hour input.
let totalHour; // final hour input 
let firstHour = false; // boolean to check if first digit is put or not.
let secondHour = false;  // boolean to check if second digit is put or not.
let inputMin1; // first digit of minute input.
let inputMin2; // second digit of minute input.
let totalMin; // final minute input 
let firstMin = false;  // boolean to check if first digit is put or not.
let secondMin = false;  // boolean to check if second digit is put or not.
let inputSec1; // first digit of seconds input.
let inputSec2; // second digit of seconds input.
let totalSec; //final seconds input.
let firstSec = false; // boolean to check if first digit is put or not.
let secondSec = false; // boolean to check if second digit is put or not.
let toggle = false; //to check if am-pm is toggled
let currentHour; // to take the value of current hour
let currentMin; // to take the value of current minute
let currentSec; //to take the value of current second

// function to set the current time.
function currentTime(){
    //using the new Date() function to set the current time.
    let now = new Date(); 
        currentHour = now.getHours()
        //setting the 24 hour format to 12 hour format.
    if (currentHour <= 12){ 
        if(currentHour>9){
            hours.innerHTML = currentHour;
        } 
        // adding a "0" infront of the digit if only single digit is present.
        else hours.innerHTML = "0"+ currentHour;
        // assigning am-pm value based on 12 hour time format.
        amPm.innerHTML = "AM"
        // taking the current am-pm value.
        amPmvalueCurrent = amPm.innerHTML 
    }
    else {
        currentHour = currentHour - 12;
        if(currentHour>9){
            hours.innerHTML = currentHour;
        } else hours.innerHTML = "0"+ currentHour;
        amPm.innerHTML = "PM"
        amPmvalueCurrent = amPm.innerHTML
    }
    //adding "0" infront of the digit if only 1 digit is present.
    if(now.getMinutes()>9){ 
        minutes.innerHTML = now.getMinutes();
    } else  minutes.innerHTML ="0" + now.getMinutes();

    currentMin = minutes.innerHTML

    //adding "0" infront of the digit if only 1 digit is present.
    if(now.getSeconds()>9){
    seconds.innerHTML = now.getSeconds();
    } else seconds.innerHTML ="0" + now.getSeconds();
    currentSec = seconds.innerHTML;
}
//using setInterval() function to update the current time with every second.
setInterval(currentTime,1000); 

//function to set the pre-loaded values of the input field.
function setAlarmScreen(){
    let now = new Date();
    //setting the initial alarm value to be 10 minutes ahead of the current time.
    let minutes = now.getMinutes() + 10;
    var hour = now.getHours()
    // after adding 10 minutes, if the minutes value crosses 60 then the hour value should also increase by 1.
    if(minutes>60){
    hour++
    }
    // assigning initial hour value
    if (hour <= 12){
        if(hour>9){
           inputTime[0].value = hour;
        } else inputTime[0].value = "0"+ hour;
        amButton.innerHTML = "AM"
        amPmValue = amButton.innerHTML
        toggle = true;
    }
    else {
        hour = hour - 12;
        if(hour>9){
            inputTime[0].value = hour;
        } else inputTime[0].value = "0"+ hour;
        amButton.innerHTML = "PM"
        amPmValue = amButton.innerHTML
        toggle = false;
    } 
    totalHour = inputTime[0].value;
    // assigning initial minutes value
    if(minutes<60){
        inputTime[1].value = minutes;
    } else {
        minutes = minutes - 60;
        if(minutes>9){
            inputTime[1].value = minutes;
            } else inputTime[1].value ="0"+ minutes;
        }
        totalMin = inputTime[1].value;

    // assigning initial seconds value    
    if(now.getSeconds()>9){
        inputTime[2].value = now.getSeconds();
    } else inputTime[2].value ="0" + now.getSeconds();

    totalSec = inputTime[2].value;
}
// function to set the hours value using the input element.

function setHour(e){
    let keynum = e.keyCode;
    // checking if the user has pressed numbers from 1 to 9 and if the first digit has never been added before.
    if(keynum > 48 && keynum <= 57 && firstHour == false){
        // taking the value of the added number.
        inputHour1 = String.fromCharCode(keynum);
        // setting the value inside the input element
        inputTime[0].value = "0" + String.fromCharCode(keynum);
        firstHour = true; // assigning true to first digit value so that the next added digit becomes the second digit.
        totalHour = inputHour1 // assinging the final hour input.
    } // checking if the user has pressed numbers from 1 to 9 and if the second digit has never been added before.
     else if(inputHour1 >=0 && inputHour1<=1 && keynum >= 48 && keynum <= 50 && secondHour == false) {
        inputTime[0].value = inputHour1 + String.fromCharCode(keynum);
        inputHour2 = String.fromCharCode(keynum);
        totalHour = inputHour1 + inputHour2;
        secondHour = true; // assigning true to second digit value so that the next added digit becomes the second digit.
    } // handling the events occured when "backspace" is pressed.
    else if(keynum == 8){
        if(secondHour == true){
            inputTime[0].value = "0" + inputHour1;
            secondHour = false;
        }     
        else if(firstHour == true){
            inputTime[0].value = "0" + "0";
            firstHour = false;
        } else inputTime[0].value = "0" + "0"; 
    } else {
        // notification to ask user to press only numbers. and to add a number between 1 to 12.
        showNotification("add a number between 1 to 12");
        // removing any wrong or extra character other than digits if added by the user
        if(secondHour == true){
            inputTime[0].value = totalHour;
        } else if(firstHour == true){
            inputTime[0].value =  "0" + inputHour1;
        } else inputTime[0].value = "0" + "0"; 
    }
}

// function to set the minutes input.
function setMinute(e){
    let keynum = e.keyCode;
    if(keynum >= 48 && keynum <= 57 && firstMin == false){
        inputMin1 = String.fromCharCode(keynum);
        inputTime[1].value = "0" + String.fromCharCode(keynum);
        firstMin = true;
        totalMin = inputMin1;
    } else if(inputMin1 >=0 && inputMin1<=5 && keynum >= 48 && keynum <= 57 && secondMin == false) {
        inputTime[1].value = inputMin1 + String.fromCharCode(keynum);
        inputMin2 = String.fromCharCode(keynum);
        totalMin = inputMin1 + inputMin2;
        secondMin = true
    } else if(keynum == 8){
        if(secondMin == true){
            inputTime[1].value = "0" + inputMin1;
            secondMin = false;
        }     
        else if(firstMin == true){
            inputTime[1].value = "0" + "0";
            firstMin = false;
        } else inputTime[1].value = "0" + "0"; 
    } else {
        // notification to ask user to press only numbers. and to add a number between 1 to 60.
        showNotification("add a number between 0 to 60");
        if(secondMin == true){
            inputTime[1].value = totalMin;
        } else if(firstMin == true){
            inputTime[1].value =  "0" + inputMin1;
        } else inputTime[1].value = "0" + "0"; 
    }
}
// function to set the seconds input.
function setSecond(e){
    let keynum = e.keyCode;
    if(keynum >= 48 && keynum <= 57 && firstSec == false){
        inputSec1 = String.fromCharCode(keynum);
        inputTime[2].value = "0" + String.fromCharCode(keynum);
        firstSec = true;
        totalSec = inputSec1
    } else if(inputSec1 >=0 && inputSec1<=5 && keynum >= 48 && keynum <= 57 && secondSec == false) {
        inputTime[2].value = inputSec1 + String.fromCharCode(keynum);
        inputSec2 = String.fromCharCode(keynum);
        totalSec = inputSec1 + inputSec2;
        secondSec = true
    } else if(keynum == 8){
        if(secondSec == true){
            inputTime[2].value = "0" + inputSec1;
            secondSec = false;
        }     
        else if(firstSec == true){
            inputTime[2].value = "0" + "0";
            firstSec = false;
        } else inputTime[2].value = "0" + "0"; 
    } else {
        // notification to ask user to press only numbers. and to add a number between 1 to 60.
        showNotification("add a number between 0 to 60");
        if(secondSec == true){
            inputTime[2].value = totalSec;
        } else if(firstSec == true){
            inputTime[2].value =  "0" + inputSec1;
        } else inputTime[2].value = "0" + "0"; 
    }
}

// function to toggle the value of am-pm.
function amPmToggle(){
    if(toggle == false){
        amButton.innerHTML = "AM"
        amPmValue = amButton.innerHTML
        toggle = true;
    } else {
        amButton.innerHTML = "PM"
        amPmValue = amButton.innerHTML
        toggle = false;
    }
}

// function to collect all the data for the alarm and putting it in an object to store.
function setAlarm(){
    const newAlarm = {
        totalHour,
        totalMin,
        totalSec,
        amPmValue,
        id : Date.now().toString()
   }
   addAlarm(newAlarm)
        
}

// function to add a new alarm to the alarms list
function addAlarm (alarm) {
    if(alarm){
    alarms.push(alarm);
    renderList();
    return
    }
    showNotification('Alarm can not be added')
}

// function to add the alarm list item to the unordered list.
function addAlarmToDOM(alarm){
    //creating an li tag.
    const li = document.createElement('li');
    // checking if the pre-set values are being used to set the alarm.
    if(alarm.totalHour == undefined){
        li.innerHTML = `<span>
        <span class="hourList">${screenHour}</span>
        <span>:</span>
        <span class="minuteList">${screenMin}</span>
        <span>:</span>
        <span class="secondList">${screenSec}</span>
        <span class="am-pm-List">${amPmValue}</span>
    </span>
    <button data-id=${alarm.id} class="btn delete">Delete</button>`;
    }
    else {
    li.innerHTML = `<span>
                    <span class="hourList">${alarm.totalHour}</span>
                    <span>:</span>
                    <span class="minuteList">${alarm.totalMin}</span>
                    <span>:</span>
                    <span class="secondList">${alarm.totalSec}</span>
                    <span class="am-pm-List">${alarm.amPmValue}</span>
                </span>
                <button data-id=${alarm.id} class="btn delete">Delete</button>`;
            }
         
            alarmList.appendChild(li);              
}

// function to render the list every time an alarm rings or is added or is deleted.
function renderList(){
    alarmList.innerHTML = "";
    for(let i =0 ; i<alarms.length; i++ ){
        addAlarmToDOM(alarms[i])
    }
}

// function to delete the specific alarm from the list
function deleteAlarm(alarmId){
    const newAlarmsList = alarms.filter(function(alarm){
        return (alarm.id !== alarmId)
    }
    )
    alarms = newAlarmsList;
    renderList();
}

// function to handle the click event on the delete buttons
function handleClickListener(e){
    const target = e.target;
    // check if the button pressed is the delete button
    if(target.className == "btn delete"){
        const alarmId = target.dataset.id;
        deleteAlarm(alarmId); // passing the ID of the clicked alarm to the delete alarm function
        return false;
    } else return false;
}

// function to show the necessary notification
function showNotification(text){
 alert(text);
}

// function to show an alert and then delete the alarm from the list when alarm time matches the current time.
function ringAlarm(){
    // iteration over all the alarms in the alarms list.
    for(let i = 0; i<alarms.length;i++){
        if(currentHour == alarms[i].totalHour && currentMin == alarms[i].totalMin && currentSec == alarms[i].totalSec && amPmvalueCurrent == alarms[i].amPmValue){
            showNotification("Your Alarm Is Ringing !!! Please Press Enter To Turn It OFF")
            deleteAlarm(alarms[i].id);
        }
    }
}

// function call to pre-set the input values for setting the alarm.
setAlarmScreen();

//using seInterval() to check if the set alarm has matched the current time.
setInterval(ringAlarm , 1)

// event listener to set the hours value
inputTime[0].addEventListener('keyup',setHour)
// event listener to set the minutes value
inputTime[1].addEventListener('keyup',setMinute)
// event listener to set the seconds value
inputTime[2].addEventListener('keyup',setSecond)
// event listener for am-pm toggle button
amButton.addEventListener('click',amPmToggle)
// event listener for clicking on set alarm button
setAlarmButton.addEventListener('click', setAlarm)
// event listener for clicking on delete buttons
document.addEventListener('click', handleClickListener)
}