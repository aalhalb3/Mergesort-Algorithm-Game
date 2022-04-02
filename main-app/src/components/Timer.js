let myInterval;
module.exports = {
    startTimer : function() {
      myInterval = setInterval(countTimer, 1000);
    },

    resetTimer : function(){
      clearInterval(myInterval);
      totalSeconds = 0;
    },

    stopTimer : function(){
      clearInterval(myInterval);
    },

    getTime : function(){
      return totalSeconds;
    }
}
    
//Display timer
let totalSeconds = 0;
function countTimer() {
    ++totalSeconds;
    let hour = Math.floor(totalSeconds /3600);
    let minute = Math.floor((totalSeconds - hour*3600)/60);
    let seconds = totalSeconds - (hour*3600 + minute*60);
    if(hour < 10)
      hour = "0"+hour;
    if(minute < 10)
      minute = "0"+minute;
    if(seconds < 10)
      seconds = "0"+seconds;
    document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}