$(document).ready(function() {
    var bgimage = new Image();
    bgimage.src = "img/loby.jpg";
    $(bgimage).on('load', function() {
        $(".fadeIn").css({
            "background-image": "url(" + $(this).attr("src") + ")",
            "background-repeat": "no-repeat",
            "width": "100 %",
            "height": "auto",
            "background-attachment": "fixed",
            "background-size": "cover"
        }).fadeIn(1000);
    });
    /*! Fades out the whole page when clicking links */
    $('a').click(function(e) {
        e.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1000, newpage);
    });

    function newpage() {
        window.location = newLocation;
    }
});