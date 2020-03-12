window.onload = function(){

  var a;

  document.getElementById('buttons').addEventListener('click',function(evt) {
    var userMillis = Math.floor(60000 * document.getElementById('userminutes').value);

    var seconds = Math.floor(60 * document.getElementById('userminutes').value);

    var target = evt.target;
    if (target.id === 'userstart') {

      var counter = setInterval(function(){
        document.getElementById('timer').innerHTML = (seconds-1);
        seconds--
        if (seconds === 0) {
          document.getElementById('timer').innerHTML = '0';
          clearInterval(counter);
        }
      }, 1000);

      // it's based on start button being pressed so it doesnt start over for each interval, only runs until first notify
      //on notification send instead?? Notification.onshow? will recursive timeout work any better

      //browser request permission from user for notifications and logs result
      Notification.requestPermission().then(function(result) {
        console.log(result);
      });

      //start notification interval based on user inputted minutes
      a = setInterval(function(){
        console.log('notify');
        new Notification(document.getElementById('notifytext').value, {
          body: 'It has been ' + document.getElementById('userminutes').value + ' minutes.',
        });
      }, userMillis);

      //end notification interval when stop button is clicked
    } else if (target.id === 'userstop') {
      console.log('stop');
      clearInterval(a);

    } else;

  }, false);

}
