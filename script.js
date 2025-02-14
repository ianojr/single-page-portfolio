$(document).ready(function () {
    $("#about").click(function () {
        $("#homeContent").hide();
        $("#aboutContent").show();
        $("#educationContent").hide();
        $("#contactContent").hide();

    })

    $("#home").click(function () {
        $("#aboutContent").hide();
        $("#homeContent").show();
        $("#educationContent").hide();
        $("#contactContent").hide();
    })

    $("#education").click(function () {
        $("#aboutContent").hide();
        $("#homeContent").hide();
        $("#educationContent").show();
        $("#contactContent").hide();
    })

    $("#contact").click(function () {
        $("#aboutContent").hide();
        $("#homeContent").hide();
        $("#educationContent").hide();
        $("#contactContent").show();
    })
})