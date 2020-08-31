// what we do section
$(document).ready(function () {
    $("#design-pic").click(function () {
        $("#design-p").show();
        $("#design-pic").hide();
    })
    $("#design-p").click(function () {
        $("#design-p").hide();
        $("#design-pic").show();
    })
    $("#development-pic").click(function () {
        $("#development-p").show();
        $("#development-pic").hide();
    })
    $("#development-p").click(function () {
        $("#development-p").hide();
        $("#development-pic").show();
    });
    $("#product-pic").click(function () {
        $("#product-p").show();
        $("#product-pic").hide();
    })
    $("#product-p").click(function () {
        $("#product-p").hide();
        $("#product-pic").show();
    });
});
// portfolio section
$(document).ready(function () {
    $('.card0').mouseover(function () {
        $('.project').show();
    });
    $('.card0').mouseout(function () {
        $('.project').hide();
    });

    $('.card1').mouseover(function () {
        $('.project2').show();
    });
    $('.card1').mouseout(function () {
        $('.project2').hide();
    });

    $('.card2').mouseover(function () {
        $('.project3').show();
    });
    $('.card2').mouseout(function () {
        $('.project3').hide();
    });

    $('.card3').mouseover(function () {
        $('.project4').show();
    });
    $('.card3').mouseout(function () {
        $('.project4').hide();
    });

    $('.card4').mouseover(function () {
        $('.project5').show();
    });
    $('.card4').mouseout(function () {
        $('.project5').hide();
    });

    $('.card5').mouseover(function () {
        $('.project6').show();
    });
    $('.card5').mouseout(function () {
        $('.project6').hide();
    });

    $('.card6').mouseover(function () {
        $('.project7').show();
    });
    $('.card6').mouseout(function () {
        $('.project7').hide();
    });

    $('.card7').mouseover(function () {
        $('.project8').show();
    });
    $('.card7').mouseout(function () {
        $('.project8').hide();
    });
});

//form function
function contact(form) {
    var name = document.forms["contacts"]["name"].value;
    var email = document.forms["contacts"]["email"].value;
    var message = document.forms["contacts"]["message"].value;
    alert("Hello! " + name + "," + " We have received your message. Thank you for reaching out to us. ");
}