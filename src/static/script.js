$(document).ready(function() {
    $(".fa-times").click(function() {
        $(this).parent().css("display", "none");
        $("#id_form-" + $(this).attr("id") + "-link").val("");
        console.log($("#id_form-" + $(this).attr("id") + "-link").val());
    });
});