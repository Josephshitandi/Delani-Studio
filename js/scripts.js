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
});