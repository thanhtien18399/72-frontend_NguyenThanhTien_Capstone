function lightDark() {
    var iconlight = document.getElementById("iconlight");
    function iconToggle() {
        if (iconlight.classList.contains("fa-moon") === true) {
            iconlight.classList.remove("fa-moon");
            iconlight.classList.add("fa-sun");
        } else {
            iconlight.classList.remove("fa-sun");
            iconlight.classList.add("fa-moon");
        }
    }
    iconToggle();
    const root = document.querySelector(':root');
    const isLightMode =
      root.getAttribute('data-theme') === 'dark' ? false : true;
    // toggle theme mode
    if (isLightMode) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }

    // var checkbox_toggle = document.getElementById('light-dark');
    // checkbox_toggle = document.body.classList.toggle("dark");
    //
//     var work = document.getElementById("work");
//     work.classList.toggle("bglightGrey");
//     //
//     //
//     var gallery = document.getElementById("gallery");
//     gallery.classList.toggle("bglightGrey");
//     //
//     var card = document.querySelectorAll(".card");
//     for (var c = 0; c < card.length; c++) {
//         card[c].style.border = "1px solid #ffffff33";
//         card[c].style.backgroundColor = "transparent";
//     }
//     var item = document.querySelectorAll(".item");
//     for (var i = 0; i < item.length; i++) {
//         item[i].classList.toggle("dark");
//     }
//     var newCardBody = document.querySelectorAll(".card-body");
//     for (var j = 0; j < newCardBody.length; j++) {
//         newCardBody[j].classList.toggle("dark");
//     }
//     var newCardFooter = document.querySelectorAll(".card-footer");
//     for (var j = 0; j < newCardFooter.length; j++) {
//         newCardFooter[j].classList.toggle("dark");
//         newCardFooter[j].style.borderTop = "1px solid #ffffff33";
//     }
//     //
//     var testimonials = document.getElementById("testimonials");
//     testimonials.classList.toggle("bglightGrey");
//     //
    var wavedark = document.getElementById("wave-dark");
    wavedark.classList.toggle("fill");
}

function clickRight() {
    var iconRightLeft = document.getElementById("tooltipstered");
    if (iconRightLeft.classList.contains("fa-angle-double-right")) {
        iconRightLeft.classList.remove("fa-angle-double-right");
        iconRightLeft.classList.add("fa-angle-double-left");
    } else {
        iconRightLeft.classList.remove("fa-angle-double-left");
        iconRightLeft.classList.add("fa-angle-double-right");
    }
    document.getElementById("right-sidebar").classList.toggle("hide-right-bar-notifications");
}

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $("#site-header").addClass("header-white");
        } else {
            $("header").removeClass("header-white");
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $("#movetop").fadeIn();
        } else {
            $("#movetop").fadeOut();
        }
    });
    $("#movetop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
    });
});


function navbarToggler(){
    var navbar= document.querySelector(".navbar-collapse");
    navbar.classList.toggle("collapse");
    document.querySelector(".navbar-nav").classList.toggle("dark")
    document.querySelector("#navbarNavDropdown").classList.toggle("collapse");
    document.querySelector("#site-header").classList.toggle("dark");
}