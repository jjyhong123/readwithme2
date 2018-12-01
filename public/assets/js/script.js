$(document).ready(() => {

    var myAudio = document.getElementById('my-audio');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
  
    // associate functions with the 'onclick' events
    play.onclick = playAudio;
    pause.onclick = pauseAudio;
  
    function playAudio() {
      myAudio.play();
      console.log("Played")
    }
  
    function pauseAudio() {
      myAudio.pause();
    }

})