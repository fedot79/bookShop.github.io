//слайдер
$('.single-item').slick({
    infinite: true,
    autoplay:true,

});
// выпадающее меню
$(" .new").removeClass("d-flex").hide();
$(" .used").removeClass("d-flex").hide();
$(" .offer").removeClass("d-flex").hide();




$("#all").click(function () {
    if ($("#all").hasClass("act")){
        $(".all-child").hide("slow");
        $(".fict-child").hide("slow");
        $(".non-child").hide("slow");
        $(".other-child").hide("slow");
        $("#all").removeClass("act");
        $(".fict").removeClass("act");
        $(".non").removeClass("act");
        $(".other").removeClass("act");

    }else {
        $(".all-child").show("slow");

        $("#all").addClass("act");
        $(".fict").addClass("act");
        $(".non").addClass("act");
        $(".other").addClass("act");
    }
});
$(".fict").click(function () {
    if ($(".fict").hasClass("act")){
        $(".fict-child").show("slow");
        $(".fict").removeClass("act");
    }else {
        $(".fict-child").hide("slow");
        $(".fict").addClass("act");
    }
});
$(".non").click(function () {
    if ($(".non").hasClass("act")){
        $(".non-child").show("slow");
        $(".non").removeClass("act");
    }else {
        $(".non-child").hide("slow");
        $(".non").addClass("act");
    }
});
$(".other").click(function () {
    if ($(".other").hasClass("act")){
        $(".other-child").show("slow");
        $(".other").removeClass("act");
    }else {
        $(".other-child").hide("slow");
        $(".other").addClass("act");
    }
});

// активное меню
$(".tabs-head").click(function () {
    $(" .tabs-cell").removeClass("d-flex").hide();
    $(".nav-item button").removeClass("active-tab");
    $(this).addClass("active-tab");
    switch (this.id) {
        case "bs":
            $(".best").addClass("d-flex").show();
            break;
        case "na":
            $(".new").addClass("d-flex").show();
            break;
        case "ub":
            $(".used").addClass("d-flex").show();
            break;
        case "so":
            $(".offer").addClass("d-flex").show();
            break;
    }
});

$(".info-tab").click(function(e){e.preventDefault()});
//category-name

$(document).ready(function() {
    $(".cat").click(function () {
        var catName = this.text;
        $(".cat-name").text(catName);
    });
});