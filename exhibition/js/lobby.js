/*! Fades out the whole page when clicking links */
$('a').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(1000, newpage);
});

function newpage() {
    window.location = newLocation;
}