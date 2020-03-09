//browser request permission from user for notifications


// TO DO: only alert after 2nd run (alerts now as soon as you click the button)

window.onload = function(){

  var a;


  document.getElementById('buttons').addEventListener('click',function(evt) {
  var userInput = Math.floor(60000 * document.getElementById('userminutes').value);


    var target = evt.target;
    if (target.id === 'userstart') {
      Notification.requestPermission().then(function(result) {
        console.log(result);
      });

      a = setInterval(function(){
        console.log('start');
        new Notification('Time is up!');
      }, userInput);



    } else if (target.id === 'userstop') {
      console.log('stop');
      clearInterval(a);
    } else;
  }, false);

}


    /*
    a = setTimeout(function startTimer(){
      console.log('start');
      setTimeout(startTimer, userInput)
      }, userInput)
      */


    //stopbutton.onclick =
    //  clearTimeout(a);



/*
//this works - basic - no controls
var timer = setInterval(myTimer, 5000);

function myTimer () {
  new Notification('Get Up');
}
*/
