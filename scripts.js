window.onload = function(){

  var a;
  var counter;

  document.getElementById('buttons').addEventListener('click',function(evt) {

    var target = evt.target;

    if (target.id === 'userstart') {

    var minutes = parseInt(document.getElementById('userminutes').value);
    var hours = parseInt(document.getElementById('userhours').value);

    var seconds = minutes * 60;
    var millis =  minutes * 60000;

      //create visual timer in seconds
      counter = setInterval(counterFunc, 1000);

      function counterFunc () {
        //NOTE: somehow display a leading zero
        //let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
        //convert all userinput into seconds, add together, then output appropriately in visual counter

        document.getElementById('timer').innerHTML =
          "00" + ":" + "00" + ":" + (seconds - 1);
        seconds--;
        }

      //browser request permission from user for notifications and logs result
      Notification.requestPermission().then(function(result) {
        console.log(result);
      });

      //start notification interval based on user inputted minutes; reset visual timer
      a = setInterval(function(){
          console.log('notify');
          new Notification(document.getElementById('notifytext').value, {
            body: 'It has been ' + minutes + ' minutes.',
            //this needs work to output the correct time entered and plural
          });
          seconds = 60 * minutes;
          counter;
        }, millis);

      //end notification interval and visual countdown when stop button is clicked
    } if (target.id === 'userstop') {
      console.log('stop notifying');
      clearInterval(a);
      clearInterval(counter);
    } else;

  }, false);

}
