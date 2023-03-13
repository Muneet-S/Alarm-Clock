# Alarm-Clock
Project on making an alarm clock using HTML,CSS &amp; JavaScript only.

The idea for this project is to provide the user with an alarm clock application.

In this application, there is a time bar which shows the current time to the user. This current time is in 12-hour format.
Am-Pm values are used to indicate the before-noon or after - noon concept.

After the current time, another section to enter the desired time for setting the alarm is provided.
This screen shows the initial set alarm value to be 10 minutes ahead of the current time. This also keeps in account that if the minutes input gets the value over 59 then it will automatically turn it into the minutes time for the next hour and also increase the hour input value by 1.
Here the hours input can take value only from 0 to 12. The first digit and the second digit have their own sepcific rules. so if the user enters more than 2 digits then the extra character is deleted automatically and a notification is shown to enter a number between 1 to 12.
The minutes and seconds input elements have the similar set of rules to the hour input tag with one change that these can take values from 0 to 60.
These input tags were not given the type attribute of a number because then the browser shows the arrow keys on the input tag to increase or decrease the number value. Here, the width of input tag is quite short so those arrows were occupying unnecessary space and hence, type attribute was set to text and use cases were defined.
If the user presses backspace as well then that use-case is also defined and will not cause any error.

A unordered list tag is provided to show all the alarms to be added.

In the JavaScript code, functions are provided to set the alarm which takes the value inside the input elements to set a new alarm. Other functions are also used to add the alarm to the list, delete the alarm, make the list, ring the alarm, show notification to user.

Once an alarm goes off, it is automatically deleted from the list. This setting can also be changed by just deleting the deleteAlarm() function present in the ringAlarm() function.

Event listeners are added to know the clicks and the key-up events.

A scroll bar is provided to the container which has all the lists so that the height does not keep on increasing. a max-height property is given to help with this.

Styles like linear-gradient for the background, font-styles, font-sizes, boldness of the characters, borders, border-radius, padding, margin and other stuff are also taken care of.

Any changes, style wise or functionality wise can be done with ease.
