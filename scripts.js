window.onload = function(){

  var a;

  document.getElementById('buttons').addEventListener('click',function(evt) {
    var userInput = Math.floor(60000 * document.getElementById('userminutes').value);

    var target = evt.target;
    if (target.id === 'userstart') {

      //browser request permission from user for notifications and logs result
      Notification.requestPermission().then(function(result) {
        console.log(result);
      });

      //start notification interval based on user inputted minutes
      a = setInterval(function(){
        console.log('start');
        //new Notification(notify);
        new Notification(document.getElementById('notifytext').value, {
          body: 'It has been ' + document.getElementById('userminutes').value + ' minutes.',
        });
      }, userInput);

      //end notification interval when stop button is clicked
    } else if (target.id === 'userstop') {
      console.log('stop');
      clearInterval(a);

    } else;

  }, false);

}
