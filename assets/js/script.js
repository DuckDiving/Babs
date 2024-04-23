document.addEventListener("DOMContentLoaded", function() {
    var acceptBtn = document.getElementById("acceptBtn");
    var overlay = document.querySelector(".overlay-jumbotron");
  
    acceptBtn.addEventListener("click", function() {
      console.log("Button clicked"); // Debugging statement
      if (overlay) {
        overlay.style.display = "none";
      }
    });
  });