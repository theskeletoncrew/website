function startEyeMouseTracking() {
  var pupils = document.querySelectorAll(".watching-eye");

  for (var i = 0; i < pupils.length; i++) {
    var offset = pupils[i].getBoundingClientRect();
    (pupils[i]["centerX"] = offset.left + offset.width / 2),
      (pupils[i]["centerY"] = offset.bottom);
  }

  function goGoogly(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    for (var i = 0; i < pupils.length; i++) {
      (pupils[i]["radians"] = Math.atan2(
        mouseX - pupils[i]["centerX"],
        mouseY - pupils[i]["centerY"]
      )),
        (pupils[i]["degree"] =
          pupils[i]["radians"] * (180 / Math.PI) * -1 + 180 - 15);
      pupils[i].style.transform = "rotate(" + pupils[i]["degree"] + "deg)";
    }
  }

  window.addEventListener("mousemove", goGoogly);
}

function updatedScrollPosition() {
  var image = document.getElementById("mini-skull-img");
  var scrollY = document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - window.innerHeight;
  var numImages = 28;
  var imgNum = 1 + Math.max(0, Math.floor((numImages * scrollY) / height));
  image.src = "/images/logos/" + imgNum + ".png";
}

function startScrollTracking() {
  var ticking = false;

  document.addEventListener("scroll", function (e) {
    var lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        updatedScrollPosition(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });
}

function startCalendarPopupTracking() {
  var calendarTargets = document.querySelectorAll(".future");
  var calendar = document.querySelectorAll("#calendar ol")[0];
  var calendarPopup = document.getElementById("calendar-popup");
  var quantityElement = document.getElementById("calendar-popup-quantity");
  var objectElement = document.getElementById("calendar-popup-item");
  var rarityElement = document.getElementById("calendar-popup-rarity");
  var halloweenElement = document.getElementById("halloween");
  var halloweenPopup = document.getElementById("halloween-popup");

  var quantities = ["17", "5", "28", "6,969", "2", "1000", "250", "500"];
  var objects = ["SKULLS", "TRICKS", "TREATS", "BONES"];

  var desktopOffsetX = -74;
  var desktopOffsetY = -321;
  var mobileOffsetX = -60;
  var mobileOffsetY = -155;

  function showPopup(elem) {
    var offsetX = desktopOffsetX;
    var offsetY = desktopOffsetY;

    if (window.innerWidth < 1000) {
      offsetX = mobileOffsetX;
      offsetY = mobileOffsetY;
    }

    var quantity = quantities[Math.floor(quantities.length * Math.random())];
    var object = objects[Math.floor(objects.length * Math.random())];

    var rarity = 1 + Math.floor(4 * Math.random());
    var rarityString = "";
    for (i = 0; i < rarity; i++) {
      rarityString += "★";
    }
    for (i = rarity; i < 5; i++) {
      rarityString += "☆";
    }

    quantityElement.innerHTML = quantity;
    objectElement.innerHTML = object;
    rarityElement.innerHTML = rarityString;

    calendarPopup.style.left = offsetX + elem.offsetLeft + "px";
    calendarPopup.style.top = offsetY + elem.offsetTop + "px";
    calendarPopup.style.display = "block";
    halloweenPopup.style.display = "none";
  }

  function hidePopup() {
    calendarPopup.style.display = "none";
  }

  function showHalloweenPopup(elem) {
    var offsetX = desktopOffsetX;
    var offsetY = desktopOffsetY;

    if (window.innerWidth < 1000) {
      offsetX = mobileOffsetX;
      offsetY = mobileOffsetY;
    }

    halloweenPopup.style.left = offsetX + elem.offsetLeft + "px";
    halloweenPopup.style.top = offsetY + elem.offsetTop + "px";
    halloweenPopup.style.display = "block";
    calendarPopup.style.display = "none";
  }

  function hideHalloweenPopup() {
    halloweenPopup.style.display = "none";
  }

  for (var i = 0; i < calendarTargets.length; i++) {
    calendarTargets[i].onmouseover = function (e) {
      showPopup(e.target);
    };
  }

  // halloween specific

  halloweenElement.onmouseover = function (e) {
    showHalloweenPopup(e.target);
  };

  // hiding

  calendar.onmouseleave = function (e) {
    hidePopup();
    hideHalloweenPopup();
  };
}

function loaded() {
  startEyeMouseTracking();
  startScrollTracking();
  startCalendarPopupTracking();
}

if (document.readyState !== "loading") {
  loaded();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    loaded();
  });
}
