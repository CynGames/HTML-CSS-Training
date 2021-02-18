// Google map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -31.251660, lng: -61.476570 },
    zoom: 8,

  });
}

// Sticky menu Background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate({
      scrollTop: $(hash).offset().top - 100
    },
      800
    );
  }
})