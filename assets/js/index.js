var currentDate = new Date();

// Get the current year
var currentYear = currentDate.getFullYear();

document.querySelector(".year").innerHTML = currentYear

// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.querySelector(".modal");


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

setTimeout(() => {
    modal.style.display = "block"
    modal1.style.display = "block"
}, 2000);

// Get this Month
const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
document.querySelector(".promo_month").innerHTML = currentMonth