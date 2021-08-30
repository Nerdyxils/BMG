function toggleText(){
    if ($("#txt-1").css("display") != "none") {
        $("#txt-1").css("display", "none");
        $("#txt-2").css("display", "block");
        $("#txt-3").css("display", "none");
    } else if ($("#txt-2").css("display") != "none") {
        $("#txt-1").css("display", "none");
        $("#txt-2").css("display", "none");
        $("#txt-3").css("display", "block");
    } else if ($("#txt-3").css("display") != "none") {
        $("#txt-1").css("display", "none");
        $("#txt-2").css("display", "none");
        $("#txt-3").css("display", "none");
        $("#txt-4").css("display", "block");
    } else {
        $("#txt-5").css("display", "block");
        $("#txt-2").css("display", "none");
        $("#txt-3").css("display", "none");
        $("#txt-4").css("display", "none");
        $(".btnNext").css("display", "none");
    } 
};