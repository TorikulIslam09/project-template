//=======================sticky-header==============
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("sticky-header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 

// AOS.init();
AOS.init({
    duration: 1200,
  })

//   Owlcarosel

  $('.title-carosel').owlCarousel({
    // items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav:false,
    // animateOut: 'animate__bounceOutLeft',
    smartSpeed: 1500,
    margin:10,

    responsive:{
        0:{
            items:1,
          
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }

})

// App Development
$(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $("#app-development")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% Complete");
        if (current_progress >= 90)
            clearInterval(interval);
    }, 100);
});

// Web Design
$(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $("#web-design")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% Complete");
        if (current_progress >= 80)
            clearInterval(interval);
    },100);
});

// E-commerce Development
$(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $("#e-com")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% Complete");
        if (current_progress >=90)
            clearInterval(interval);
    },100);
});

// Website Maintenance
$(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $("#web-main")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% Complete");
        if (current_progress >= 100)
            clearInterval(interval);
    },100);
});

// Search Engine Optimization
$(function() {
    var current_progress = 0;
    var interval = setInterval(function() {
        current_progress += 5;
        $("#seo")
        .css("width", current_progress + "%")
        .attr("aria-valuenow", current_progress)
        .text(current_progress + "% Complete");
        if (current_progress >= 100)
            clearInterval(interval);
    },100);
});


// Testimonial Carousel
$('.testimoni-carosel').owlCarousel({
    // items:2,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    nav:false,
    dots:true,
    // animateOut: 'animate__bounceOutLeft',
    smartSpeed: 1500,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
        }
    }

})



//  partner-Owlcarosel  

$('.parrent_carosel').owlCarousel({
    // items:4,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav:false,
    margin:15,
    // animateOut: 'animate__bounceOutLeft',
    smartSpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }

})



//poroduct slide

$('.product_slide').owlCarousel({
    // items:3,
    loop:true,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true,
    nav:false,
    dots:true,
    margin:20,
    // animateOut: 'animate__bounceOutLeft',
    smartSpeed: 1500,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
        },
        800:{
            items:2,
        },
        1000:{
            items:3,
        }
    }


})


$('.category-button').categoryFilter();

$(document).ready(function(){
    $(".add-attr").click(function(){            
        $('input[type="checkbox"]').attr("checked", "checked");
    });
});
$( this ).attr( 'checked', true )



$(document).ready(function() {
    $("input[name$='cars']:eq(0)").click(function() {
        console.log("yes")
        var test = $(this).val();
        $(".myRadioGroup1").hide();
        $(".myRadioGroup").show();
        $("input").addClass("torikul");

        // $("#Cars" + test).show();
    });
    $("input[name$='cars']:eq(1)").click(function() {
        console.log("yes")
        var test = $(this).val();
        $(".myRadioGroup1").show();
        $(".myRadioGroup").hide();
        // $("#Cars" + test).show();
    });
    $("input[name$='cars']:eq(2)").click(function() {
        console.log("yes")
        var test = $(this).val();
        $(".myRadioGroup1").hide();
        $(".myRadioGroup").show();
        // $("#Cars" + test).show();
    });
    $("input[name$='cars']:eq(3)").click(function() {
        console.log("yes")
        var test = $(this).val();
        $(".myRadioGroup1").show();
        $(".myRadioGroup").hide();
        // $("#Cars" + test).show();
    });
});

//   toggleClass