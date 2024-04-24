document.addEventListener("DOMContentLoaded", function() {
  var acceptBtn = document.getElementById("acceptBtn");
  var overlay = document.querySelector(".overlay-jumbotron");
  var popup = document.querySelector(".popup");

  // Function to check if a click event occurred outside of the popup
  function isOutsidePopup(target) {
    return !popup.contains(target);
  }

  acceptBtn.addEventListener("click", function() {
    overlay.style.display = "none";
  });

  // Add event listener to the overlay
  overlay.addEventListener("click", function(event) {
    // Check if the click occurred outside of the popup
    if (isOutsidePopup(event.target)) {
      overlay.style.display = "none";
    }
  });
});