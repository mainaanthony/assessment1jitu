//to convert a certain number into hours and minutes


function convertIntoHoursMinutes(n){
const num = n
const hours = (num/60)
const setHours = Math.floor(hours)
const minutes = (hours - setHours) * 60
const setMinutes = Math.round(minutes)

return  setHours + "hour(s)" + setMinutes + "minutes"



}

console.log(convertIntoHoursMinutes(500))