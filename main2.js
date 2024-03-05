document.addEventListener("DOMContentLoaded", function() {
    var showMessageButton = document.getElementById("showMessageButton");
    var birthdayMessage = document.getElementById("birthdayMessage");
    var birthdayMusic = document.getElementById("birthdayMusic");
  
    showMessageButton.addEventListener("click", function() {
      birthdayMessage.style.display = "block";
      birthdayMusic.play();
    });
  });
  
  