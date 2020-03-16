window.onload = function(){

  var a;
  var counter;

  document.getElementById('buttons').addEventListener('click',function(evt) {

    var userMillis = Math.floor(60000 * document.getElementById('userminutes').value);
    var seconds = Math.floor(60 * document.getElementById('userminutes').value);

    var target = evt.target;

    if (target.id === 'userstart') {

      //create visual timer in seconds
      counter = setInterval(counterFunc, 1000);

      function counterFunc () {
        document.getElementById('timer').innerHTML = (seconds-1);
        seconds--
        }

      //browser request permission from user for notifications and logs result
      Notification.requestPermission().then(function(result) {
        console.log(result);
      });

      //start notification interval based on user inputted minutes; reset visual timer
      a = setInterval(function(){
          console.log('notify');
          new Notification(document.getElementById('notifytext').value, {
            body: 'It has been ' + document.getElementById('userminutes').value + ' minutes.',
          });
          seconds = Math.floor(60 * document.getElementById('userminutes').value);
          counter;
        }, userMillis);

      //end notification interval and visual countdown when stop button is clicked
    } if (target.id === 'userstop') {
      console.log('stop notifying');
      clearInterval(a);
      clearInterval(counter);
    } else;

  }, false);

}
